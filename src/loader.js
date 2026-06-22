/**
 * PortfolioLoader — Engaging animated loading experience
 * Clean, professional, with subtle interactivity
 */

(function () {
  const NAME = 'SARAN V A';

  function injectStyles() {
    if (document.getElementById('pfl-styles')) return;
    const style = document.createElement('style');
    style.id = 'pfl-styles';
    style.textContent = `
      .pfl-root {
        position: fixed;
        inset: 0;
        z-index: 9999;
        background: #0a0a0a;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .pfl-root.pfl-dissolving {
        animation: pfl-dissolve 0.6s ease forwards;
      }

      @keyframes pfl-dissolve {
        from { opacity: 1; transform: scale(1); }
        to { opacity: 0; transform: scale(1.02); filter: blur(8px); }
      }

      .pfl-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;
      }

      /* Animated logo mark */
      .pfl-logo {
        position: relative;
        width: 80px;
        height: 80px;
      }

      .pfl-logo-ring {
        position: absolute;
        inset: 0;
        border: 2px solid rgba(59, 130, 246, 0.3);
        border-radius: 50%;
        animation: pfl-ring-pulse 2s ease-in-out infinite;
      }

      .pfl-logo-ring:nth-child(2) {
        inset: 8px;
        animation-delay: 0.2s;
      }

      .pfl-logo-ring:nth-child(3) {
        inset: 16px;
        animation-delay: 0.4s;
      }

      @keyframes pfl-ring-pulse {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 0.8; transform: scale(1.05); }
      }

      .pfl-logo-core {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12px;
        height: 12px;
        background: #3b82f6;
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
        animation: pfl-core-glow 1.5s ease-in-out infinite;
      }

      @keyframes pfl-core-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
        50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.9), 0 0 50px rgba(59, 130, 246, 0.4); }
      }

      /* Name with staggered reveal */
      .pfl-name {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: clamp(36px, 7vw, 64px);
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -0.03em;
        display: flex;
        gap: 0;
      }

      .pfl-char {
        opacity: 0;
        transform: translateY(20px);
        display: inline-block;
      }

      .pfl-char.pfl-visible {
        animation: pfl-char-reveal 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      @keyframes pfl-char-reveal {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .pfl-char-space {
        width: 0.15em;
      }

      /* Tagline with typewriter effect */
      .pfl-tagline {
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: clamp(11px, 1.3vw, 14px);
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: #71717a;
        overflow: hidden;
        display: flex;
      }

      .pfl-tagline span {
        opacity: 0;
        animation: pfl-fade-in 0.3s ease forwards;
      }

      @keyframes pfl-fade-in {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }

      /* Progress line */
      .pfl-progress {
        width: 120px;
        height: 2px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 2px;
        overflow: hidden;
      }

      .pfl-progress-bar {
        height: 100%;
        width: 0;
        background: linear-gradient(90deg, #3b82f6, #60a5fa);
        border-radius: 2px;
        animation: pfl-progress 1.2s ease forwards;
      }

      @keyframes pfl-progress {
        from { width: 0; }
        to { width: 100%; }
      }

      /* Subtle corner decorations */
      .pfl-corner {
        position: absolute;
        width: 60px;
        height: 60px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        opacity: 0;
        animation: pfl-corner-fade 0.8s ease forwards;
      }

      .pfl-corner-tl { top: 40px; left: 40px; border-right: none; border-bottom: none; }
      .pfl-corner-tr { top: 40px; right: 40px; border-left: none; border-bottom: none; }
      .pfl-corner-bl { bottom: 40px; left: 40px; border-right: none; border-top: none; }
      .pfl-corner-br { bottom: 40px; right: 40px; border-left: none; border-top: none; }

      @keyframes pfl-corner-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .pfl-corner:nth-child(1) { animation-delay: 0s; }
      .pfl-corner:nth-child(2) { animation-delay: 0.1s; }
      .pfl-corner:nth-child(3) { animation-delay: 0.2s; }
      .pfl-corner:nth-child(4) { animation-delay: 0.3s; }
    `;
    document.head.appendChild(style);
  }

  function buildLoader() {
    const root = document.createElement('div');
    root.className = 'pfl-root';
    root.setAttribute('role', 'status');
    root.setAttribute('aria-label', 'Loading portfolio');

    // Corner decorations
    ['tl', 'tr', 'bl', 'br'].forEach(pos => {
      const corner = document.createElement('div');
      corner.className = `pfl-corner pfl-corner-${pos}`;
      root.appendChild(corner);
    });

    const container = document.createElement('div');
    container.className = 'pfl-container';

    // Logo with animated rings
    const logo = document.createElement('div');
    logo.className = 'pfl-logo';
    logo.innerHTML = `
      <div class="pfl-logo-ring"></div>
      <div class="pfl-logo-ring"></div>
      <div class="pfl-logo-ring"></div>
      <div class="pfl-logo-core"></div>
    `;

    // Name with individual characters
    const nameEl = document.createElement('div');
    nameEl.className = 'pfl-name';
    const chars = NAME.split('');
    chars.forEach((char, i) => {
      if (char === ' ') {
        const space = document.createElement('span');
        space.className = 'pfl-char pfl-char-space';
        nameEl.appendChild(space);
      } else {
        const span = document.createElement('span');
        span.className = 'pfl-char';
        span.textContent = char;
        nameEl.appendChild(span);
      }
    });

    // Tagline
    const tagline = document.createElement('div');
    tagline.className = 'pfl-tagline';
    const taglineText = 'Backend Developer & AI Engineer';
    taglineText.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? ' ' : char;
      span.style.animationDelay = `${0.8 + i * 0.03}s`;
      tagline.appendChild(span);
    });

    // Progress bar
    const progress = document.createElement('div');
    progress.className = 'pfl-progress';
    progress.innerHTML = '<div class="pfl-progress-bar"></div>';

    container.appendChild(logo);
    container.appendChild(nameEl);
    container.appendChild(tagline);
    container.appendChild(progress);
    root.appendChild(container);

    return { root, nameEl, tagline };
  }

  function runLoader() {
    injectStyles();
    const { root, nameEl, tagline } = buildLoader();
    document.body.prepend(root);

    const chars = nameEl.querySelectorAll('.pfl-char');
    const t = (fn, ms) => setTimeout(fn, ms);

    // Animate name characters with stagger
    chars.forEach((char, i) => {
      t(() => char.classList.add('pfl-visible'), 300 + i * 60);
    });

    // Dissolve and remove
    t(() => root.classList.add('pfl-dissolving'), 1800);
    t(() => root.remove(), 2400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runLoader);
  } else {
    runLoader();
  }
})();

export { };