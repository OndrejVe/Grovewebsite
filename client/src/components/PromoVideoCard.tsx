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
}

const AgentContactCard: React.FC<AgentContactCardProps> = ({
  agentClientKey,
  agentId,
  mode = 'default',
  monitor = 'false',
  title,
  desc,
  className,
  fallbackSrc,
  poster,
  formAction,
  turnstileSiteKey,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showFallback, setShowFallback] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Inject D-ID script if not present
    if (!document.querySelector('script[src="https://cdn.d-id.com/did-agent/did-agent.esm.js"]')) {
      const didScript = document.createElement('script');
      didScript.type = 'module';
      didScript.src = 'https://cdn.d-id.com/did-agent/did-agent.esm.js';
      document.head.appendChild(didScript);
    }
    // Inject Turnstile script if not present
    if (!document.querySelector('script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]')) {
      const tsScript = document.createElement('script');
      tsScript.defer = true;
      tsScript.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      document.head.appendChild(tsScript);
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!containerRef.current) return;
      const shadowRoot = containerRef.current.shadowRoot;
      const iframe = containerRef.current.querySelector('iframe');
      if (!shadowRoot && !iframe) {
        setShowFallback(true);
      }
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formAction) {
      alert('Form action URL is not set.');
      return;
    }
    const form = e.currentTarget;
    const formData = new FormData(form);
    try {
      const response = await fetch(formAction, {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        alert('Form submitted successfully.');
        form.reset();
        if (window.turnstile && typeof window.turnstile.reset === 'function') {
          window.turnstile.reset();
        }
      } else {
        alert('Form submission failed.');
      }
    } catch {
      alert('Form submission failed.');
    }
  };

  return (
    <div className={className} ref={containerRef}>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}

      <div
        data-name="did-agent"
        data-mode={mode}
        data-client-key={agentClientKey}
        data-agent-id={agentId}
        data-monitor={monitor}
      ></div>

      {showFallback && fallbackSrc && (
        <video src={fallbackSrc} poster={poster} controls />
      )}

      <form onSubmit={handleSubmit} ref={formRef}>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required />
        </div>
        <div>
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} />
        </div>
        <div
          className="cf-turnstile"
          data-sitekey={turnstileSiteKey}
          data-theme="light"
        ></div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default AgentContactCard;