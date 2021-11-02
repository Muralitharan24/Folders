var months =["January 2021","February 2021","March 2021","April 2021","May 2021","June 2021","July 2021","August 2021","September 2021","October 2021","November 2021","December 2021"];
 var n = 0
 document.getElementById("check").innerHTML = months[0]
 var str = [31,28,31,30,31,30,31,31,30,31,30,31];
  var k = 0;
 function Next(){      
     n += 1;
      var nextcount = n % 12;
      document.getElementById("check").innerHTML = months[nextcount];
      document.getElementsByClassName("Naatkal")[0].innerHTML = "";      
      k +=1  
      var d = k % 12;   
      if(k == 12){
        k = 0
      }         
      for(i = 1;i <=str[d];i++){         
        var x = document.createElement("div");
         x.className = "box";
         data.appendChild(x)
         x.innerHTML  = i 
         if(k == 1||k == 2||k == 10){
          document.getElementsByClassName("box")[0].style = "grid-column : 2/2"
        } else if(k == 3||k == 6){
          document.getElementsByClassName("box")[0].style = "grid-column : 5/5"
        } else if(k == 4){
          document.getElementsByClassName("box")[0].style = "grid-column : 7/7"
        } else if(k == 5){
          document.getElementsByClassName("box")[0].style = "grid-column : 3/3"
        } else if(k == 7){
          document.getElementsByClassName("box")[0].style = "grid-column : 1/1"
        } else if(k == 8||k == 11){
          document.getElementsByClassName("box")[0].style = "grid-column : 4/4"
        }else if(k == 0 || k == 9){
          document.getElementsByClassName("box")[0].style = "grid-column : 6/6"
        }                         
    }            
  }  
function Previous(){       
      n = n + 11
      var prevcount = n % 12
      document.getElementById("check").innerHTML = months[prevcount];
      document.getElementsByClassName("Naatkal")[0].innerHTML = "";      
      k = k - 1;
      if(k == -1){
        k = 11
      }
      var r = k % 12
      for(i = 1;i <=str[r];i++){
        var x = document.createElement("div");
         x.className = "box";
         data.appendChild(x)
         x.innerHTML  = i 
         if(k == 1||k == 2||k == 10){
          document.getElementsByClassName("box")[0].style = "grid-column : 2/2"
        } else if(k == 3||k == 6){
          document.getElementsByClassName("box")[0].style = "grid-column : 5/5"
        } else if(k == 4){
          document.getElementsByClassName("box")[0].style = "grid-column : 7/7"
        } else if(k == 5){
          document.getElementsByClassName("box")[0].style = "grid-column : 3/3"
        } else if(k == 7){
          document.getElementsByClassName("box")[0].style = "grid-column : 1/1"
        } else if(k == 8||k == 11){
          document.getElementsByClassName("box")[0].style = "grid-column : 4/4"
        } else if(k == 0 || k == 9){
          document.getElementsByClassName("box")[0].style = "grid-column : 6/6"
        }

       }                        
    }
 var data = document.querySelector(".Naatkal");
  for(i = 1;i <= 31;i++){
      var x = document.createElement("div");
       x.className = "box";
       data.appendChild(x)
       x.innerHTML  = i  
       document.getElementsByClassName("box")[0].style = "grid-column : 6/6"       
  }
