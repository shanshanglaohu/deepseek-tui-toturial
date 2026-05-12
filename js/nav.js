// DeepSeek TUI Tutorial - Navigation
(function() {
  'use strict';

  function initMobileNav() {
    const toggle = document.getElementById('mobile-nav-toggle');
    const sidebar = document.getElementById('sidebar');
    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', function() {
      const isOpen = sidebar.classList.toggle('sidebar-open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.querySelector('.nav-toggle-icon').textContent = isOpen ? '✕' : '☰';
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(e) {
      if (!sidebar.classList.contains('sidebar-open')) return;
      if (!sidebar.contains(e.target) && e.target !== toggle && !toggle.contains(e.target)) {
        sidebar.classList.remove('sidebar-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.nav-toggle-icon').textContent = '☰';
      }
    });

    // Close sidebar on escape
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && sidebar.classList.contains('sidebar-open')) {
        sidebar.classList.remove('sidebar-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.nav-toggle-icon').textContent = '☰';
        toggle.focus();
      }
    });
  }

  function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.sidebar-nav a');
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && currentPath.endsWith(href.replace(/\/$/, ''))) {
        link.classList.add('active');
        // Expand parent section if any
        const parent = link.closest('.nav-section');
        if (parent) {
          parent.classList.add('expanded');
        }
      }
    });
  }

  function init() {
    initMobileNav();
    highlightCurrentPage();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
