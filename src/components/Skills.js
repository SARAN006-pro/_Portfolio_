const skillCards = [
  {
    icon: '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
    title: 'Programming Languages',
    items: ['Python', 'Java', 'JavaScript']
  },
  {
    icon: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
    title: 'Frontend',
    items: ['React.js', 'HTML5', 'CSS3']
  },
  {
    icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'RESTful APIs']
  },
  {
    icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
    title: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'MySQL']
  },
  {
    icon: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',
    title: 'ORM & Tools',
    items: ['n8n', 'Prisma', 'JDBC']
  },
  {
    icon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
    title: 'Authentication & Security',
    items: ['JWT', 'OTP Verification', 'Password Hashing (bcrypt)']
  },
  {
    icon: '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
    title: 'Data & Analytics',
    items: ['Power BI', 'Excel']
  },
  {
    icon: '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
    title: 'Version Control',
    items: ['Git', 'GitHub']
  }
];

const bulletSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="skill-bullet"><circle cx="12" cy="12" r="3"/></svg>`;

export function renderSkills() {
  const cards = skillCards.map(({ icon, title, items }) => `
    <div class="skill-card">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="skill-card__icon">${icon}</svg>
      <div class="skill-card__content">
        <h3 class="skill-card__title">${title}</h3>
        <ul class="skill-card__list">
          ${items.map(item => `<li>${bulletSvg}${item}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  return `
    <section id="skills" class="skills">
      <div class="container">
        <h2 class="section-title">Technical Skills & Expertise</h2>
        <div class="skills-grid">${cards}</div>
      </div>
    </section>
  `;
}
