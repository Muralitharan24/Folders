var boards = document.querySelectorAll(".board");
var mainContain = document.querySelector("#mainContainer");
for(let i = 0;i < boards.length;i++){    
     function solve(){
        var player1 = document.querySelector("#player1");
        var player2 = document.querySelector("#player2");
        var list =  document.querySelector(".guess");
        var subContain = document.getElementById("subContainer");
        var head = document.getElementById("head")
          if(list.innerHTML == "Player1(O)"){
              console.log("if",list.innerHTML)
              boards[i].innerHTML = "O"  
              player2.style.backgroundColor = "#9f9f4e4f";
              player1.style.backgroundColor = "transparent"; 
              player1.classList.remove("guess");
              player2.classList.add("guess");                     
          }else{                
              console.log("else",list.innerHTML)
              boards[i].innerHTML = "X"   
              player1.style.backgroundColor = "#9f9f4e4f";
              player2.style.backgroundColor = "transparent";
              player1.classList.add("guess"); 
              player2.classList.remove("guess");                           
          };
          boards[i].removeEventListener("click",solve); 
          setTimeout(function(){
          if(boards[0].innerHTML == "" && boards[1].innerHTML == "" && boards[2].innerHTML == ""){
              
          }else
          if(boards[0].innerHTML == boards[1].innerHTML && boards[1].innerHTML ==  boards[2].innerHTML  && boards[2].innerHTML == boards[0].innerHTML){
                var find = (boards[0].innerHTML == "O") ? "Player1 Wins" : "Player2 Wins";
                subContain.style.display = "block";
                head.innerHTML = find;
                player1.style.backgroundColor = "transparent";
                player2.style.backgroundColor = "transparent";
          }else
          if(boards[3].innerHTML == "" && boards[4].innerHTML == "" && boards[5].innerHTML == ""){
              
          }else 
          if(boards[3].innerHTML == boards[4].innerHTML && boards[4].innerHTML ==  boards[5].innerHTML  && boards[5].innerHTML == boards[3].innerHTML){
                  var find = (boards[3].innerHTML == "O") ? "Player1 Wins" : "Player2 Wins";
                  subContain.style.display = "block";
                  head.innerHTML = find;
                  player1.style.backgroundColor = "transparent";
                  player2.style.backgroundColor = "transparent";
          }else
          if(boards[6].innerHTML == "" && boards[7].innerHTML == "" && boards[8].innerHTML == ""){
              
          }else 
          if(boards[6].innerHTML == boards[7].innerHTML && boards[7].innerHTML ==  boards[8].innerHTML  && boards[8].innerHTML == boards[6].innerHTML){
                  var find = (boards[6].innerHTML == "O") ? "Player1 Wins" : "Player2 Wins";
                  subContain.style.display = "block";
                  head.innerHTML = find;
                  player1.style.backgroundColor = "transparent";
                  player2.style.backgroundColor = "transparent";
          }else
          if(boards[0].innerHTML == "" && boards[3].innerHTML == "" && boards[6].innerHTML == ""){
               
          }else 
          if(boards[0].innerHTML == boards[3].innerHTML && boards[3].innerHTML ==  boards[6].innerHTML  && boards[6].innerHTML == boards[0].innerHTML){
                var find = (boards[0].innerHTML == "O") ? "Player1 Wins" : "Player2 Wins";
                subContain.style.display = "block";
                head.innerHTML = find;
                player1.style.backgroundColor = "transparent";
                player2.style.backgroundColor = "transparent";

          }else
          if(boards[1].innerHTML == "" && boards[4].innerHTML == "" && boards[7].innerHTML == ""){
               
          }else 
          if(boards[1].innerHTML == boards[4].innerHTML && boards[4].innerHTML ==  boards[7].innerHTML  && boards[7].innerHTML == boards[1].innerHTML){
                var find = (boards[1].innerHTML == "O") ? "Player1 Wins" : "Player2 Wins";
                subContain.style.display = "block";
                head.innerHTML = find;
                player1.style.backgroundColor = "transparent";
                player2.style.backgroundColor = "transparent";

          }else
          if(boards[2].innerHTML == "" && boards[5].innerHTML == "" && boards[8].innerHTML == ""){
               
          }else 
          if(boards[2].innerHTML == boards[5].innerHTML && boards[5].innerHTML ==  boards[8].innerHTML  && boards[8].innerHTML == boards[2].innerHTML){
                var find = (boards[2].innerHTML == "O") ? "Player1 Wins" : "Player2 Wins";
                subContain.style.display = "block";
                head.innerHTML = find;
                player1.style.backgroundColor = "transparent";
                player2.style.backgroundColor = "transparent";
          }else
          if(boards[0].innerHTML == boards[4].innerHTML && boards[4].innerHTML ==  boards[8].innerHTML  && boards[8].innerHTML == boards[0].innerHTML){
                var find = (boards[0].innerHTML == "O") ? "Player1 Wins" : "Player2 Wins";
                subContain.style.display = "block";
                head.innerHTML = find;
                player1.style.backgroundColor = "transparent";
                player2.style.backgroundColor = "transparent";
          }else
          if(boards[2].innerHTML == boards[4].innerHTML && boards[4].innerHTML ==  boards[6].innerHTML  && boards[6].innerHTML == boards[2].innerHTML){
                var find = (boards[2].innerHTML == "O") ? "Player1 Wins" : "Player2 Wins";
                subContain.style.display = "block";
                head.innerHTML = find;
                player1.style.backgroundColor = "transparent";
                player2.style.backgroundColor = "transparent";
          }else
          if((boards[0].innerHTML && boards[1].innerHTML && boards[2].innerHTML && boards [3].innerHTML && boards[4].innerHTML && boards[5].innerHTML && boards[6].innerHTML && boards[7].innerHTML && boards[8].innerHTML) != ""){
                subContain.style.display = "block";
                head.innerHTML = "It's draw";
                player1.style.backgroundColor = "transparent";
                player2.style.backgroundColor = "transparent";
          }
          },1)
      }
    boards[i].addEventListener("click",solve);     
};
function show(){   
  var subContain = document.getElementById("subContainer");
    subContain.style.display = "none";
    location.reload();
}
function selection1(){
        var play1 = document.getElementById("player1");
        play1.classList.add("guess");
        mainContain.style.display = "none";
}
function selection2(){
        var play2 = document.getElementById("player2");
        play2.classList.add("guess");
        mainContain.style.display = "none";
}
