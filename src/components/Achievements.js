const achievements = [
  {
    icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    image: null,
    imageAlt: 'B.Tech Education',
    title: 'B.Tech Information Technology',
    description: 'Rathinam Technical Campus, Coimbatore (2023–2027)<br/>CGPA: 8.2<br/><br/>HSC: 83% – Sri Vidya Mandir Matric. Hr. Sec. School',
    link: '#',
    linkText: 'View Institution'
  },
  {
    icon: '<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>',
    image: '/certificates/cert2.jpg',
    imageAlt: 'AWS Certified AI Practitioner Certificate',
    title: 'AWS Certified AI Practitioner',
    description: 'Amazon Web Services (2026)<br/>Covers: Cloud computing fundamentals, AWS core services, AI/ML concepts on cloud, and practical cloud application deployment.',
    link: '#',
    linkText: 'View Certificate'
  },
  {
    icon: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    image: null,
    imageAlt: 'DSA using Java Certificate',
    title: 'DSA using Java',
    description: 'GUVI<br/>Data Structures and Algorithms with Java — arrays, linked lists, trees, graphs, sorting, and problem-solving techniques for technical interviews.',
    link: '#',
    linkText: 'View Certificate'
  },
  {
    icon: '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
    image: '/certificates/Advanced SQL.png',
    imageAlt: 'Advanced SQL Certificate',
    title: 'Advanced SQL',
    description: 'Kaggle<br/>Advanced query writing, window functions, CTEs, subqueries, query optimization, and data analysis techniques used in real-world datasets.',
    link: '#',
    linkText: 'View Certificate'
  },
  {
    icon: '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>',
    image: '/certificates/cert3.jpg',
    imageAlt: 'AI/ML Internship Certificate',
    title: 'AI/ML Internship',
    description: 'Novi Tech<br/>Hands-on internship covering software development, API integration, and real-world project development in an industry setting.',
    link: '#',
    linkText: 'View Certificate'
  }
];

export function renderAchievements() {
  const cards = achievements.map(a => {
    const noImageClass = a.image ? '' : ' achievement-card--no-image';
    const imageHtml = a.image ? `<img src="${a.image}" alt="${a.imageAlt}" class="achievement-card__image"/>` : '';
    return `
    <div class="achievement-card${noImageClass}">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="achievement-card__icon">${a.icon}</svg>
      ${imageHtml}
      <div class="achievement-card__content">
        <h3 class="achievement-card__title">${a.title}</h3>
        <p class="achievement-card__description">${a.description}</p>
        <a href="${a.link}" target="_blank" rel="noopener" class="card__button">${a.linkText}</a>
      </div>
    </div>
  `;
  }).join('');

  return `
    <section id="achievements" class="achievements">
      <div class="container">
        <h2 class="section-title">Education & Certifications</h2>
        <div class="achievements-grid">${cards}</div>
      </div>
    </section>
  `;
}