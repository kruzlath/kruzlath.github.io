import {write_desc} from "thing.js"
(function() {
  
  'use strict';
  
  function onReady(selector, fn) {
    const el = document.querySelector(selector);
    if (el) return fn(el);
    setTimeout(() => onReady(selector, fn), 200);
  }
  function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}
  function myPeriodicTask() {
    //console.log("Executing every 5 seconds");
    //console.log(Player.ArousalSettings["Progress"]);
    console.log("Check 1.1");
    let horny=1.1-Player.ArousalSettings["Progress"]/100;
    let description=write_desc(horny);
    
    
    ServerAccountUpdate.QueueData({ Description:description },true);
    // Your repeating code here
  }

  onReady('#chat-room-bot', (container) => {
    // Run immediately when ready
    myPeriodicTask();
    
    // Then every 5 seconds
    setInterval(myPeriodicTask, 10000);
  });
})();
