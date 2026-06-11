// ============================================================
// Personal Resume – script.js
// ============================================================

(function () {
  'use strict';

  // ── Highlight active nav link on scroll ──────────────────
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('nav ul li a');

  function updateActiveLink() {
    const scrollY = window.scrollY + 80;

    sections.forEach(function (section) {
      if (
        scrollY >= section.offsetTop &&
        scrollY < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + section.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
  updateActiveLink();

  // ── Fade-in animation on scroll ──────────────────────────
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document
    .querySelectorAll('.timeline-item, .skill-category, .project-card')
    .forEach(function (el) {
      el.classList.add('fade-in');
      observer.observe(el);
    });

  // Inject fade-in keyframe styles once
  var style = document.createElement('style');
  style.textContent =
    '.fade-in { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }' +
    '.fade-in.visible { opacity: 1; transform: translateY(0); }';
  document.head.appendChild(style);
})();
