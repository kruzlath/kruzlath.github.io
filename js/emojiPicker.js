 (function() {
  'use strict';

  // a simple await，until #chat-room-bot loaded
  function onReady(selector, fn) {
    const el = document.querySelector(selector);
    if (el) return fn(el);
    setTimeout(() => onReady(selector, fn), 200);
  }

  onReady('#chat-room-bot', (container) => {
    // 1. get the container and make sure it uses relative positioning
    // if (getComputedStyle(container).position === 'static') {
    //   container.style.position = 'relative';
    // }
    console.log("Guess who managed to make a custom BC extension!! THaT'S RIGHT!!!")
    Player.Description="Testing If Description can be changed"
    ServerPlayerSync()

    
    
  });
})();
