const skillCategories = [
  {
    name: 'Languages',
    skills: ['Java', 'Python', 'SQL']
  },
  {
    name: 'Problem Solving',
    skills: ['Data Structures & Algorithms', 'Optimization Techniques', 'Problem Decomposition']
  },
  {
    name: 'Backend',
    skills: ['Spring Boot', 'FastAPI', 'REST APIs', 'Spring Data JPA', 'Bean Validation']
  },
  {
    name: 'Frontend',
    skills: ['React.js', 'HTML/CSS', 'Responsive Design']
  },
  {
    name: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Spring Data JPA', 'SQL Query Optimization']
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Git', 'GitHub', 'Postman']
  }
];

const categoryIcons = {
  'Languages': '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
  'Backend': '<circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m6-11h-6m-6 0h6"/><circle cx="12" cy="12" r="10"/>',
  'Frontend': '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
  'Databases': '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
  'Cloud & DevOps': '<path d="M12 2v3m0 14v3m9-9h-3M6 12H3m15.364 6.364l-2.121-2.121M8.757 8.757L6.636 6.636m12.728 0l-2.121 2.121M8.757 15.243l-2.121 2.121"/><circle cx="12" cy="12" r="4"/>',
  'Problem Solving': '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/><circle cx="12" cy="12" r="10"/></polyline>'
};

export function renderSkills() {
  const categoryCards = skillCategories.map(cat => {
    const icon = categoryIcons[cat.name] || categoryIcons['Languages'];
    const skillItems = cat.skills.map(skill =>
      `<li class="skill-item">${skill}</li>`
    ).join('');

    return `
      <div class="skill-category">
        <div class="skill-category-header">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="skill-category-icon">
            ${icon}
          </svg>
          <h3 class="skill-category-name">${cat.name}</h3>
        </div>
        <ul class="skill-list">
          ${skillItems}
        </ul>
      </div>
    `;
  }).join('');

  return `
    <section id="skills" class="skills">
      <div class="container">
        <header class="section-header">
          <h2 class="section-heading">Skills & Expertise</h2>
          <p class="section-subtitle">Technologies I use to build production-grade solutions</p>
        </header>

        <div class="skills-grid">
          ${categoryCards}
        </div>
      </div>
    </section>
  `;
}