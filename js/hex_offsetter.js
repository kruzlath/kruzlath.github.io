(function() {
  'use strict';

  // a simple await，until #chat-room-bot loaded
  function onReady(selector, fn) {
    const el = document.querySelector(selector);
    if (el) return fn(el);
    setTimeout(() => onReady(selector, fn), 200);
  }
  function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16)/255,
    g: parseInt(result[2], 16)/255,
    b: parseInt(result[3], 16)/255
  } : null;
}
function rgbToHex(r, g, b) {
  return "#" + (1 << 24 | r*255 << 16 | g*255 << 8 | b*255).toString(16).slice(1);
}
function rgb2hsv(r,g,b) {
  let v=Math.max(r,g,b), c=v-Math.min(r,g,b);
  let h= c && ((v==r) ? (g-b)/c : ((v==g) ? 2+(b-r)/c : 4+(r-g)/c)); 
  return [60*(h<0?h+6:h), v&&c/v, v];
}
function hsv2rgb(h,s,v) 
{                              
  let f= (n,k=(n+h/60)%6) => v - v*s*Math.max( Math.min(k,4-k,1), 0);     
  return [f(5),f(3),f(1)];       
}   
let start_hsv=[];
function ColorUpdater(){
    let horny=Player.ArousalSettings["Progress"];
    for (let i=0;i<Player.Appearance.length;i++){
        for (let j=0;j<Player.Appearance[i].Color.length;j++){
            
            
            Player.Appearance[i].Color[j]=rgbToHex(hsv2rgb(start_hsv[i][j][0]+horny,start_hsv[i][j][1],start_hsv[i][j][2])[0]*255,hsv2rgb(start_hsv[i][j][0]+horny,start_hsv[i][j][1],start_hsv[i][j][2])[1]*255,hsv2rgb(start_hsv[i][j][0]+horny,start_hsv[i][j][1],start_hsv[i][j][2])[2]*255);
        }
    }
    ServerPlayerAppearanceSync();
}
  onReady('#chat-room-bot', (container) => {
    
    for (let i=0;i<Player.Appearance.length;i++){
        let new_list=[];
        for (let j=0;j<Player.Appearance[i].Color.length;j++){
            //console.log(Player.Appearance[i].Color[j]);
            //console.log(hexToRgb(Player.Appearance[i].Color[j]));
            let rgb=hexToRgb(Player.Appearance[i].Color[j]);
            let new_hsv=rgb2hsv(rgb.r,rgb.g,rgb.b);
            new_list.push(new_hsv);
        }
      start_hsv.push(new_list);
    }
    console.log("YEP");
    setInterval(ColorUpdater, 2000);
  });
})();