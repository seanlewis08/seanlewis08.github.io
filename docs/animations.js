// Sean Lewis — Scroll-triggered fade-in animations

document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  const selectors = [
    '.project-card',
    '.quarto-post',
    '.listing-item',
    '.about-contents > p',
    '.about-contents > blockquote',
    '.projects-header',
    '.quarto-title',
  ];

  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('animate-in');
      el.style.transitionDelay = `${i * 0.06}s`;
      observer.observe(el);
    });
  });
});
