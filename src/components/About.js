export function renderAbout() {
  return `
    <section id="about" class="about">
      <div class="container">
        <header class="section-header">
          <h2 class="section-heading">About Me</h2>
          <p class="section-subtitle">Backend Developer & AI Engineer</p>
        </header>

        <div class="about-content">
          <div class="about-main">
            <div class="about-text">
              <h3 class="about-title">Backend Developer Focused on Scalable Solutions</h3>
              <p class="about-paragraph">
                I'm a pre-final year B.Tech Information Technology student at Rathinam Technical Campus, Coimbatore, passionate about building production-grade software that solves real problems. My expertise lies in Spring Boot, Python, FastAPI, and GenAI system design including RAG pipelines and LLM integrations.
              </p>
              <p class="about-paragraph">
                I've built projects across domains -  From a Spring Boot learning tracker with full JPA and Swagger documentation, to a smart farming platform with ML crop prediction. Each project is designed with clean architecture, real-world constraints, and production thinking.
              </p>
              <p class="about-paragraph">
                I hold an AWS Certified AI Practitioner certification (2026) and a Google AI Essentials certification. I'm actively seeking Backend SDE, ML Engineer, and Full Stack internships, where I can contribute to production systems alongside experienced engineers.
              </p>
            </div>

            <div class="about-details">
              <div class="detail-card">
                <span class="detail-value">8.2</span>
                <span class="detail-label">Current CGPA</span>
              </div>
              <div class="detail-card">
                <span class="detail-value">2027</span>
                <span class="detail-label">Graduation Year</span>
              </div>
              <div class="detail-card">
                <span class="detail-value">AWS</span>
                <span class="detail-label">AI Practitioner</span>
              </div>
            </div>
          </div>

          <aside class="about-sidebar">
            <div class="experience-timeline">
              <h4 class="sidebar-title">Experience</h4>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <span class="timeline-role">AI/ML Intern</span>
                  <span class="timeline-company">Novi Tech</span>
                  <span class="timeline-period">2025</span>
                </div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                  <span class="timeline-role">Backend Developer</span>
                  <span class="timeline-company">Freelance Projects</span>
                  <span class="timeline-period">2026 - Present</span>
                </div>
              </div>
            </div>

            <div class="education-section">
              <h4 class="sidebar-title">Education</h4>
              <div class="education-item">
                <span class="education-degree">B.Tech Information Technology</span>
                <span class="education-school">Rathinam Technical Campus</span>
                <span class="education-year">2023 - 2027</span>
              </div>
              <div class="education-item">
                <span class="education-degree">HSC - Tamil Nadu State Board</span>
                <span class="education-school">Sri Vidya Mandir Matric. Hr. Sec. School</span>
                <span class="education-year">83%</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  `;
}