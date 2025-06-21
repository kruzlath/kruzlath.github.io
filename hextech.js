
let a="#ff9944";
let b=hexToRgb(a);
let c=rgb2hsv(b.r,b.g,b.b);
let d=[c[0]+120,c[1],c[2]]
let e=hsv2rgb(d[0],d[1],d[2]);
let f=rgbToHex(e[0],e[1],e[2]);
console.log(a,b,c,d,e,f); // [0, 0.5, 0.5]