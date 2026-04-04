export function renderAbout() {
  return `
    <section id="about" class="about">
      <div class="container">
        <div class="about-wrapper">
          <div class="about-content">
            <div class="about-hero-title">
              <h2 class="about-main-title">
                <span class="title-line-1">Currently building</span>
                <span class="title-line-2">Real-World Scalable<br/>Web applications</span>
              </h2>
            </div>
            <div class="flip-cards-grid">
              ${flipCard('React.js', '<circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m6-11h-6m-6 0h6"/><circle cx="12" cy="12" r="10"/>', 'Built dashboards, auth systems & dynamic UIs')}
              ${flipCard('Node.js', '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>', 'REST APIs & scalable backend architecture')}
              ${flipCard('Express.js', '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', 'Fast, minimalist web framework for Node')}
              ${flipCard('MongoDB', '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>', 'Optimized schemas & database design')}
              ${flipCard('API Architecture', '<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>', 'RESTful design & endpoint optimization')}
              ${flipCard('Authentication', '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>', 'JWT, OAuth & secure session management')}
              ${flipCard('Database Design', '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>', 'Schema modeling & query optimization')}
              ${flipCard('Cloud Basics', '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>', 'AWS services & cloud deployment')}
              ${flipCard('UI Engineering', '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>', 'Clean responsive layouts & user experience')}
              ${flipCard('Problem Solving', '<path d="M12 2v3m0 14v3m9-9h-3M6 12H3m15.364 6.364l-2.121-2.121M8.757 8.757L6.636 6.636m12.728 0l-2.121 2.121M8.757 15.243l-2.121 2.121"/><circle cx="12" cy="12" r="4"/>', 'Analytical thinking & efficient solutions')}
              <div class="flip-card stat-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front stat-card-front">
                    <h3 class="stat-number">8.24</h3>
                    <p class="stat-label">Current CGPA</p>
                  </div>
                  <div class="flip-card-back stat-card-back"><p>Academic Excellence</p></div>
                </div>
              </div>
              <div class="flip-card stat-card">
                <div class="flip-card-inner">
                  <div class="flip-card-front stat-card-front">
                    <h3 class="stat-number">2+</h3>
                    <p class="stat-label">AWS Certifications</p>
                  </div>
                  <div class="flip-card-back stat-card-back"><p>Cloud Expertise</p></div>
                </div>
              </div>
            </div>
          </div>
          <div class="about-visual">
            <div class="tech-stack-visual">
              <svg class="tech-illustration" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
                <g class="central-api-group">
                  <circle cx="250" cy="250" r="35" class="tech-node central-node"/>
                  <text x="250" y="257" class="node-label-large" text-anchor="middle">API</text>
                </g>
                <circle cx="150" cy="150" r="30" class="tech-node frontend-node"/>
                <text x="150" y="156" class="node-label" text-anchor="middle">React</text>
                <line x1="172" y1="168" x2="225" y2="225" class="tech-connection"/>
                <circle cx="350" cy="150" r="30" class="tech-node backend-node"/>
                <text x="350" y="156" class="node-label" text-anchor="middle">Node</text>
                <line x1="328" y1="168" x2="275" y2="225" class="tech-connection"/>
                <circle cx="250" cy="380" r="30" class="tech-node database-node"/>
                <text x="250" y="386" class="node-label" text-anchor="middle">DB</text>
                <line x1="250" y1="285" x2="250" y2="350" class="tech-connection"/>
                <circle cx="100" cy="250" r="25" class="tech-node auth-node"/>
                <text x="100" y="256" class="node-label-small" text-anchor="middle">Auth</text>
                <line x1="125" y1="250" x2="215" y2="250" class="tech-connection"/>
                <circle cx="400" cy="250" r="25" class="tech-node cache-node"/>
                <text x="400" y="256" class="node-label-small" text-anchor="middle">Cache</text>
                <line x1="375" y1="250" x2="285" y2="250" class="tech-connection"/>
                <circle cx="250" cy="80" r="28" class="tech-node cloud-node"/>
                <text x="250" y="86" class="node-label-small" text-anchor="middle">AWS</text>
                <line x1="250" y1="108" x2="250" y2="215" class="tech-connection"/>
                <circle cx="150" cy="350" r="22" class="tech-node middleware-node"/>
                <text x="150" y="355" class="node-label-tiny" text-anchor="middle">Express</text>
                <line x1="168" y1="335" x2="235" y2="270" class="tech-connection"/>
                <line x1="172" y1="360" x2="228" y2="370" class="tech-connection"/>
                <circle cx="250" cy="150" r="18" class="tech-node balancer-node"/>
                <text x="250" y="154" class="node-label-tiny" text-anchor="middle">LB</text>
                <line x1="250" y1="168" x2="250" y2="215" class="tech-connection"/>
                <circle cx="350" cy="350" r="22" class="tech-node monitor-node"/>
                <text x="350" y="355" class="node-label-tiny" text-anchor="middle">Monitor</text>
                <line x1="332" y1="335" x2="265" y2="270" class="tech-connection"/>
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" class="arrow-marker"/>
                  </marker>
                </defs>
                <circle r="5" class="data-packet packet-1"><animateMotion dur="4s" repeatCount="indefinite" path="M150,150 L250,250"/></circle>
                <circle r="5" class="data-packet packet-2"><animateMotion dur="4s" repeatCount="indefinite" path="M350,150 L250,250"/></circle>
                <circle r="5" class="data-packet packet-3"><animateMotion dur="4s" repeatCount="indefinite" path="M250,250 L250,380"/></circle>
                <circle r="4" class="data-packet packet-4"><animateMotion dur="3.5s" repeatCount="indefinite" path="M100,250 L250,250"/></circle>
                <circle r="4" class="data-packet packet-5"><animateMotion dur="3.5s" repeatCount="indefinite" path="M400,250 L250,250"/></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function flipCard(title, svgPaths, backText) {
  return `
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <svg class="flip-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${svgPaths}</svg>
          <h3>${title}</h3>
        </div>
        <div class="flip-card-back"><p>${backText}</p></div>
      </div>
    </div>
  `;
}
