const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`;
const externalIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;

const projects = [
  {
    title: 'Jumpstart - Learning Progress Tracker',
    subtitle: 'Spring Boot REST API with JPA',
    problem: 'Developers learning new technologies had no structured way to track their progress across topics, roadmaps, and milestones.',
    solution: 'Built a Spring Boot REST API using layered architecture (Controller > Service > Repository). Modelled a MySQL schema for users and topics using Spring Data JPA. Applied DTO-based request/response models with Bean Validation constraints.',
    impact: 'Production-ready Java backend demonstrating clean architecture, JPA relationships, and API documentation best practices - a direct showcase of Spring Boot proficiency.',
    tech: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'Bean Validation'],
    github: 'https://github.com/SARAN006-pro',
    demo: 'https://jumpstart.assist-ai.app',
    image: '/images/jumpstart.png',
    color: 'blue'
  },
   {
    title: 'Vaagai - Smart Farming Platform',
    subtitle: 'Data-Driven Agricultural Guidance System',
    problem: 'Farmers lacked access to real-time, data-driven crop guidance tailored to their soil, climate, and regional conditions.',
    solution: 'Built a FastAPI REST API that accepts farming inputs and returns data-driven crop recommendations. Designed MongoDB collections for farmer profiles and crop history, optimized for fast per-user retrieval. Implemented strict request validation to ensure only clean data reaches the prediction endpoint.',
    impact: 'Enables farmers to make data-driven decisions on crop selection. Full-stack platform with FastAPI backend, prediction pipeline, and React frontend, deployed with Docker.',
    tech: ['Python', 'FastAPI', 'MongoDB', 'React', 'Docker'],
    github: 'https://github.com/SARAN006-pro',
    demo: 'https://vaagai.assist-ai.app',
    image: '/images/vaagai.png',
    color: 'emerald'
  },
  {
    title: 'Agentic AI Assistant',
    subtitle: 'Multi-Step Task Execution Backend',
    problem: 'Standard chatbot backends execute single-turn responses. Complex tasks require sequential planning, tool use, and dynamic execution across multiple steps.',
    solution: 'Built a FastAPI backend that decomposes a user task into sequential steps and executes tool handlers for each. Created endpoints for task submission and result retrieval with consistent JSON responses. Connected external APIs so the backend can call outside services as part of task execution.',
    impact: 'Demonstrates modular backend architecture: task decomposition, tool routing, and multi-step execution - a pattern used in production systems.',
    tech: ['Python', 'FastAPI', 'REST APIs', 'External API Integration'],
    github: 'https://github.com/SARAN006-pro/Assist_Me.git',
    demo: '#',
    image: '/images/project3.jpg',
    color: 'orange'
  }
];

function renderProjectCard(project) {
  const techTags = project.tech.map(t => `<span class="project-tag">${t}</span>`).join('');
  const imageBg = project.image
    ? `<div class="project-image"><img src="${project.image}" alt="${project.title}" loading="lazy"/></div>`
    : '';

  return `
    <article class="project-card">
      ${imageBg}
      <div class="project-header">
        <div class="project-indicator project-indicator--${project.color}"></div>
        <div class="project-title-group">
          <h3 class="project-title">${project.title}</h3>
          <span class="project-subtitle">${project.subtitle}</span>
        </div>
      </div>

      <div class="project-content">
        <div class="project-section">
          <h4 class="project-section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Problem
          </h4>
          <p class="project-text">${project.problem}</p>
        </div>

        <div class="project-section">
          <h4 class="project-section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Solution
          </h4>
          <p class="project-text">${project.solution}</p>
        </div>

        <div class="project-section">
          <h4 class="project-section-title">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            Impact
          </h4>
          <p class="project-text">${project.impact}</p>
        </div>
      </div>

      <div class="project-footer">
        <div class="project-tags">${techTags}</div>
        <div class="project-links">
          <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">
            ${githubIcon}
            <span>Code</span>
          </a>
          <a href="${project.demo}" target="_blank" rel="noopener noreferrer" class="project-link project-link--primary">
            ${externalIcon}
            <span>Demo</span>
          </a>
        </div>
      </div>
    </article>
  `;
}

export function renderProjects() {
  return `
    <section id="projects" class="projects">
      <div class="container">
        <header class="section-header">
          <h2 class="section-heading">Projects</h2>
          <p class="section-subtitle">Production-ready applications solving real-world problems</p>
        </header>

        <div class="projects-grid">
          ${projects.map(renderProjectCard).join('')}
        </div>

        <footer class="projects-footer">
          <a href="https://github.com/SARAN006-pro" target="_blank" rel="noopener noreferrer" class="view-all-link">
            View all projects on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
        </footer>
      </div>
    </section>
  `;
}