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

// Project video modal
const videoModal = document.getElementById('videoModal');
const videoClose = document.getElementById('videoClose');
const videoFrameYoutube = document.getElementById('videoFrameYoutube');
const videoFrameLocal = document.getElementById('videoFrameLocal');
const videoModalEmpty = document.getElementById('videoModalEmpty');
const videoModalTitle = document.getElementById('videoModalTitle');

function openVideoModal(mediaEl) {
  const type = mediaEl.getAttribute('data-video-type');
  const src = mediaEl.getAttribute('data-video');
  const title = mediaEl.getAttribute('data-video-title') || '';

  videoModalTitle.textContent = title;

  // Reset all three states first
  videoFrameYoutube.hidden = true;
  videoFrameYoutube.src = '';
  videoFrameLocal.hidden = true;
  videoFrameLocal.pause();
  videoFrameLocal.removeAttribute('src');
  videoFrameLocal.load();
  videoModalEmpty.hidden = true;

  if (type === 'youtube' && src) {
    videoFrameYoutube.src = `https://www.youtube.com/embed/${src}?autoplay=1`;
    videoFrameYoutube.hidden = false;
  } else if (type === 'local' && src) {
    videoFrameLocal.src = src;
    videoFrameLocal.hidden = false;
    videoFrameLocal.play().catch(() => {});
  } else {
    videoModalEmpty.hidden = false;
  }

  videoModal.classList.add('open');
  videoModal.setAttribute('aria-hidden', 'false');
}

function closeVideoModal() {
  videoModal.classList.remove('open');
  videoModal.setAttribute('aria-hidden', 'true');
  videoFrameYoutube.src = '';
  videoFrameLocal.pause();
  videoFrameLocal.removeAttribute('src');
  videoFrameLocal.load();
}

document.querySelectorAll('.project-media').forEach((mediaEl) => {
  mediaEl.addEventListener('click', () => openVideoModal(mediaEl));
});

videoClose.addEventListener('click', closeVideoModal);
videoModal.addEventListener('click', (e) => {
  if (e.target === videoModal) closeVideoModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeVideoModal();
});

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
