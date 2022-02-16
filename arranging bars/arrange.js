 function count(){
      var div = document.createElement("div");
       div.className ="box";
       var find = document.querySelector(".container1");
         find.appendChild(div)
         var x = Math.round(Math.random()*10)
         div.innerHTML = x        
        div.setAttribute("target",x);
       div.addEventListener("click",function(){demo(this)})
        }
  function demo(div){
       var data = div.getAttribute("target"); 
       var txt;
       if(data % 2 == 0){
           txt = document.querySelector(".container2")           
       }else{
        txt = document.querySelector(".container3")
       }
       txt.appendChild(div)
  }