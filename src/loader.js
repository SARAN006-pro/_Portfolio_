/**
 * PortfolioLoader — Cinematic title sequence
 * Name zooms in (slow), tagline types beneath.
 * After a pause, name fades out — tagline lingers alone for a moment,
 * then dissolves into the portfolio.
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
        from { opacity: 1; transform: scale(1); filter: blur(0); }
        to { opacity: 0; transform: scale(1.03); filter: blur(8px); }
      }

      .pfl-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
        position: relative;
        z-index: 2;
      }

      /* ── Particles ── */
      #pfl-particles {
        position: absolute;
        inset: 0;
        z-index: 1;
        pointer-events: none;
      }

      /* ── Logo ── */
      .pfl-logo {
        position: relative;
        width: 64px;
        height: 64px;
        opacity: 0;
      }

      .pfl-logo.pfl-visible {
        animation: pfl-logo-in 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      @keyframes pfl-logo-in {
        0% { opacity: 0; transform: scale(0.3) rotate(-25deg); }
        100% { opacity: 0.5; transform: scale(1) rotate(0deg); }
      }

      .pfl-logo-ring {
        position: absolute;
        inset: 0;
        border: 1.5px solid rgba(59, 130, 246, 0.2);
        border-radius: 50%;
        animation: pfl-ring-spin 4s linear infinite;
      }

      .pfl-logo-ring:nth-child(2) {
        inset: 8px;
        animation-duration: 3s;
        animation-direction: reverse;
        border-color: rgba(59, 130, 246, 0.3);
      }

      .pfl-logo-ring:nth-child(3) {
        inset: 16px;
        animation-duration: 2.5s;
        border-color: rgba(59, 130, 246, 0.4);
      }

      @keyframes pfl-ring-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .pfl-logo-ring::after {
        content: '';
        position: absolute;
        top: -2px;
        left: 50%;
        width: 4px;
        height: 4px;
        background: #3b82f6;
        border-radius: 50%;
        transform: translateX(-50%);
      }

      .pfl-logo-core {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 12px;
        height: 12px;
        background: linear-gradient(135deg, #3b82f6, #60a5fa);
        border-radius: 50%;
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
        animation: pfl-core-pulse 2s ease-in-out infinite;
      }

      @keyframes pfl-core-pulse {
        0%, 100% { box-shadow: 0 0 15px rgba(59, 130, 246, 0.5); transform: translate(-50%, -50%) scale(1); }
        50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 50px rgba(59, 130, 246, 0.3); transform: translate(-50%, -50%) scale(1.15); }
      }

      /* ── Name — slow cinematic zoom-in ── */
      .pfl-name {
        font-family: 'Space Grotesk', 'Plus Jakarta Sans', sans-serif;
        font-size: clamp(44px, 9vw, 80px);
        font-weight: 800;
        letter-spacing: -0.03em;
        display: flex;
        gap: 0;
        filter: drop-shadow(0 0 40px rgba(59, 130, 246, 0.15));
      }

      .pfl-char {
        display: inline-block;
        opacity: 0;
      }

      .pfl-char-space {
        width: 0.2em;
      }

      .pfl-char.pfl-zoom-in {
        animation: pfl-zoom-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }

      @keyframes pfl-zoom-in {
        0% { opacity: 0; transform: scale(2.5); filter: blur(14px); }
        60% { opacity: 1; filter: blur(0); }
        80% { transform: scale(0.95); }
        100% { opacity: 1; transform: scale(1); filter: blur(0); }
      }

      .pfl-char.pfl-glow {
        animation: pfl-glow-flash 0.5s ease forwards;
      }

      @keyframes pfl-glow-flash {
        0% { filter: brightness(1.8) drop-shadow(0 0 25px rgba(96, 165, 250, 0.9)); }
        100% { filter: brightness(1) drop-shadow(0 0 0 transparent); }
      }

      /* Name fade-out — letters blur and shrink away */
      .pfl-char.pfl-fade-out {
        animation: pfl-fade-out 0.6s ease-in forwards;
      }

      @keyframes pfl-fade-out {
        0% { opacity: 1; transform: scale(1); filter: blur(0); }
        100% { opacity: 0; transform: scale(1.3); filter: blur(8px); }
      }

      /* ── Tagline ── */
      .pfl-tagline {
        font-family: 'Chivo', 'Plus Jakarta Sans', sans-serif;
        font-size: clamp(12px, 1.3vw, 15px);
        letter-spacing: 0.3em;
        text-transform: uppercase;
        color: #71717a;
        min-height: 1.4em;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .pfl-tagline-char {
        opacity: 0;
        display: inline-block;
      }

      .pfl-tagline-char.pfl-typed {
        animation: pfl-type-in 0.12s ease forwards;
      }

      @keyframes pfl-type-in {
        from { opacity: 0; transform: translateY(4px) scale(0.9); }
        to { opacity: 1; transform: translateY(0) scale(1); }
      }

      .pfl-tagline-char.pfl-space {
        width: 0.35em;
      }

      .pfl-tagline-cursor {
        display: inline-block;
        width: 2px;
        height: 1em;
        background: #3b82f6;
        margin-left: 3px;
        animation: pfl-cursor-blink 0.7s step-end infinite;
        vertical-align: text-bottom;
        opacity: 0;
      }

      .pfl-tagline-cursor.pfl-visible {
        opacity: 1;
      }

      @keyframes pfl-cursor-blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      /* ── Progress ── */
      .pfl-progress {
        width: 120px;
        height: 2px;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 2px;
        overflow: hidden;
        opacity: 0;
      }

      .pfl-progress.pfl-visible {
        animation: pfl-fade-in 0.3s ease forwards;
      }

      @keyframes pfl-fade-in {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      .pfl-progress-bar {
        height: 100%;
        width: 0;
        background: linear-gradient(90deg, #3b82f6, #60a5fa);
        border-radius: 2px;
        animation: pfl-progress 0.8s ease forwards;
      }

      @keyframes pfl-progress {
        from { width: 0; }
        to { width: 100%; }
      }
    `;
    document.head.appendChild(style);
  }

  function createParticles(root) {
    const canvas = document.createElement('canvas');
    canvas.id = 'pfl-particles';
    root.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let w, h, particles = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    function createParticle() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.3 + 0.05
      };
    }

    function init() {
      resize();
      particles = Array.from({ length: 40 }, createParticle);
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.04 * (1 - dist / 80)})`;
            ctx.stroke();
          }
        }
      }
      if (root.isConnected) requestAnimationFrame(draw);
    }

    init();
    window.addEventListener('resize', resize);
    draw();
  }

  function buildLoader() {
    const root = document.createElement('div');
    root.className = 'pfl-root';
    root.setAttribute('role', 'status');
    root.setAttribute('aria-label', 'Loading portfolio');

    const container = document.createElement('div');
    container.className = 'pfl-container';

    const logo = document.createElement('div');
    logo.className = 'pfl-logo';
    logo.id = 'pfl-logo';
    logo.innerHTML = `
      <div class="pfl-logo-ring"></div>
      <div class="pfl-logo-ring"></div>
      <div class="pfl-logo-ring"></div>
      <div class="pfl-logo-core"></div>
    `;

    const nameEl = document.createElement('div');
    nameEl.className = 'pfl-name';
    nameEl.id = 'pfl-name';
    NAME.split('').forEach((char) => {
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

    const tagline = document.createElement('div');
    tagline.className = 'pfl-tagline';
    tagline.id = 'pfl-tagline';
    const TAGLINE_TEXT = 'Full Stack Developer';
    TAGLINE_TEXT.split('').forEach((char) => {
      const span = document.createElement('span');
      span.className = 'pfl-tagline-char' + (char === ' ' ? ' pfl-space' : '');
      span.textContent = char === ' ' ? ' ' : char;
      tagline.appendChild(span);
    });
    const cursor = document.createElement('span');
    cursor.className = 'pfl-tagline-cursor';
    tagline.appendChild(cursor);

    const progress = document.createElement('div');
    progress.className = 'pfl-progress';
    progress.id = 'pfl-progress';
    progress.innerHTML = '<div class="pfl-progress-bar"></div>';

    container.appendChild(logo);
    container.appendChild(nameEl);
    container.appendChild(tagline);
    container.appendChild(progress);
    root.appendChild(container);

    return { root, nameEl, tagline, progress, logo };
  }

  function runLoader() {
    injectStyles();
    const { root, nameEl, tagline, progress, logo } = buildLoader();
    document.body.prepend(root);

    createParticles(root);

    const allChars = [...nameEl.querySelectorAll('.pfl-char')];
    const taglineChars = [...tagline.querySelectorAll('.pfl-tagline-char')];
    const cursor = tagline.querySelector('.pfl-tagline-cursor');
    const t = (fn, ms) => setTimeout(fn, ms);

    // ── Phase 1: Logo drifts in ──
    t(() => logo.classList.add('pfl-visible'), 200);

    // ── Phase 2: Name zoom-in (slow) + tagline types simultaneously ──
    const syncStart = 700;
    allChars.forEach((char, i) => {
      t(() => char.classList.add('pfl-zoom-in'), syncStart + i * 90);
      t(() => char.classList.add('pfl-glow'), syncStart + i * 90 + 600);
    });

    taglineChars.forEach((char, i) => {
      t(() => char.classList.add('pfl-typed'), syncStart + i * 35);
    });

    t(() => cursor.classList.add('pfl-visible'), syncStart);

    const nameFullyIn = syncStart + allChars.length * 90 + 700;

    // ── Phase 3: Name lingers for a moment (readable) ──
    // Then fade name OUT while tagline stays
    const nameFadeStart = nameFullyIn + 1200;
    allChars.forEach((char, i) => {
      t(() => {
        char.classList.remove('pfl-zoom-in', 'pfl-glow');
        char.classList.add('pfl-fade-out');
      }, nameFadeStart + i * 50);
    });

    const nameGone = nameFadeStart + allChars.length * 50 + 600;

    // ── Phase 4: Dissolve quickly after name is gone ──
    t(() => progress.classList.add('pfl-visible'), nameGone + 200);

    t(() => root.classList.add('pfl-dissolving'), nameGone + 600);
    t(() => root.remove(), nameGone + 1200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runLoader);
  } else {
    runLoader();
  }
})();

export { };