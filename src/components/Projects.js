const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
const externalIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

const projects = [
  {
    color: 'purple',
    icon: '<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>',
    stats: [{ val: '10K+', color: 'blue', label: 'Users' }, { val: '4.8/5', color: 'green', label: 'Rating' }, { val: '99.9%', color: 'cyan', label: 'Uptime' }],
    name: 'Amzify E-Commerce Platform',
    desc: 'A comprehensive full-stack e-commerce solution with real-time inventory management, secure payment gateway integration, and advanced product filtering. Features include user authentication, order tracking, admin dashboard, and responsive design for seamless shopping experience across all devices.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe API'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    color: 'green',
    icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
    stats: [{ val: '5K+', color: 'blue', label: 'Users' }, { val: '4.9/5', color: 'green', label: 'Rating' }, { val: '99.8%', color: 'cyan', label: 'Uptime' }],
    name: 'Fitness Tracker',
    desc: 'An intelligent fitness tracking application that helps users monitor their workouts, nutrition, and progress. Includes personalized workout plans, calorie tracking, progress visualization with interactive charts, social features, and integration with wearable devices for comprehensive health monitoring.',
    tags: ['React', 'TypeScript', 'PostgreSQL', 'Node.js', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    color: 'blue',
    icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    stats: [{ val: '15K+', color: 'blue', label: 'Users' }, { val: '4.7/5', color: 'green', label: 'Rating' }, { val: '99.9%', color: 'cyan', label: 'Uptime' }],
    name: 'Student Attendance System',
    desc: 'A sophisticated attendance management system designed for educational institutions. Features QR code-based check-ins, automated reporting, real-time notifications to parents, analytics dashboard for administrators, and seamless integration with existing student information systems.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React', 'RESTful API'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

function renderProject(p) {
  const stats = p.stats.map(s => `
    <div class="pcard__stat">
      <span class="pcard__stat-value pcard__stat-value--${s.color}">${s.val}</span>
      <span class="pcard__stat-label">${s.label}</span>
    </div>
  `).join('');

  const tags = p.tags.map(t => `<span class="pcard__tag">${t}</span>`).join('');

  return `
    <div class="pcard">
      <div class="pcard__inner">
        <div class="pcard__visual">
          <div class="pcard__thumb pcard__thumb--${p.color}">
            <div class="pcard__thumb-overlay"></div>
            <svg xmlns="http://www.w3.org/2000/svg" class="pcard__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">${p.icon}</svg>
            <div class="pcard__thumb-glow pcard__thumb-glow--tr"></div>
            <div class="pcard__thumb-glow pcard__thumb-glow--bl"></div>
          </div>
          <div class="pcard__stats">${stats}</div>
        </div>
        <div class="pcard__details">
          <div>
            <h3 class="pcard__name">${p.name}</h3>
            <p class="pcard__desc">${p.desc}</p>
            <div class="pcard__tech">${tags}</div>
          </div>
          <div class="pcard__links">
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="pcard__btn pcard__btn--ghost">${githubIcon} View Code</a>
            <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="pcard__btn pcard__btn--primary">${externalIcon} Live Demo</a>
          </div>
        </div>
      </div>
      <div class="pcard__glow"></div>
    </div>
  `;
}

export function renderProjects() {
  return `
    <section id="projects" class="projects-new">
      <div class="container">
        <div class="projects-new__header">
          <h2 class="projects-new__title">Featured Projects</h2>
          <div class="projects-new__divider"></div>
          <p class="projects-new__subtitle">Showcasing my best work in full-stack development, from concept to deployment</p>
        </div>
        <div class="projects-new__grid">
          ${projects.map(renderProject).join('')}
        </div>
        <div class="projects-new__footer">
          <a href="https://github.com/SARAN006-pro" target="_blank" rel="noopener noreferrer" class="projects-new__view-all">
            View All Projects ${githubIcon}
          </a>
        </div>
      </div>
    </section>
  `;
}
