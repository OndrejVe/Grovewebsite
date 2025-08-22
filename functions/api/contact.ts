// /functions/api/contact.ts
// Cloudflare Pages Function: bezpečný kontaktní formulář s Turnstile + Brevo
// ENV (Pages → Settings → Variables):
//   BREVO_API_KEY, TO_EMAIL, FROM_EMAIL, TURNSTILE_SECRET
// Volitelné: SITE_NAME, REPLY_SUBJECT_CZ, REPLY_SUBJECT_EN

interface Env {
  BREVO_API_KEY: string;
  TO_EMAIL: string;
  FROM_EMAIL: string;
  TURNSTILE_SECRET: string;
  SITE_NAME?: string;
  REPLY_SUBJECT_CZ?: string;
  REPLY_SUBJECT_EN?: string;
}

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  // Turnstile token (název pole z formuláře):
  "cf-turnstile-response"?: string;
  turnstile?: string;
};

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";
const TURNSTILE_VERIFY = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

// Pomocné – jednoduchá validace e‑mailu
function isEmail(s: string | undefined) {
  return !!s && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

// Minimalistický HTML e‑mail (notifikace pro nás)
function adminHtml(p: Required<Pick<Payload,"name"|"email"|"message">> & Partial<Payload>, site: string) {
  return `
  <div style="font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial;">
    <h2>Nová poptávka z ${site}</h2>
    <p><strong>Jméno:</strong> ${escapeHtml(p.name)}</p>
    <p><strong>E‑mail:</strong> ${escapeHtml(p.email)}</p>
    ${p.company ? `<p><strong>Firma:</strong> ${escapeHtml(p.company!)}</p>` : ""}
    <p><strong>Zpráva:</strong></p>
    <pre style="white-space:pre-wrap">${escapeHtml(p.message)}</pre>
    <hr><small>Tento e‑mail byl vygenerován automaticky.</small>
  </div>`;
}

// Minimalistický HTML e‑mail (auto‑reply pro klienta)
function autoReplyHtml(p: Required<Pick<Payload,"name"|"message">>, site: string) {
  return `
  <div style="font-family:ui-sans-serif,system-ui,Segoe UI,Roboto,Helvetica,Arial;">
    <h2>Děkujeme za zprávu</h2>
    <p>Ahoj ${escapeHtml(p.name)}, děkujeme za kontakt na ${escapeHtml(site)}. Ozveme se co nejdříve.</p>
    <p><strong>Tvoje zpráva:</strong></p>
    <pre style="white-space:pre-wrap">${escapeHtml(p.message)}</pre>
    <p>— Tým ${escapeHtml(site)}</p>
  </div>`;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]!));
}

export const onRequestPost: PagesFunction<Env> = async (ctx) => {
  try {
    const { request, env } = ctx;
    const contentType = request.headers.get("content-type") || "";

    let body: Payload = {};
    if (contentType.includes("application/json")) {
      body = await request.json();
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await request.formData();
      form.forEach((v, k) => (body as any)[k] = String(v));
    } else {
      return json({ ok: false, error: "Unsupported content type" }, 415);
    }

    const name = (body.name || "").toString().trim();
    const email = (body.email || "").toString().trim();
    const company = (body.company || "").toString().trim();
    const message = (body.message || "").toString().trim();
    const token = (body["cf-turnstile-response"] || body.turnstile || "").toString().trim();

    if (!name || !isEmail(email) || !message) {
      return json({ ok: false, error: "Missing required fields" }, 400);
    }

    // Ověření Turnstile
    if (!env.TURNSTILE_SECRET) {
      return json({ ok: false, error: "Server misconfigured: TURNSTILE_SECRET missing" }, 500);
    }
    const verify = await fetch(TURNSTILE_VERIFY, {
      method: "POST",
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: token,
        remoteip: ctx.request.headers.get("cf-connecting-ip") || "",
      }),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }).then(r => r.json() as Promise<{ success: boolean }>);
    if (!verify.success) {
      return json({ ok: false, error: "Turnstile verification failed" }, 403);
    }

    const site = env.SITE_NAME || "Grove Tech AI";
    const adminSubject = `Poptávka z webu – ${site}`;
    const replySubCZ = env.REPLY_SUBJECT_CZ || `Děkujeme za zprávu – ${site}`;
    const replySubEN = env.REPLY_SUBJECT_EN || `Thanks for your message – ${site}`;

    // Odešleme 2 e‑maily přes Brevo
    if (!env.BREVO_API_KEY || !env.TO_EMAIL || !env.FROM_EMAIL) {
      return json({ ok: false, error: "Server misconfigured: Brevo env missing" }, 500);
    }

    // 1) Notifikace nám
    await sendBrevo(env, {
      to: [{ email: env.TO_EMAIL }],
      sender: { email: env.FROM_EMAIL, name: site },
      subject: adminSubject,
      htmlContent: adminHtml({ name, email, company, message }, site),
      replyTo: { email, name },
      headers: { "X-Contact-Form": "web" }
    });

    // 2) Auto‑reply klientovi
    await sendBrevo(env, {
      to: [{ email, name }],
      sender: { email: env.FROM_EMAIL, name: site },
      subject: `${replySubCZ} / ${replySubEN}`,
      htmlContent: autoReplyHtml({ name, message }, site),
      headers: { "X-Auto-Reply": "true" }
    });

    return json({ ok: true, message: "Submitted" }, 200);

  } catch (err: any) {
    return json({ ok: false, error: err?.message || "Internal error" }, 500);
  }
};

async function sendBrevo(env: Env, payload: {
  to: { email: string, name?: string }[];
  sender: { email: string, name?: string };
  subject: string;
  htmlContent: string;
  replyTo?: { email: string, name?: string };
  headers?: Record<string,string>;
}) {
  const res = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": env.BREVO_API_KEY,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Brevo error ${res.status}: ${txt}`);
  }
}

function json(data: any, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
