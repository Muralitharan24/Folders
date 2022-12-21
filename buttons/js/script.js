var shadeiput = document.getElementById("tone-iput");
var para =  document.querySelector("#para");
var ele = document.querySelector(":root");
//var submitbtn = document.getElementById("submit-btn");
var h = 0;
var s = 0;
var l = 0;
hexToHsl = function(hex) {
    hex = hex.replace(/[^a-zA-Z0-9]/g, '');
    // if(Scroll.isEmpty(hex)) {
    //     return;
    // }
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec("#"+hex);
    var r = parseInt(result[1], 16);
    var g = parseInt(result[2], 16);
    var b = parseInt(result[3], 16);
    return rgb2hsl(r,g,b);
},
 
rgb2hsl = function (r,g,b) {
 r /= 255, g /= 255, b /= 255;
 var max = Math.max(r, g, b), min = Math.min(r, g, b);
 var h, s, l = (max + min) / 2;
 if (max == min) {
     h = s = 0; 
 } else {
     var d = max - min;
     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
     switch (max) {
     case r: h = (g - b) / d + (g < b ? 6 : 0); break;
     case g: h = (b - r) / d + 2; break;
     case b: h = (r - g) / d + 4; break;
     }
 }
 h = h * 60;
 s = Math.floor(s * 100);
 l = Math.floor(l * 100);
 if (h > 0) {
     //if h is a positive 
     h = Math.floor(h);
 } else {
     //if h is a negative 
     h = Math.floor(360 - h);
 }
 return  "hsl("+h+","+s+"%,"+l+"%)"; // NO I18N
}



shadeiput.addEventListener("input",function(){
     hexToHsl(shadeiput.value);
     console.log(h + "," + s + "%," + l + "%");
})

