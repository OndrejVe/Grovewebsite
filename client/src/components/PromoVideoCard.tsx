import React, { useEffect, useRef, useState } from 'react';

interface AgentContactCardProps {
  agentClientKey: string;
  agentId: string;
  mode?: string;
  monitor?: string;
  title: string;
  desc?: string;
  className?: string;
  fallbackSrc?: string;
  poster?: string;
  formAction?: string;
  turnstileSiteKey: string;
  lang?: 'cs' | 'en';
}

const AgentContactCard: React.FC<AgentContactCardProps> = ({
  agentClientKey,
  agentId,
  mode = 'fabio',
  monitor = 'true',
  title,
  desc,
  className,
  fallbackSrc,
  poster,
  formAction = '/api/contact',
  turnstileSiteKey,
  lang = (document?.documentElement?.lang === 'en' ? 'en' : 'cs') as 'cs' | 'en',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showFallback, setShowFallback] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Inject D-ID script if not present
    if (!document.querySelector('script[src="https://agent.d-id.com/v1/index.js"]')) {
      const didScript = document.createElement('script');
      didScript.type = 'module';
      didScript.src = 'https://agent.d-id.com/v1/index.js';
      document.body.appendChild(didScript);
    }
    // Inject Turnstile script if not present
    if (!document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]')) {
      const tsScript = document.createElement('script');
      tsScript.defer = true;
      tsScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      document.body.appendChild(tsScript);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!containerRef.current) return;
      const hasIframe = containerRef.current.querySelector('iframe');
      if (!hasIframe) setShowFallback(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch(formAction, { method: 'POST', body: formData });
      const ok = response.ok;
      if (ok) {
        alert(lang === 'cs' ? 'Díky! Zprávu jsme přijali a poslali jsme vám potvrzení e‑mailem.' : 'Thanks! We received your message and sent you a confirmation email.');
        form.reset();
        // @ts-ignore
        if (window.turnstile?.reset) window.turnstile.reset();
      } else {
        alert(lang === 'cs' ? 'Odeslání se nepodařilo, zkuste to prosím znovu.' : 'Submission failed, please try again.');
      }
    } catch {
      alert(lang === 'cs' ? 'Nastala chyba při odesílání.' : 'An error occurred while sending.');
    }
  };

  return (
    <div className={className}>
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {desc && <p className="text-slate-600 mt-1">{desc}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        {/* Agent / Video */}
        <div ref={containerRef}>
          <div
            data-name="did-agent"
            data-mode={mode}
            data-client-key={agentClientKey}
            data-agent-id={agentId}
            data-monitor={monitor}
          />
          {showFallback && fallbackSrc && (
            <video
              src={fallbackSrc}
              poster={poster}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', borderRadius: 16, display: 'block' }}
            />
          )}
        </div>

        {/* Contact form */}
        <form ref={formRef} onSubmit={handleSubmit} action={formAction} method="POST" className="space-y-3">
          <input type="hidden" name="lang" value={lang} />
          <div>
            <label className="block text-sm mb-1" htmlFor="name">{lang === 'cs' ? 'Jméno a příjmení' : 'Full name'}</label>
            <input id="name" name="name" required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="email">E‑mail</label>
            <input id="email" name="email" type="email" required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="company">{lang === 'cs' ? 'Firma (volitelně)' : 'Company (optional)'}</label>
            <input id="company" name="company" className="w-full border rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1" htmlFor="message">{lang === 'cs' ? 'Zpráva' : 'Message'}</label>
            <textarea id="message" name="message" rows={4} required className="w-full border rounded-md px-3 py-2" />
          </div>
          <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="auto" />
          <button type="submit" className="inline-flex items-center justify-center rounded-md px-4 py-2 bg-black text-white">{lang === 'cs' ? 'Odeslat' : 'Send'}</button>
        </form>
      </div>
    </div>
  );
};

export default AgentContactCard;