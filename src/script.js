if (window.lucide) {
  const iconSets = [
    ['.service-grid article > div', ['file-text', 'shirt', 'panel-top', 'sticker', 'gift', 'palette']],
    ['.benefits article', ['zap', 'award', 'message-circle', 'truck']],
    ['.steps article', ['upload', 'file-check', 'credit-card', 'printer', 'package']],
    ['.cta', ['rocket']]
  ];

  iconSets.forEach(([selector, icons]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      const icon = icons[index];
      if (!icon) return;
      const isServiceIcon = selector === '.service-grid article > div';
      const target = isServiceIcon ? element : element.querySelector('i');
      if (!target) return;
      if (isServiceIcon) {
        target.innerHTML = `<i class="icon" data-lucide="${icon}"></i>`;
      } else {
        target.outerHTML = `<i class="icon" data-lucide="${icon}"></i>`;
      }
    });
  });

  window.lucide.createIcons({ attrs: { 'stroke-width': 1.8, 'aria-hidden': 'true' } });
  document.querySelectorAll('.service-grid article > div > svg').forEach((icon) => icon.classList.add('service-icon'));
  document.querySelectorAll('.benefits article > svg').forEach((icon) => icon.classList.add('benefit-icon'));
  document.querySelectorAll('.steps article > svg').forEach((icon) => icon.classList.add('process-icon'));
  document.querySelectorAll('.cta > svg').forEach((icon) => icon.classList.add('cta-icon'));
}

const hero = document.querySelector('.hero');

if (hero && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const updateParallax = () => {
    const distance = Math.min(window.scrollY * 0.12, 70);
    hero.style.setProperty('--hero-scroll', `${distance * -1}px`);
  };

  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const animatedItems = document.querySelectorAll(
    '.service-grid article, .benefits article, .product-grid article, .steps article, .testimonial article, .cta'
  );
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  animatedItems.forEach((item, index) => {
    item.classList.add('motion-item');
    item.style.setProperty('--motion-delay', `${(index % 6) * 75}ms`);
    observer.observe(item);
  });
}
