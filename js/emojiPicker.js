(function() {
  'use strict';
  
  function onReady(selector, fn) {
    const el = document.querySelector(selector);
    if (el) return fn(el);
    setTimeout(() => onReady(selector, fn), 200);
  }

  function myPeriodicTask() {
    //console.log("Executing every 5 seconds");
    //console.log(Player.ArousalSettings["Progress"]);
    console.log("Check");
    let horny=Player.ArousalSettings["Progress"];
    let description="Well, hello there, reader!\nI am ..., and i am ";
    if(horny>=90){
      description+="Property of Dragoness Hiryu";
    }
    else if (horny>=80){
      description+="Property of Mistress Hiryu";
    }
    else if (horny>=70){
      description+="Property of Lady Hiryu";
    }

    else if (horny<=20){
      description+="Happily owned by Hiryu";
    }
    else {
      description+="Owned by Hiryu";
    }
    ServerAccountUpdate.QueueData({ Description:description },true);
    // Your repeating code here
  }

  onReady('#chat-room-bot', (container) => {
    // Run immediately when ready
    myPeriodicTask();
    
    // Then every 5 seconds
    setInterval(myPeriodicTask, 1000);
  });
})();
