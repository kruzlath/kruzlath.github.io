(function() {
  'use strict';
  
  function onReady(selector, fn) {
    const el = document.querySelector(selector);
    if (el) return fn(el);
    setTimeout(() => onReady(selector, fn), 200);
  }

  function myPeriodicTask() {
    console.log("Executing every 5 seconds");
    console.log(Player.ArousalSettings["Progress"]);
    Player.Description=String(Player.ArousalSettings["Progress"]);
    ServerPlayerSync();
    // Your repeating code here
  }

  onReady('#chat-room-bot', (container) => {
    // Run immediately when ready
    myPeriodicTask();
    
    // Then every 5 seconds
    setInterval(myPeriodicTask, 5000);
  });
})();
