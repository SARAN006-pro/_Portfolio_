export function renderNav() {
  return `
    <nav class="navbar">
      <div class="navbar-container">
        <a href="#hero" class="nav-logo" aria-label="Home">
          <img src="./logo/llogo.png" alt="SARAN V A" class="logo-img"/>
        </a>

        <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
          <span class="hamburger"></span>
        </button>

        <ul class="nav-menu">
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#skills" class="nav-link">Skills</a></li>
          <li><a href="#projects" class="nav-link">Projects</a></li>
          <li><a href="#contact" class="nav-link nav-link--cta">Contact</a></li>
        </ul>
      </div>
    </nav>
  `;
}