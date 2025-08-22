<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My App</title>
  <!-- Cloudflare Turnstile -->
  <meta name="turnstile-sitekey" content="0x4AAAAAABuJkcYWMITGMDOgrO-ynWxtcbw" />
  <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
</head>
<body>
  <div id="app"></div>

  <!-- Auto‑mount Turnstile widget just above the submit button of the contact form -->
  <script>
    (function () {
      var meta = document.querySelector('meta[name="turnstile-sitekey"]');
      var siteKey = meta ? meta.getAttribute('content') : '';
      if (!siteKey || siteKey === '0x4AAAAAABuJkcYWMITGMDOgrO-ynWxtcbw') {
        console.warn('[Turnstile] Site key missing – open client/index.html and replace PASTE_TURNSTILE_SITE_KEY_HERE with your real key.');
        return;
      }
      function mount() {
        // Heuristicky vybereme kontaktní formulář (obsahuje textarea a e‑mail)
        var forms = Array.prototype.slice.call(document.querySelectorAll('form'));
        var contact =
          forms.find(function (f) {
            return f.querySelector('textarea') && (f.querySelector('input[type="email"]') || f.querySelector('input[name*="email" i]'));
          }) || forms[0];
        if (!contact) return;
        // Najdeme submit tlačítko
        var submit = contact.querySelector('button[type="submit"], input[type="submit"]');
        // Vytvoříme kontejner pro widget
        var holder = document.createElement('div');
        holder.className = 'cf-turnstile';
        holder.setAttribute('data-sitekey', siteKey);
        holder.style.margin = '12px 0';
        // Vložíme těsně nad submit
        if (submit && submit.parentNode) {
          submit.parentNode.insertBefore(holder, submit);
        } else {
          contact.appendChild(holder);
        }
        // Turnstile sám přidá skryté pole 'cf-turnstile-response' do formuláře
      }
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', mount);
      } else {
        mount();
      }
    })();
  </script>
</body>
</html>