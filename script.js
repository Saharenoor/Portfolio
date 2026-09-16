// Scroll-reveal: add "in-view" once an element enters the viewport
const revealEls = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (prefersReducedMotion) {
  revealEls.forEach((el) => el.classList.add('in-view'));
} else if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  revealEls.forEach((el) => revealObserver.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('in-view'));
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
  const isOpen = nav.style.display === 'flex';
  nav.style.display = isOpen ? 'none' : 'flex';
  nav.style.flexDirection = 'column';
  nav.style.position = 'absolute';
  nav.style.top = '64px';
  nav.style.right = '24px';
  nav.style.background = '#1D1A29';
  nav.style.border = '1px solid #322C45';
  nav.style.padding = '16px 24px';
  nav.style.gap = '16px';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
});

// Close mobile nav after clicking a link
document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 720) {
      nav.style.display = 'none';
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
