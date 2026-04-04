// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy load images for better performance
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

// Initialize lazy loading when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
    lazyLoadImages();
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe project and certificate cards
document.querySelectorAll('.card, .achievement-card, .skill-card').forEach(card => {
    observer.observe(card);
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Navbar scroll effect with debounce
const handleNavbarScroll = debounce(() => {
    const navbar = document.querySelector('.vertical-navbar');
    if (window.scrollY > 100) {
        navbar.style.opacity = '0.9';
    } else {
        navbar.style.opacity = '1';
    }
}, 10);

window.addEventListener('scroll', handleNavbarScroll);

// Active navigation highlighting with debounce
const handleActiveNav = debounce(() => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.vertical-nav-links a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 10);

window.addEventListener('scroll', handleActiveNav);

// Typing animation for hero subtitle
const roles = [
    "Full Stack MERN Developer",
    "AI Engineer",
    "MERN Specialist",
    "Data & Cloud Enthusiast"
];

let i = 0;
let j = 0;
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById("typing-text");
    if (!element) return;

    if (i >= roles.length) i = 0;

    const currentText = roles[i];

    if (!isDeleting) {
        element.textContent = currentText.substring(0, j++);
        if (j > currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }
    } else {
        element.textContent = currentText.substring(0, j--);
        if (j === 0) {
            isDeleting = false;
            i++;
        }
    }

    setTimeout(typeEffect, isDeleting ? 40 : 80);
}

document.addEventListener('DOMContentLoaded', typeEffect);

// Scroll to top button
const createScrollToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;
    button.className = 'scroll-to-top';
    button.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(button);
    
    // Show/hide button based on scroll position
    const toggleButton = debounce(() => {
        if (window.scrollY > 500) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }, 100);
    
    window.addEventListener('scroll', toggleButton);
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

createScrollToTopButton();

// Console message
console.log('Portfolio loaded successfully!');
