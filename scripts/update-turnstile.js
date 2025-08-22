const fs = require('fs');
const path = require('path');

const SITE_KEY = '0x4AAAAAABuJkcYWMITGMDOgrO-ynWxtcbw';
const file = path.resolve('client', 'index.html');

let html = fs.readFileSync(file, 'utf8');

// --- HEAD: meta + loader ---
const metaTag = `<meta name="turnstile-sitekey" content="${SITE_KEY}" />`;
const loaderTag = `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>`;

if (html.includes('name="turnstile-sitekey"')) {
  // přepiš případný starý key
  html = html.replace(
    /<meta\s+name=["']turnstile-sitekey["']\s+content=["'][^"']*["']\s*\/?>/i,
    metaTag
  );
} else {
  // vlož před </head>
  html = html.replace(/<\/head>/i, `  ${metaTag}\n  ${loaderTag}\n</head>`);
}

// Pokud loader ještě není, přidej ho (kdyby už meta existovala dřív)
if (!html.includes('challenges.cloudflare.com/turnstile')) {
  html = html.replace(/<\/head>/i, `  ${loaderTag}\n</head>`);
}

// --- BODY: auto‑mount widgetu (pouze jednou) ---
const marker = '<!-- BEGIN TURNSTILE AUTO-MOUNT -->';
if (!html.includes(marker)) {
  const autoMount = `
  ${marker}
  <script>
  (function(){
    var m = document.querySelector('meta[name="turnstile-sitekey"]');
    var k = m ? m.getAttribute('content') : "";
    if (!k) { console.warn("[Turnstile] missing sitekey"); return; }

    function mount(){
      var forms = Array.prototype.slice.call(document.querySelectorAll("form"));
      var f = forms.find(function(x){
        return x.querySelector("textarea") && (x.querySelector("input[type=email]") || x.querySelector("input[name*=email i]"));
      }) || forms[0];

      if (!f) return;
      // pokud už widget je, nic nedělej
      if (f.querySelector(".cf-turnstile")) return;

      var s = f.querySelector('button[type="submit"],input[type="submit"]');
      var d = document.createElement("div");
      d.className = "cf-turnstile";
      d.setAttribute("data-sitekey", k);
      d.style.margin = "12px 0";
      if (s && s.parentNode) { s.parentNode.insertBefore(d, s); } else { f.appendChild(d); }
    }

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", mount);
    } else {
      mount();
    }
  })();
  </script>
  <!-- END TURNSTILE AUTO-MOUNT -->
  `;
  html = html.replace(/<\/body>/i, autoMount + '\n</body>');
}

// zapiš zpět
fs.writeFileSync(file, html, 'utf8');
console.log('Turnstile snippet applied to client/index.html');
