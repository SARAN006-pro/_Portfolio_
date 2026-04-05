/**
 * PortfolioLoader — Vanilla JS port of the React "Crystallize → Grid → Dissolve" loader
 */

(function () {
  const NAME       = 'Saran V A';
  const ROLE       = 'Full Stack · Cloud · AI/NLP';
  const GRID_COLS  = 18;
  const GRID_ROWS  = 10;
  const NODE_COUNT = 5;

  /* ─── Inject CSS ─────────────────────────────────────────────── */
  function injectStyles() {
    if (document.getElementById('pfl-styles')) return;
    const style = document.createElement('style');
    style.id = 'pfl-styles';
    style.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Space+Mono&display=swap');

.pfl-root {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #07070E;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'Syne', sans-serif;
}

.pfl-root.pfl-dissolving {
  animation: pfl-dissolve-out 0.45s cubic-bezier(0.4, 0, 1, 1) forwards;
}

@keyframes pfl-dissolve-out {
  0%   { opacity: 1; transform: scale(1);     filter: blur(0px); }
  60%  { opacity: 0.6; transform: scale(1.015); filter: blur(1px); }
  100% { opacity: 0;   transform: scale(1.04);  filter: blur(6px); }
}

.pfl-grid {
  position: absolute;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(${GRID_COLS}, 1fr);
  grid-template-rows: repeat(${GRID_ROWS}, 1fr);
  pointer-events: none;
}

.pfl-cell {
  border: 0.5px solid transparent;
  transition: border-color 0.35s ease, background 0.35s ease;
  opacity: 0;
}

.pfl-cell.pfl-cell-lit {
  opacity: 1;
  border-color: rgba(255, 255, 255, 0.045);
  background: rgba(255, 255, 255, 0.008);
}

.pfl-center {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.pfl-name {
  display: flex;
  align-items: baseline;
  gap: 0;
  line-height: 1;
  margin-bottom: 10px;
}

.pfl-letter {
  display: inline-block;
  font-size: clamp(42px, 7vw, 72px);
  font-weight: 800;
  color: #ECEAE3;
  letter-spacing: -0.02em;
  opacity: 0;
  transform: translateY(10px) scale(0.92);
}

.pfl-letter-space {
  display: inline-block;
  width: 0.28em;
}

.pfl-letter.pfl-letter-in {
  animation: pfl-crystallize 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
}

@keyframes pfl-crystallize {
  0%   { opacity: 0; transform: translateY(12px) scale(0.88); filter: blur(3px); }
  55%  { opacity: 1; transform: translateY(-4px) scale(1.04); filter: blur(0px); }
  75%  { transform: translateY(2px) scale(0.98); }
  90%  { transform: translateY(-1px) scale(1.01); }
  100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0px); }
}

.pfl-letter.pfl-letter-out {
  animation: pfl-letter-dissolve 0.4s cubic-bezier(0.4, 0, 1, 1) forwards;
}

@keyframes pfl-letter-dissolve {
  0%   { opacity: 1; transform: scale(1);    filter: blur(0px); }
  100% { opacity: 0; transform: scale(1.12); filter: blur(5px); }
}

.pfl-role {
  font-family: 'Space Mono', monospace;
  font-size: clamp(9px, 1.1vw, 11px);
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(236, 234, 227, 0.3);
  opacity: 0;
  transform: translateY(4px);
  transition: opacity 0.5s ease, transform 0.5s ease;
  margin-bottom: 36px;
}

.pfl-role.pfl-role-in {
  opacity: 1;
  transform: translateY(0);
}

.pfl-role.pfl-role-out {
  opacity: 0;
  transform: translateY(-4px);
  transition: opacity 0.25s ease, transform 0.25s ease;
}

/* ── Quantum Node Array ── */
.pfl-nodes {
  display: flex;
  align-items: center;
  gap: 14px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.pfl-nodes.pfl-nodes-in {
  opacity: 1;
}

.pfl-node-wrap {
  position: relative;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pfl-node-wrap::after {
  content: '';
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 14px;
  height: 1px;
  background: rgba(255,255,255,0.08);
  transition: background 0.25s ease;
}

.pfl-node-wrap:last-child::after {
  display: none;
}

.pfl-node-wrap.pfl-node-charged::after {
  background: rgba(180, 255, 120, 0.35);
}

.pfl-node-halo {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  border: 1px solid transparent;
  transition: border-color 0.2s ease, transform 0.3s ease;
}

.pfl-node-wrap.pfl-node-charging .pfl-node-halo {
  border-color: rgba(180, 255, 120, 0.25);
  transform: scale(1.15);
  animation: pfl-halo-pulse 0.6s ease-in-out infinite;
}

.pfl-node-wrap.pfl-node-charged .pfl-node-halo {
  border-color: rgba(180, 255, 120, 0.4);
  animation: none;
  transform: scale(1.1);
}

.pfl-node-wrap.pfl-node-implode .pfl-node-halo {
  border-color: transparent;
  transform: scale(0);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.6, 1);
}

@keyframes pfl-halo-pulse {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

.pfl-node-core {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  transition: background 0.2s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease;
  position: relative;
  z-index: 1;
}

.pfl-node-wrap.pfl-node-charging .pfl-node-core {
  background: rgba(180, 255, 120, 0.7);
  transform: scale(1.4);
  box-shadow: 0 0 8px rgba(180, 255, 120, 0.4);
}

.pfl-node-wrap.pfl-node-charged .pfl-node-core {
  background: rgba(180, 255, 120, 1);
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(180, 255, 120, 0.5);
}

.pfl-node-wrap.pfl-node-implode .pfl-node-core {
  background: rgba(255, 255, 255, 0.8);
  transform: scale(0);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.6, 1);
}

.pfl-scanline {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(180, 255, 120, 0);
  transition: background 0.3s ease;
}

.pfl-root.pfl-charged .pfl-scanline {
  background: rgba(180, 255, 120, 0.15);
}

.pfl-corner {
  position: absolute;
  width: 16px;
  height: 16px;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.pfl-corner.pfl-corner-tl { top: 24px;    left: 24px;  border-top: 1px solid rgba(255,255,255,0.1); border-left: 1px solid rgba(255,255,255,0.1); }
.pfl-corner.pfl-corner-tr { top: 24px;    right: 24px; border-top: 1px solid rgba(255,255,255,0.1); border-right: 1px solid rgba(255,255,255,0.1); }
.pfl-corner.pfl-corner-bl { bottom: 24px; left: 24px;  border-bottom: 1px solid rgba(255,255,255,0.1); border-left: 1px solid rgba(255,255,255,0.1); }
.pfl-corner.pfl-corner-br { bottom: 24px; right: 24px; border-bottom: 1px solid rgba(255,255,255,0.1); border-right: 1px solid rgba(255,255,255,0.1); }

.pfl-corner.pfl-corner-in { opacity: 1; }
    `;
    document.head.appendChild(style);
  }

  /* ─── Build DOM ──────────────────────────────────────────────── */
  function buildLoader() {
    const root = document.createElement('div');
    root.className = 'pfl-root';
    root.setAttribute('role', 'status');
    root.setAttribute('aria-label', 'Loading portfolio');

    // Scanline
    const scanline = document.createElement('div');
    scanline.className = 'pfl-scanline';
    root.appendChild(scanline);

    // Corners
    ['tl', 'tr', 'bl', 'br'].forEach(pos => {
      const c = document.createElement('div');
      c.className = `pfl-corner pfl-corner-${pos}`;
      root.appendChild(c);
    });

    // Grid
    const grid = document.createElement('div');
    grid.className = 'pfl-grid';
    grid.setAttribute('aria-hidden', 'true');
    const totalCells = GRID_COLS * GRID_ROWS;
    const cellEls = [];
    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.className = 'pfl-cell';
      grid.appendChild(cell);
      cellEls.push(cell);
    }
    root.appendChild(grid);

    // Center
    const center = document.createElement('div');
    center.className = 'pfl-center';

    // Name
    const nameEl = document.createElement('div');
    nameEl.className = 'pfl-name';
    nameEl.setAttribute('aria-label', NAME);
    const letterEls = [];
    NAME.split('').forEach((ch, i) => {
      if (ch === ' ') {
        const sp = document.createElement('span');
        sp.className = 'pfl-letter-space';
        sp.setAttribute('aria-hidden', 'true');
        nameEl.appendChild(sp);
        letterEls.push(null);
        return;
      }
      const span = document.createElement('span');
      span.className = 'pfl-letter';
      span.setAttribute('aria-hidden', 'true');
      span.textContent = ch;
      nameEl.appendChild(span);
      letterEls.push(span);
    });
    center.appendChild(nameEl);

    // Role
    const roleEl = document.createElement('div');
    roleEl.className = 'pfl-role';
    roleEl.setAttribute('aria-hidden', 'true');
    roleEl.textContent = ROLE;
    center.appendChild(roleEl);

    // Nodes
    const nodesEl = document.createElement('div');
    nodesEl.className = 'pfl-nodes';
    nodesEl.setAttribute('aria-hidden', 'true');
    nodesEl.setAttribute('role', 'presentation');
    const nodeEls = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const wrap = document.createElement('div');
      wrap.className = 'pfl-node-wrap';
      const halo = document.createElement('div');
      halo.className = 'pfl-node-halo';
      const core = document.createElement('div');
      core.className = 'pfl-node-core';
      wrap.appendChild(halo);
      wrap.appendChild(core);
      nodesEl.appendChild(wrap);
      nodeEls.push(wrap);
    }
    center.appendChild(nodesEl);
    root.appendChild(center);

    return { root, cellEls, letterEls, roleEl, nodesEl, nodeEls };
  }

  /* ─── Run Timeline ───────────────────────────────────────────── */
  function runLoader() {
    injectStyles();
    const { root, cellEls, letterEls, roleEl, nodesEl, nodeEls } = buildLoader();
    document.body.prepend(root);

    const t = (fn, ms) => setTimeout(fn, ms);

    // 1. Corners
    t(() => {
      root.querySelectorAll('.pfl-corner').forEach(c => c.classList.add('pfl-corner-in'));
    }, 80);

    // 2. Grid cells — staggered batches in random order
    const totalCells = GRID_COLS * GRID_ROWS;
    const batches = 6;
    const batchSize = Math.ceil(totalCells / batches);
    const allIndices = Array.from({ length: totalCells }, (_, i) => i)
      .sort(() => Math.random() - 0.5);

    for (let b = 0; b < batches; b++) {
      const batch = allIndices.slice(b * batchSize, (b + 1) * batchSize);
      t(() => batch.forEach(idx => cellEls[idx].classList.add('pfl-cell-lit')), 100 + b * 100);
    }

    // 3. Letters crystallize in
    const chars = NAME.split('');
    chars.forEach((ch, i) => {
      if (ch === ' ') return;
      t(() => {
        if (letterEls[i]) letterEls[i].classList.add('pfl-letter-in');
      }, 150 + i * 85);
    });

    // 4. Role fades in
    t(() => roleEl.classList.add('pfl-role-in'), 150 + chars.length * 85 + 80);

    // 5. Nodes appear
    t(() => nodesEl.classList.add('pfl-nodes-in'), 1100);

    // 6. Sequential node charging
    for (let n = 0; n < NODE_COUNT; n++) {
      // charging
      t(() => {
        nodeEls[n].classList.remove('pfl-node-charged', 'pfl-node-implode');
        nodeEls[n].classList.add('pfl-node-charging');
      }, 1180 + n * 140);
      // charged
      t(() => {
        nodeEls[n].classList.remove('pfl-node-charging');
        nodeEls[n].classList.add('pfl-node-charged');
      }, 1280 + n * 140);
    }

    // 7. All charged → scanline accent
    t(() => root.classList.add('pfl-charged'), 1180 + NODE_COUNT * 140 + 60);

    // 8. Implode all nodes simultaneously
    t(() => {
      nodeEls.forEach(n => {
        n.classList.remove('pfl-node-charging', 'pfl-node-charged');
        n.classList.add('pfl-node-implode');
      });
    }, 1900);

    // 9. Letters & role dissolve out
    t(() => {
      roleEl.classList.add('pfl-role-out');
      letterEls.forEach((el, i) => {
        if (!el) return;
        t(() => el.classList.add('pfl-letter-out'), i * 30);
      });
    }, 2020);

    // 10. Root dissolve
    t(() => root.classList.add('pfl-dissolving'), 2150);

    // 11. Remove from DOM
    t(() => root.remove(), 2600);
  }

  /* ─── Boot ───────────────────────────────────────────────────── */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runLoader);
  } else {
    runLoader();
  }
})();

export { }; // marks this file as an ES module so Vite bundles it correctly
