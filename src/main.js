// Side-effect imports — Vite will bundle these correctly in production
import './loader.js';

import { renderNav } from './components/Nav.js';
import { renderHero, initHeroTyping } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects } from './components/Projects.js';
import { renderAchievements } from './components/Achievements.js';
import { renderContact, initContactForm } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';
import { initSnowEffect } from './snow.js';

// Assemble the page
document.getElementById('app').innerHTML =
  renderNav() +
  renderHero() +
  renderAbout() +
  renderSkills() +
  renderProjects() +
  renderAchievements() +
  renderContact() +
  renderFooter();

// ── Shared utilities ──────────────────────────────────────────────────────────

function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => { clearTimeout(timeout); func(...args); }, wait);
  };
}

// ── Lazy-load images ──────────────────────────────────────────────────────────

const lazyLoadImages = () => {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });
  images.forEach(img => imageObserver.observe(img));
};

lazyLoadImages();

// ── Hero entrance animations ────────────────────────────────────────────────────

const animateHero = () => {
  const heroContent = document.querySelector('.hero-content');
  const heroVisual = document.querySelector('.hero-visual');

  if (!heroContent) return;

  // Animate content elements with stagger
  const elements = heroContent.querySelectorAll('.hero-badge, .hero-title, .hero-description, .hero-cta, .hero-tech');

  elements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200 + i * 150);
  });

  // Animate visual (profile image)
  if (heroVisual) {
    heroVisual.style.opacity = '0';
    heroVisual.style.transform = 'scale(0.95)';
    heroVisual.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

    setTimeout(() => {
      heroVisual.style.opacity = '1';
      heroVisual.style.transform = 'scale(1)';
    }, 600);
  }
};

// Run hero animations after a short delay
setTimeout(animateHero, 100);

// ── Smooth scrolling ──────────────────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── Enhanced Scroll-triggered animations with stagger ────────────────────────

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -80px 0px' };
const cardObserver = new IntersectionObserver(function (entries) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add stagger delay based on element position
      const delay = index * 100;
      entry.target.style.animation = `fadeInUp 0.6s ease ${delay}ms forwards`;
      entry.target.classList.add('revealed');
      cardObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all animated elements with stagger
document.querySelectorAll('.card, .achievement-card, .skill-card, .pcard, .flip-card').forEach((el, i) => {
  el.style.opacity = '0';
  cardObserver.observe(el);
});

// Section reveal observer for headings
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-revealed');
      sectionObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section-title, .projects-new__header, .about-hero-title').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  sectionObserver.observe(el);
});

// ── CSS Animations ─────────────────────────────────────────────────────────────

const style = document.createElement('style');
style.textContent = `
  /* Fade in up - main scroll animation */
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Fade in for content */
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Scale in for cards */
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  /* Slide in from sides */
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }

  /* Section reveal */
  .section-revealed {
    animation: fadeInUp 0.6s ease forwards;
  }

  /* Revealed state */
  .revealed {
    opacity: 1 !important;
  }

  /* Card hover - subtle lift */
  .card:hover, .pcard:hover, .achievement-card:hover, .skill-card:hover, .project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.4);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  /* Button hover */
  .btn:hover, .cta-button:hover, .pcard__btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -8px rgba(59, 130, 246, 0.5);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }

  /* Link hover with underline */
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary-accent);
    transition: width 0.25s ease;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  /* Project card specific hover */
  .project-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .project-card:hover {
    border-color: var(--primary-accent);
  }

  /* Skill category hover */
  .skill-category {
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  .skill-category:hover {
    border-color: var(--primary-accent);
  }

  /* Focus states */
  a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible {
    outline: 2px solid var(--primary-accent);
    outline-offset: 2px;
  }

  /* Smooth scroll */
  html {
    scroll-behavior: smooth;
  }

  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;
document.head.appendChild(style);

// ── Navbar scroll opacity & style ─────────────────────────────────────────────

const handleNavbarScroll = debounce(() => {
  const navbar = document.querySelector('.vertical-navbar');
  if (navbar) {
    if (window.scrollY > 100) {
      navbar.style.opacity = '0.95';
      navbar.style.backdropFilter = 'blur(15px)';
    } else {
      navbar.style.opacity = '1';
      navbar.style.backdropFilter = 'blur(10px)';
    }
  }
}, 10);

window.addEventListener('scroll', handleNavbarScroll);

// ── Active nav highlighting ───────────────────────────────────────────────────

const handleActiveNav = debounce(() => {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.vertical-nav-links a[href^="#"]');
  let current = '';
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 200) current = section.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
  });
}, 10);

window.addEventListener('scroll', handleActiveNav);

// ── Scroll-to-top button ──────────────────────────────────────────────────────

const button = document.createElement('button');
button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"></polyline></svg>`;
button.className = 'scroll-to-top';
button.setAttribute('aria-label', 'Scroll to top');
document.body.appendChild(button);

window.addEventListener('scroll', debounce(() => {
  button.classList.toggle('visible', window.scrollY > 500);
}, 100));

button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ── Hero typing effect ────────────────────────────────────────────────────────

initHeroTyping();

// ── Contact form ──────────────────────────────────────────────────────────────

initContactForm();

// ── Snow effect (subtle winter ambiance) ──────────────────────────────────────

initSnowEffect();

// ── Skill bar animation on scroll (simplified) ────────────────────────────────
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
        bar.classList.add('animate');
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-card').forEach(card => {
  skillObserver.observe(card);
});

// Counter animation for stats
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('.counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target;
          }
        };

        updateCounter();
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-card, .flip-cards-grid').forEach(el => {
  counterObserver.observe(el);
});

// Smooth reveal for images on load
document.querySelectorAll('.hero-image').forEach(img => {
  img.style.opacity = '0';
  img.style.transition = 'opacity 0.6s ease';
  setTimeout(() => {
    img.style.opacity = '1';
  }, 300);
});

console.log('Portfolio loaded successfully!');
