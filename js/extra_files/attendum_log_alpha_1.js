
  function randint(a,b){
    return Math.floor(Math.random()*(b-a+1))+a;
}
for (let x=0; x<100; x++){
    console.log(randint(1,3))
}