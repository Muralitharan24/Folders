var leftbody = document.querySelector(".leftdv-body");
var card = document.querySelectorAll(".my-card");
var contentEl = document.querySelector(".content-dv");
var count = document.querySelector(".countvalue")
var cardArr = [{
      name : "Bedside Tables",
      amount : "4,999",
      buttonTxt : "Add to cart"
},
{
    name : "Coffee  Tables",
    amount : "4,999",
    buttonTxt : "Add to cart"
},
{
    name : "Rocking Chairs",
    amount : "2,000",
    buttonTxt : "Add to cart"
},
{
    name : "Velvet Sofa",
    amount : "15,000",
    buttonTxt : "Add to cart"
},
{
    name : "Taro Bed Side Table",
    amount : "3,100",
    buttonTxt : "Add to cart"
},
{
    name : "Sofa",
    amount : "10,000",
    buttonTxt : "Add to cart"
},
{
    name : "Bedside Tables",
    amount : "4,999",
    buttonTxt : "Add to cart"
},
{
    name : "Rocking Chairs",
    amount : "2,000",
    buttonTxt : "Add to cart"
}]


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
         var dv1 = document.createElement("div");
         dv1.className = "content-text1"
         var dv2 = document.createElement("div");
         dv2.className = "content-text2"
         dv1.innerHTML = event.target.previousElementSibling.firstChild.innerHTML;
         dv2.innerHTML = event.target.previousElementSibling.lastChild.innerHTML;
         contentEl.append(dv1,dv2)
        count.innerHTML = event.target.previousElementSibling.lastChild.innerHTML
    })
}

