var selectbtn = document.querySelectorAll(".option-focus");

// for(let j = 0;j < radiobtn.length;j++){
//     radiobtn[j].addEventListener("click",function(event){
//         for(let i = 0;i < radiobtn.length;i++){
//             radiobtn[i].parentElement.parentElement.classList.remove("option-active");
//         }
        
//         // if(radiobtn[j].checked){
            
//         //     // radiobtn[j].setAttribute("checked","true");
//         //     event.currentTarget.parentElement.parentElement.classList.add("option-active");
//         // }
//         radiobtn[j].parentElement.parentElement.classList.add("option-active");
//     })
// }

selectbtn.forEach(function(el){
    el.addEventListener("click",function(){
        selectbtn.forEach(function(e){
            e.classList.remove("option-active");
        })
        el.classList.add("option-active");
    })  
})