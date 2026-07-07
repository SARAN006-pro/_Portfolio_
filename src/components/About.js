export function renderAbout() {
  return `
    <section id="about" class="about">
      <div class="container">
        <header class="section-header">
          <h2 class="section-heading">About Me</h2>
          <p class="section-subtitle">Full Stack Developer</p>
        </header>

        <div class="about-content">
          <div class="about-main">
            <div class="about-text">
              <h3 class="about-title">Full Stack Developer Focused on Scalable Solutions</h3>
              <p class="about-paragraph">
                I'm a pre-final year B.Tech Information Technology student at Rathinam Technical Campus, Coimbatore, passionate about building production-grade software that solves real problems. I build end-to-end applications with clean, maintainable architecture and strong problem-solving skills rooted in data structures and algorithms.
              </p>
              <p class="about-paragraph">
                I've built projects across domains - from a Spring Boot learning tracker to an assistant backend. Each project is designed with clean architecture, real-world constraints, and production thinking.
              </p>
              <p class="about-paragraph">
                I hold an AWS Certified AI Practitioner certification (2026). I'm actively seeking Full Stack and SDE internships where I can contribute to production systems alongside experienced engineers.
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
                <span class="detail-value">Full Stack</span>
                <span class="detail-label">Development</span>
              </div>
            </div>
          </div>

          <aside class="about-sidebar">
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