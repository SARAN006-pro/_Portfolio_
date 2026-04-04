import { renderNav } from './components/Nav.js';
import { renderHero, initHeroTyping } from './components/Hero.js';
import { renderAbout } from './components/About.js';
import { renderSkills } from './components/Skills.js';
import { renderProjects } from './components/Projects.js';
import { renderAchievements } from './components/Achievements.js';
import { renderContact, initContactForm } from './components/Contact.js';
import { renderFooter } from './components/Footer.js';

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

// ── Smooth scrolling ──────────────────────────────────────────────────────────

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// ── Scroll-triggered card animations ─────────────────────────────────────────

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const cardObserver = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
      cardObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.card, .achievement-card, .skill-card').forEach(card => {
  cardObserver.observe(card);
});

const style = document.createElement('style');
style.textContent = `@keyframes fadeInUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }`;
document.head.appendChild(style);

// ── Navbar scroll opacity ─────────────────────────────────────────────────────

const handleNavbarScroll = debounce(() => {
  const navbar = document.querySelector('.vertical-navbar');
  if (navbar) navbar.style.opacity = window.scrollY > 100 ? '0.9' : '1';
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

// ── Service worker (optional) ─────────────────────────────────────────────────

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('SW registered'))
      .catch(() => console.log('SW registration failed'));
  });
}

console.log('Portfolio loaded successfully!');
