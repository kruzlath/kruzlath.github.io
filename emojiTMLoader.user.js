// ==UserScript==
// @name Horny Shift
// @namespace https://www.bondageprojects.com/
// @version 0.0.1
// @description test stuff
// @author BIT
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*
// @run-at document-end
// @icon https://www.google.com/s2/favicons?sz=64&domain=elementfx.com
// @grant none
// ==/UserScript==
(function() {
  // Delay 6 s
  setTimeout(() => {
    const script = document.createElement('script');
    script.setAttribute('crossorigin', 'anonymous');
    // cache‑bust so you always get the latest during development:
    script.src = 'https://kruzlath.github.io/js/hex_offsetter.js?_=' + Date.now();
    document.head.appendChild(script);
  }, 6000);
})();
