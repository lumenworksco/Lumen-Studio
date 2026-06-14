// Nav scroll effect
const nav = document.getElementById('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Mobile menu toggle
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
});

// Close menu when clicking a link
links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        toggle.classList.remove('active');
        links.classList.remove('open');
    });
});

// Fade-in on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements
document.querySelectorAll('.section-header, .project-card, .proj-card, .about-text, .about-stats, .stat, .contact-inner, .tech-strip, .spotlight-card, .project-hero-content, .project-stat, .strategy-card, .feature-card, .ml-card, .tech-detail-card, .detail-section').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// Stagger project card animations
document.querySelectorAll('.project-card, .proj-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
});

// Mac Apps dropdown
const macBtn = document.getElementById('mac-apps-btn');
const macMenu = document.getElementById('mac-apps-menu');
if (macBtn && macMenu) {
    macBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = macMenu.classList.toggle('open');
        macBtn.classList.toggle('open', isOpen);
        macBtn.setAttribute('aria-expanded', isOpen);
    });
    document.addEventListener('click', () => {
        macMenu.classList.remove('open');
        macBtn.classList.remove('open');
        macBtn.setAttribute('aria-expanded', 'false');
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});
