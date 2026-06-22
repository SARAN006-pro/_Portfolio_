export function renderHero() {
  return `
    <section id="hero" class="hero">
      <div class="hero-bg">
        <div class="hero-grid"></div>
        <div class="hero-gradient"></div>
      </div>
      <div class="container">
        <div class="hero-wrapper">
          <div class="hero-content">
            <div class="hero-badge">
              <span class="badge-dot"></span>
              <span>Pre-Final Year • B.Tech IT</span>
            </div>

            <h1 class="hero-title">
              <span class="title-line">Building intelligent</span>
              <span class="title-line title-highlight">backend systems</span>
            </h1>

            <p class="hero-description">
              I'm SARAN V A, a backend-focused developer specializing in  Spring Boot, Python, FastAPI, and GenAI integrations. I build production-ready APIs and intelligent applications - from RAG-powered document assistants to agentic AI backends.
            </p>

            <div class="hero-cta">
              <a href="#projects" class="btn btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                View Projects
              </a>
              <a href="https://github.com/SARAN006-pro" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="#contact" class="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Contact
              </a>
            </div>

            <div class="hero-tech">
              <span class="tech-label">Tech I work with</span>
              <div class="tech-stack">
              <span class="tech-item">Java</span>
              <span class="tech-divider">•</span>
              <span class="tech-item">Spring Boot</span>
              <span class="tech-divider">•</span>
                <span class="tech-item">Python</span>
                <span class="tech-divider">•</span>
                <span class="tech-item">FastAPI</span>
                <span class="tech-divider">•</span>
                <span class="tech-item">RAG/LLM</span>
                <span class="tech-divider">•</span>
                <span class="tech-item">React</span>
              </div>
            </div>
          </div>

          <div class="hero-visual">
            <div class="profile-card">
              <div class="profile-image-wrapper">
                <img src="/images/profile-photo.png" alt="SARAN V A - Backend Developer" class="profile-image"/>
              </div>
              <div class="profile-status">
                <span class="status-dot"></span>
                <span>Open to Internship Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHeroTyping() {
  // No longer needed - removed the typing animation
}