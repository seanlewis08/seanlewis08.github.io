// ═══════════════════════════════════════
// Sean Lewis — Scroll-triggered animations
// Matching budget_app IntersectionObserver style
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ─── Scroll fade-in with stagger ───
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  // Target elements to animate on scroll
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
      // Stagger delay based on index
      el.style.transitionDelay = `${i * 0.06}s`;
      observer.observe(el);
    });
  });

  // ─── Parallax glow effect on mouse move (about page only) ───
  const jolla = document.querySelector('.quarto-about-jolla');
  if (jolla) {
    jolla.addEventListener('mousemove', (e) => {
      const rect = jolla.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 30;

      // Move the ::before glow with CSS custom properties
      jolla.style.setProperty('--glow-x', `calc(50% + ${x}px)`);
      jolla.style.setProperty('--glow-y', `calc(-100px + ${y}px)`);
    });
  }

});
