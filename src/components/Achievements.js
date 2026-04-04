const achievements = [
  {
    icon: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
    image: '/certificates/education-cert.png',
    imageAlt: 'Education Certificate',
    title: 'B. Tech Information Technology',
    description: 'RATHINAM TECHNICAL CAMPUS, COIMBATORE (2023-2027) - CGPA: 8.24<br/><br/>Higher Secondary: SRI VIDHYA MANDIR MATRIC HR.SEC SCHOOL, UTHANGARAI - 12th (2022-2023) 83% Percentage',
    link: '#',
    linkText: 'View Certificate'
  },
  {
    icon: '<path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>',
    image: '/certificates/aws-cert.png',
    imageAlt: 'AWS Certifications',
    title: 'AWS Certifications',
    description: 'AWS-NLP (Natural Language Processing) and AWS-ML (Machine Learning) certifications demonstrating proficiency in cloud-based AI/ML services and solutions.',
    link: '#',
    linkText: 'View Certificates'
  },
  {
    icon: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
    image: '/certificates/internship-cert.png',
    imageAlt: 'Internship Certificate',
    title: 'Data Analytics Internship',
    description: 'Data Analytics Intern (2025 - Present) at Novi Tech (Online Training Program). Python & SQL for data analysis through projects, data cleaning & visualization on real datasets, basics of Machine Learning & AI concepts.',
    link: '#',
    linkText: 'View Certificate'
  }
];

export function renderAchievements() {
  const cards = achievements.map(a => `
    <div class="achievement-card">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="achievement-card__icon">${a.icon}</svg>
      <img src="${a.image}" alt="${a.imageAlt}" class="achievement-card__image"/>
      <div class="achievement-card__content">
        <h3 class="achievement-card__title">${a.title}</h3>
        <p class="achievement-card__description">${a.description}</p>
        <a href="${a.link}" target="_blank" rel="noopener" class="card__button">${a.linkText}</a>
      </div>
    </div>
  `).join('');

  return `
    <section id="achievements" class="achievements">
      <div class="container">
        <h2 class="section-title">Education & Certifications</h2>
        <div class="achievements-grid">${cards}</div>
      </div>
    </section>
  `;
}
