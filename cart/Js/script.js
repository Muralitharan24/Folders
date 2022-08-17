var leftbody = document.querySelector(".leftdv-body");
var contentEl = document.querySelector(".content-dv");
var count = document.querySelector(".countvalue");
var cardArr = [{
      name : "Bedside Tables",
      amount : "4999",
      buttonTxt : "Add to cart"
},
{
    name : "Coffee  Tables",
    amount : "4999",
    buttonTxt : "Add to cart"
},
{
    name : "Rocking Chairs",
    amount : "2000",
    buttonTxt : "Add to cart"
},
{
    name : "Velvet Sofa",
    amount : "15000",
    buttonTxt : "Add to cart"
},
{
    name : "Taro Bed Side Table",
    amount : "3100",
    buttonTxt : "Add to cart"
},
{
    name : "Sofa",
    amount : "10000",
    buttonTxt : "Add to cart"
},
{
    name : "Bedside Tables",
    amount : "4999",
    buttonTxt : "Add to cart"
},
{
    name : "Rocking Chairs",
    amount : "2000",
    buttonTxt : "Add to cart"
}]
var checkArr = [];
for(i = 0;i < cardArr.length;i++){
    var card = document.createElement("div");
    card.className = "my-card";
    var contentdv = document.createElement("div");
    contentdv.className = "text-dv"
    var lable = document.createElement("p");
    lable.className = "txt1";
    var amountdv = document.createElement("p");
    amountdv.className = "amount";
    var button = document.createElement("button");
    button.id = "btn"
    card.append(contentdv,button);
    contentdv.append(lable,amountdv);
    leftbody.appendChild(card);
    lable.innerHTML = cardArr[i].name
    amountdv.innerHTML = cardArr[i].amount;
    button.innerHTML = cardArr[i].buttonTxt
    button.addEventListener("click",function(event){
        var dvcontainer = document.createElement("div");
        dvcontainer.className = "content-storer";
         var dv1 = document.createElement("div");
         dv1.className = "content-text1"
         var dv2 = document.createElement("div");
         dv2.className = "content-text2"
         dv1.innerHTML = event.target.previousElementSibling.firstChild.innerHTML;
         dv2.innerHTML = event.target.previousElementSibling.lastChild.innerHTML;
         contentEl.append(dv1,dv2);
         var totalfinder = document.querySelectorAll(".content-text2");
         checkArr.push(Number(event.target.previousElementSibling.lastChild.innerHTML));
         var totalcount = 0;         
         for(let k = 0;k < checkArr.length;k++){
             totalcount += checkArr[k]
         }      
        count.innerHTML = totalcount
        console.log(checkArr)
    })
    function demo(){
        var cardEl = document.querySelectorAll(".my-card");
        var myiput = document.getElementById("iput").value.toLowerCase();
         for(j = 0;j < cardEl.length;j++){
             if(cardEl[j].firstChild.firstChild.innerHTML.toLowerCase().indexOf(myiput) != -1){
                 cardEl[j].style.display = ""
             }else{
                 cardEl[j].style.display = "none"
             } 
         } 
    }
}

