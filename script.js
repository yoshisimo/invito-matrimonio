window.addEventListener('DOMContentLoaded', () => {
  // Rimuovi preloader dopo qualche secondo
  const preloader = document.getElementById('preloader');
  const container = document.querySelector('.container');

  setTimeout(() => {
    preloader.style.display = 'none';
    container.classList.remove('hidden');
  }, 2500);

  // Animazione passi timeline
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3
  });

  document.querySelectorAll('.step').forEach(step => {
    observer.observe(step);
  });
});
