export function initParticles() {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
  script.onload = () => {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 42, density: { enable: true, value_area: 798.35 } },
        color: { value: '#0d9d15' },
        shape: { type: 'circle', stroke: { width: 1, color: '#000000' }, polygon: { nb_sides: 4 } },
        opacity: { value: 0.5, random: false },
        size: { value: 3.935, random: true },
        line_linked: {
          enable: true,
          distance: 526.91,
          color: '#72ff82',
          opacity: 1,
          width: 1.118
        },
        move: {
          enable: true,
          speed: 3.148,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'bounce',
          bounce: false
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: false, mode: 'repulse' },
          onclick: { enable: false },
          resize: true
        }
      },
      retina_detect: true
    });
  };
  document.head.appendChild(script);
}
