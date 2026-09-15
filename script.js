// Video modal: opens a YouTube embed when a project's play button is clicked
const modal = document.getElementById('videoModal');
const frame = document.getElementById('videoFrame');
const closeBtn = document.getElementById('videoClose');

document.querySelectorAll('.play-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const videoId = btn.getAttribute('data-video');
    frame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  frame.src = ''; // stop playback
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
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
  nav.style.background = '#212C3A';
  nav.style.border = '1px solid #33404F';
  nav.style.padding = '16px 24px';
  nav.style.gap = '16px';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
});
