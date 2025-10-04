// Optimized CSS Loading
(function() {
  'use strict';
  
  // Preload critical CSS
  function loadCriticalCSS() {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/critical.css';
    link.media = 'all';
    document.head.appendChild(link);
  }
  
  // Lazy load non-critical CSS
  function loadNonCriticalCSS() {
    var cssFiles = [
      '/static/css/main.css'
    ];
    
    cssFiles.forEach(function(href) {
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      link.media = 'print';
      link.onload = function() {
        this.media = 'all';
      };
      document.head.appendChild(link);
    });
  }
  
  // Load critical CSS immediately
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadCriticalCSS);
  } else {
    loadCriticalCSS();
  }
  
  // Load non-critical CSS after page load
  window.addEventListener('load', loadNonCriticalCSS);
})();