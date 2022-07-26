var homePageDiv = document.querySelector("#main-detailContainer");
var home = document.querySelector("#home");
var  aboutPageDiv = document.querySelector("#About-container");
var about = document.querySelector("#about");
var workPageDiv = document.querySelector("#works-container");
var work = document.querySelector("#work");
var AllList =document.querySelector("#All-list");
var AllPageDiv = document.querySelector(".subcontainer1");
var htmlList =document.querySelector("#Html-list");
var htmlPageDiv = document.querySelector(".Html-container");
var jsList =document.querySelector("#js-list");
var jsPageDiv = document.querySelector(".javascript-container");
var angularList =document.querySelector("#angular-list");
var angularPageDiv = document.querySelector(".Angular-container");
var menu = document.querySelector(".menu");
var leftContainer = document.querySelector(".left-container");
var close = document.querySelector(".close")

      // /**************** home page ************************/
home.addEventListener("click", function(){
    homePageDiv.style.display = "flex";
    aboutPageDiv.style.display = "none";
    workPageDiv.style.display = "none";
});
     //********** About page **********/
about.addEventListener("click", function(){
    aboutPageDiv.style.display = "grid";
    homePageDiv.style.display = "none";
    workPageDiv.style.display = "none";
});
    //*********** work page **********/
work.addEventListener("click", function(){
    workPageDiv.style.display = "grid";
    aboutPageDiv.style.display = "none";
    homePageDiv.style.display = "none"; 
});
   //********* All list ********/
AllList.addEventListener("click", function(){
    AllPageDiv.style.display = "flex";
    htmlPageDiv.style.display = "none";
    jsPageDiv.style.display = "none";   
    angularPageDiv.style.display = "none";   
});
   //********* All list ********/
htmlList.addEventListener("click", function(){
    htmlPageDiv.style.display = "flex";
    AllPageDiv.style.display = "none";    
    jsPageDiv.style.display = "none";   
    angularPageDiv.style.display = "none";   
});
   //********* All list ********/
jsList.addEventListener("click", function(){
    jsPageDiv.style.display = "flex"; 
    AllPageDiv.style.display = "none";
    htmlPageDiv.style.display = "none";      
    angularPageDiv.style.display = "none";   
});
   //********* All list ********/
angularList.addEventListener("click", function(){
    angularPageDiv.style.display = "flex";  
    AllPageDiv.style.display = "none";
    htmlPageDiv.style.display = "none";
    jsPageDiv.style.display = "none";        
});
menu.addEventListener("click",function(){
    leftContainer.style = "display : flex;width:205px;height:100%;position:absolute;z-index:1;top:0;left : 0";
});
close.addEventListener("click",function(){
    leftContainer.style.display = "none"
})