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
    let horny=Player.ArousalSettings["Progress"];
    let description="Well, hello there, reader!\n\nI am ..., and i am ";
    if(horny>=90){
      description+="property of Dragoness Hiryu";
    }
    else if (horny>=80){
      description+="property of Mistress Hiryu";
    }
    else if (horny>=70){
      description+="property of Lady Hiryu";
    }

    else if (horny<=20){
      description+="a sub of Hiryu the dragon";
    }
    else {
      description+="happily owned by Hiryu";
    }
    description+=". I once was possesed by a demonic entity, known as Kruzlath, ";
    if (horny>=90){
      description+="but fortunately for me, Dragoness Hiryu so kindly saved me from their grasp, and now i serve her eternally";
    }
    else if (horny>=80){
      description+="but thankfully for me, Mistress Hiryu saved me from their influence, and now i serve her till the end of time";
    }
    else if (horny>=70){
      description+="but luckily for me, Lady Hiryu saved me from their grasp, and now i serve her";
    }
    else if (horny<=30){
      description+="but i was rescued by Hiryu the dragon, and now i live with her in her cave ";
    }
    else {
      description+="but i was saved by Hiryu, and now i serve as her slave";
    }
    table_of_contents=[1,2,3,4]
    if (horny>=70){
      table_of_contents.push(6);
    }
    else if (horny>=20){
      table_of_contents.push(5);
    }
    shuffle(table_of_contents);
    description+=", which is my rightful place in this world. \n\nTable Of Contents:"//\n1. Likes/Dislikes\n2. Important stuff to remember\n3. Greater Backstory\n4. Random facts\n";
    for (i=0;i<table_of_contents.length;i++){
      description+="\n"+String(i+1)+". ";
      if (table_of_contents[i]==1){
        description+="Likes/Dislikes";
      }
      else if (table_of_contents[i]==2){
        description+="Important stuff to remember";
      }
      else if (table_of_contents[i]==3){
        description+="Greater Backstory";
      }
      else if (table_of_contents[i]==4){
        description+="Random facts";
      }
      else if (table_of_contents[i]==5){
        description+="My Slutty Experiences";
      }
      else if (table_of_contents[i]==6){
        description+="My Slave Experiences";
      }
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
