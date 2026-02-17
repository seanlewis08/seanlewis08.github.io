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

  // ─── Straw Hat (top-right corner of about page) ───
  const jolla = document.querySelector('.quarto-about-jolla');
  if (jolla) {
    const hat = document.createElement('div');
    hat.className = 'straw-hat';
    hat.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 110" width="130" height="72">
      <!-- shadow on the ground -->
      <ellipse cx="95" cy="105" rx="70" ry="5" fill="rgba(0,0,0,0.3)"/>

      <!-- brim - wide, slightly warped like it's resting flat -->
      <ellipse cx="95" cy="82" rx="90" ry="18" fill="#c49530"/>
      <ellipse cx="95" cy="82" rx="90" ry="18" fill="url(#brimGrad)"/>
      <ellipse cx="95" cy="82" rx="90" ry="18" fill="none" stroke="#a07828" stroke-width="1" opacity="0.5"/>
      <!-- brim texture lines -->
      <ellipse cx="95" cy="82" rx="78" ry="14" fill="none" stroke="#b58a2e" stroke-width="0.5" opacity="0.3"/>
      <ellipse cx="95" cy="82" rx="65" ry="10" fill="none" stroke="#b58a2e" stroke-width="0.5" opacity="0.2"/>

      <!-- dome - the crown sitting up from the brim -->
      <path d="M48,82 Q48,30 95,24 Q142,30 142,82" fill="#daa740"/>
      <path d="M48,82 Q48,30 95,24 Q142,30 142,82" fill="url(#domeGrad)"/>
      <path d="M48,82 Q48,30 95,24 Q142,30 142,82" fill="none" stroke="#b58a2e" stroke-width="1" opacity="0.4"/>
      <!-- dome straw texture -->
      <path d="M60,70 Q95,62 130,70" fill="none" stroke="#c49530" stroke-width="0.7" opacity="0.3"/>
      <path d="M55,60 Q95,50 135,60" fill="none" stroke="#c49530" stroke-width="0.7" opacity="0.25"/>
      <path d="M58,50 Q95,40 132,50" fill="none" stroke="#c49530" stroke-width="0.7" opacity="0.2"/>
      <!-- dome highlight -->
      <path d="M72,45 Q95,36 110,42" fill="none" stroke="rgba(255,255,200,0.15)" stroke-width="3"/>

      <!-- red band / ribbon -->
      <path d="M50,65 Q95,56 140,65 Q95,74 50,65 Z" fill="#cc2222"/>
      <path d="M50,65 Q95,56 140,65 Q95,74 50,65 Z" fill="url(#bandGrad)"/>
      <!-- ribbon shadow -->
      <path d="M52,67 Q95,72 138,67" fill="none" stroke="#8b1515" stroke-width="0.8" opacity="0.4"/>

      <!-- gradients -->
      <defs>
        <linearGradient id="brimGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,200,0.1)"/>
          <stop offset="50%" stop-color="rgba(0,0,0,0)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0.1)"/>
        </linearGradient>
        <linearGradient id="domeGrad" x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stop-color="rgba(255,255,200,0.12)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0.08)"/>
        </linearGradient>
        <linearGradient id="bandGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="rgba(255,100,100,0.15)"/>
          <stop offset="100%" stop-color="rgba(0,0,0,0.15)"/>
        </linearGradient>
      </defs>
    </svg>`;
    jolla.appendChild(hat);
  }

  // ─── Parallax glow effect on mouse move (about page only) ───
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
