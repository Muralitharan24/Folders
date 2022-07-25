var container = document.querySelector(".container");
var sidebar = document.querySelector(".nav-Container");  
var btnicon = document.querySelector(".btnicon1");
var body = document.querySelector("body");
var animationEl = document.querySelector(".Animation-container");
var liteEl =  document.getElementById("lite");
var darkEl = document.getElementById("dark");
var iputEl = document.getElementById("darkTeme");
var header = document.querySelector(".Header");
var maincontainer = document.querySelector(".maincontainer")
function slidebar(){      
    sidebar.style.display = "block"
    if(sidebar.style.display == "block"){
        container.style.position = "fixed";
        btnicon.style.transform = "none";
    }
}
function cancel(){
    sidebar.style.display ="none"
    if(sidebar.style.display == "none"){
        container.style.position = "relative"  
        btnicon.style.transform = "scale(0.8)";
    }
}
function Animation(){
  var loadingHeader = document.querySelector(".loading-header")
  var loader = document.querySelector(".loading-dv"); 
  animationEl.style.display ="block";
  if( animationEl.style.display ="block"){
    animationEl.style.position = "fixed";
    body.style.overflowY = "hidden";
  }
  var loadercopy = loader.cloneNode(true);
  loadingHeader.appendChild(loadercopy);  
  setTimeout(remove,3500)
}
function remove(){
    animationEl.style.display ="none"; 
    body.style.overflowY = "visible";   
}
function darktheme(){
    if(iputEl.checked == true){
        darkEl.removeAttribute("disabled",false); 
        liteEl.setAttribute("disabled",true)   
    }else {
        liteEl.removeAttribute("disabled",false) 
        darkEl.setAttribute("disabled",true);
    }      
}    
function show(){  
    var darkcontainer = document.getElementById("dark-container");
    if( darkcontainer.style.visibility == "hidden"){
        darkcontainer.style.visibility = "visible";
     }else{
        darkcontainer.style.visibility = "hidden"
    }
}
