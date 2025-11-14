(function() {

  // a simple await，until #chat-room-bot loaded
  function onReady(selector, fn) {
    const el = document.querySelector(selector);
    if (el) return fn(el);
    setTimeout(() => onReady(selector, fn), 200);
  }
  function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex.toLowerCase());
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
//const character_id='uI54mMFAPY1S39mHAVw5';
//let my_character=[];
let my_time=0;
let theta=0
function ColorUpdater(){
    let horny=Player.ArousalSettings["Progress"]*1.8*2.0;
    my_time+=1;
    if(Player.ArousalSettings["Progress"]>10){
      theta+=(101.0/(101-Player.ArousalSettings["Progress"]))
    }
    if (Player.Appearance.length!=start_hsv.length){
      load_char_color();
    }
    let counter=0;
    if (my_time>360) my_time-=360;
    for (let i=0;i<Player.Appearance.length;i++){
         if (Player.Appearance[i].Color.length>0){
        for (let j=0;j<start_hsv[i].length;j++){
          console.log(start_hsv[i],j);
            if (start_hsv[i][j].length==3){
              counter+=1
            let new_rgb=hsv2rgb(start_hsv[i][j][0]+theta,start_hsv[i][j][1],start_hsv[i][j][2]);
            Player.Appearance[i].Color[j]=rgbToHex(new_rgb[0],new_rgb[1],new_rgb[2]);
        }
    }
    }
    }
    ChatRoomCharacterUpdate(Player);
}
  function load_char_color(){
    start_hsv=[];
    for (let i=0;i<Player.Appearance.length;i++){
        let new_list=[];
        if (Player.Appearance[i].Color.length>0){
            for (let j=0;j<Player.Appearance[i].Color.length;j++){
                //console.log(Player.Appearance[i].Color[j]);
                //console.log(hexToRgb(Player.Appearance[i].Color[j]));
                if (Player.Appearance[i].Color[j][0]=="#"){
                let rgb=hexToRgb(Player.Appearance[i].Color[j]);
                if (rgb==null){
                  rgb={r:0,g:0,b:0};
                }
                console.log(rgb);
                let new_hsv=rgb2hsv(rgb.r,rgb.g,rgb.b);
                console.log(new_hsv);
                new_list.push(new_hsv);
                }
                else{
                    new_list.push("Default");
                }
            }
    }
      start_hsv.push(new_list);
    }
  }
  onReady('#chat-room-bot', (container) => {
    if (Player.AccountName=="BOONSUB3"||Player.AccountName=="MIONI"){
      load_char_color();
    //var name = "Nyx";
    //my_character.push(Character.find(c => c.Name === name)); 
    
    console.log("YEP");
    
    setInterval(ColorUpdater, 3000);
    }
  });
})();
