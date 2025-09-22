document.addEventListener('DOMContentLoaded', () => {
  // Hero slide-in
  anime({
    targets: '#hero-title',
    translateY: [-40, 0],
    opacity: [0, 1],
    duration: 900,
    easing: 'easeOutExpo'
  });

  anime({
    targets: '#hero-sub',
    translateY: [-20, 0],
    opacity: [0, 1],
    duration: 900,
    delay: 250,
    easing: 'easeOutExpo'
  });

  anime({
    targets: '#hero-cta',
    scale: [0.9, 1],
    opacity: [0, 1],
    duration: 700,
    delay: 500,
    easing: 'easeOutBack'
  });

  // Feature cards stagger
  anime({
    targets: '.feature',
    translateY: [30, 0],
    opacity: [0, 1],
    duration: 800,
    delay: anime.stagger(200, {start: 700}),
    easing: 'easeOutCubic'
  });
});
