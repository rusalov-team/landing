// Header scroll effect
const header = document.querySelector('.site-header');

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
};

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
);

reveals.forEach((el, i) => {
  el.style.transitionDelay = `${i % 3 * 100}ms`;
  observer.observe(el);
});

// Mobile menu toggle
const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    toggle.classList.toggle('active');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
