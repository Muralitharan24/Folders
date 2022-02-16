var container = document.querySelector(".container")
var lap = document.querySelector(".lap1");
var body = document.querySelector("body")
var Iputel = document.querySelector("#Iput");
var tooltip = document.querySelector(".tooltip");
var contentbox = document.createElement("div");
var increase = 0;
var myArray = []; 
var myVar;
function demo(){
     increase += 1
     lap.style.marginLeft = increase + "px";
     lap.style.zIndex= "1" ;            
     var newdv = document.createElement("div");
     newdv.id = "lap2";
    var contentbox = document.createElement("div");
    contentbox.className = "content";       
     var g = "";     
     for(i = 0;i < myArray.length;i++){
          g = myArray[i]
          var j = document.getElementsByClassName("content")[i];
          var k  = document.getElementsByClassName("lap2")[i]
         if(increase == g){
           console.log("hi")
           j.style.backgroundColor = "blue";
           k.style.backgroundColor = "blue";       
           console.log(g)
        }
     } 
     var duration = (increase/1300)*Iputel.value;
     var lapduration = duration.toFixed(2);      
     tooltip.innerText = lapduration;
     tooltip.style.color = "white";  
     if(increase >= innerWidth || Iputel.value == ""){
      clearInterval(myVar);
    };   
 }     
function finder(e){
    var newdv = document.createElement("div");
    newdv.className = "lap2"
    container.appendChild(newdv);
    newdv.style.marginLeft = e.x + "px";
    var contentbox = document.createElement("div");
    contentbox.className = "content";
    newdv.appendChild(contentbox);
    var subcontainer = document.createElement("div");
    subcontainer.className = "subcontain"
    body.appendChild(subcontainer)
    subcontainer.style.marginLeft = e.x + "px";
    var input = document.createElement("Input")
    input.id = "MyInput"   
    subcontainer.appendChild(input); 
    var duration = (e.x/1300)*Iputel.value;
    var lapduration = duration.toFixed(2);   
    contentbox.innerText = lapduration ;
    myArray.push(e.x);
    console.log(myArray);
}  
function setout(){
  var find1 = Iputel.value*1000
  console.log(find1);
  var find2 = Math.round(find1/1300);  
  console.log(find2);      
   myVar = setInterval(demo,find2); 
}
 