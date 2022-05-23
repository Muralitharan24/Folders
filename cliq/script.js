var personContainer = document.querySelectorAll(".person-container");
var videodv = document.querySelector(".vdo-dv");
var namingdiv = document.querySelectorAll(".naming-dv");
var checkindiv = document.querySelector(".check-dv");
var timingdiv = document.querySelector(".timing-dv");
var listContainer = document.querySelectorAll(".list-container");
var dark1 = document.querySelector(".dark1");
var optiondv = document.querySelectorAll(".option-dv");
var convedropDv = document.querySelectorAll(".conversation-dropDv")
    for(let i = 0;i < personContainer.length;i++){
        personContainer[i].addEventListener("mouseenter",function(){
            personContainer[i].style.backgroundColor = "#1C2A38";
            personContainer[i].lastElementChild.style.visibility = "visible";            
        })
        personContainer[i].addEventListener("mouseleave",function(){
            personContainer[i].style.backgroundColor = "transparent";
            personContainer[i].lastElementChild.style.visibility = "hidden";
            
        })
        personContainer[0].addEventListener("mouseenter",function(){
            videodv.style.visibility = "hidden";
        })
        personContainer[0].addEventListener("mouseleave",function(){
            videodv.style.visibility = "visible";
        })
    }
    for(let j = 0;j < namingdiv.length;j++){
        namingdiv[j].addEventListener("mouseenter",function(){
            namingdiv[j].lastElementChild.style.visibility = "visible"; 
            var child =  namingdiv[j].lastElementChild;
            child.previousElementSibling.style.visibility = "visible";        
        })
        namingdiv[j].addEventListener("mouseleave",function(){
            namingdiv[j].lastElementChild.style.visibility = "hidden"; 
            var child =  namingdiv[j].lastElementChild;
            child.previousElementSibling.style.visibility = "hidden";        
        })
    }
    checkindiv.addEventListener("click",function(){
        if(checkindiv.innerHTML == "Check In"){           
            checkindiv.innerHTML = "Check Out";
            checkindiv.style = "border:1px solid red;color:red";
            timingdiv.firstElementChild.style.visibility = "visible"
            var d = timingdiv.lastElementChild;
            d.firstElementChild.checked = true
        }else{
            checkindiv.innerHTML = "Check In";
            checkindiv.style = "border:1px solid green;color:green";
            timingdiv.firstElementChild.style.visibility = "hidden"
            var d = timingdiv.lastElementChild;
            d.firstElementChild.checked = false
        }
    })
    for(let k = 0;k < listContainer.length;k++){
        dark1.addEventListener("click",function(){
            document.getElementById("chat-displayer").style.display = "block";
            document.querySelector(".mainPage").style.display = "block";
            document.getElementById("contact-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".channel-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-callContainer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".right-conversation").style.display = "none";
            document.querySelector(".widgets-displayer").style.display = "none";
            document.querySelector(".widgets-mainContainer").style.display = "none";
            document.querySelector(".files-displayer").style.display = "none";
            document.querySelector(".right-shareContainer").style.display = "none";
            document.querySelector(".right-recordingContainer").style.display = "none";
            document.querySelector(".org-displayer").style.display = "none";
            document.querySelector(".right-orgDisplayer").style.display = "none";
            document.querySelector(".notes-displayer").style.display = "none";
            document.querySelector(".Allnotes-displayer").style.display = "none"
            document.querySelector(".cliqMeeting-displayer").style.display = "none"
            document.querySelector(".calendar-displayer").style.display = "none";
            document.querySelector(".right-calendarContainer").style.display = "none"; 
            dark1.style = "border-left : 2px solid #6CA534;color : #6CA534;background-color: rgb(26,43,60)"; 
            listContainer[k].style = "color:#4E9CC1;border : none;background-color : transparent";  
        });
        document.querySelector(".dark2").addEventListener("click",function(){
            document.getElementById("contact-displayer").style.display = "block";
            document.getElementById("chat-displayer").style.display = "none";
            document.querySelector(".mainPage").style.display = "block";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".channel-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-callContainer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".right-conversation").style.display = "none";
            document.querySelector(".widgets-displayer").style.display = "none";
            document.querySelector(".widgets-mainContainer").style.display = "none";
            document.querySelector(".files-displayer").style.display = "none";
            document.querySelector(".right-shareContainer").style.display = "none";
            document.querySelector(".right-recordingContainer").style.display = "none";
            document.querySelector(".org-displayer").style.display = "none";
            document.querySelector(".right-orgDisplayer").style.display = "none";
            document.querySelector(".notes-displayer").style.display = "none";
            document.querySelector(".Allnotes-displayer").style.display = "none"
            document.querySelector(".cliqMeeting-displayer").style.display = "none"
            document.querySelector(".calendar-displayer").style.display = "none";
            document.querySelector(".right-calendarContainer").style.display = "none"; 
            document.querySelector(".dark2").style = "border-left : 2px solid #6CA534;color : #6CA534;background-color: rgb(26,43,60)"; 
            listContainer[k].style = "color:#4E9CC1;border : none;background-color : transparent";      
        });
        document.querySelector(".dark3").addEventListener("click",function(){
            document.querySelector(".channel-displayer").style.display = "block";
            document.getElementById("contact-displayer").style.display = "none";
            document.getElementById("chat-displayer").style.display = "none";
            document.querySelector(".mainPage").style.display = "block";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-callContainer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".right-conversation").style.display = "none";
            document.querySelector(".widgets-displayer").style.display = "none";
            document.querySelector(".widgets-mainContainer").style.display = "none";
            document.querySelector(".files-displayer").style.display = "none";
            document.querySelector(".right-shareContainer").style.display = "none";
            document.querySelector(".right-recordingContainer").style.display = "none";
            document.querySelector(".org-displayer").style.display = "none";
            document.querySelector(".right-orgDisplayer").style.display = "none";
            document.querySelector(".notes-displayer").style.display = "none";
            document.querySelector(".Allnotes-displayer").style.display = "none"
            document.querySelector(".cliqMeeting-displayer").style.display = "none"
            document.querySelector(".calendar-displayer").style.display = "none";
            document.querySelector(".right-calendarContainer").style.display = "none"; 
            document.querySelector(".dark3").style = "border-left : 2px solid #6CA534;color : #6CA534;background-color: rgb(26,43,60)";  
            listContainer[k].style = "color:#4E9CC1;border : none;background-color : transparent";      
        });
        document.querySelector(".dark4").addEventListener("click",function(){
            document.querySelector(".history-displayer").style.display = "block";
            document.getElementById("contact-displayer").style.display = "none";
            document.getElementById("chat-displayer").style.display = "none";
            document.querySelector(".channel-displayer").style.display = "none";
            document.querySelector(".right-callContainer").style.display = "block";
            document.querySelector(".mainPage").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none"; 
            document.querySelector(".right-meetingContainer").style.display = "none"; 
            document.querySelector(".right-conversation").style.display = "none";  
            document.querySelector(".widgets-displayer").style.display = "none";
            document.querySelector(".widgets-mainContainer").style.display = "none"; 
            document.querySelector(".files-displayer").style.display = "none";  
            document.querySelector(".right-shareContainer").style.display = "none";   
            document.querySelector(".right-recordingContainer").style.display = "none"; 
            document.querySelector(".org-displayer").style.display = "none";
            document.querySelector(".right-orgDisplayer").style.display = "none"; 
            document.querySelector(".notes-displayer").style.display = "none";
            document.querySelector(".Allnotes-displayer").style.display = "none"
            document.querySelector(".cliqMeeting-displayer").style.display = "none"
            document.querySelector(".calendar-displayer").style.display = "none";
            document.querySelector(".right-calendarContainer").style.display = "none"; 
            document.querySelector(".dark4").style = "border-left : 2px solid #6CA534;color : #6CA534;background-color: rgb(26,43,60)";  
            document.querySelector(".call-dv").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534"; 
            document.querySelector(".meeting-dv").style = "background-color : transparent;border : none";
            document.querySelector(".conversation-dv2").style = "background-color : transparent;border : none";
            listContainer[k].style = "color:#4E9CC1;border : none;background-color : transparent";      
        });
        document.querySelector(".dark5").addEventListener("click",function(){
            document.querySelector(".files-displayer").style.display = "block";
            document.querySelector(".right-shareContainer").style.display = "block";
            document.querySelector(".history-displayer").style.display = "none";
            document.getElementById("contact-displayer").style.display = "none";
            document.getElementById("chat-displayer").style.display = "none";
            document.querySelector(".channel-displayer").style.display = "none";
            document.querySelector(".right-callContainer").style.display = "none";
            document.querySelector(".mainPage").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none"; 
            document.querySelector(".right-meetingContainer").style.display = "none"; 
            document.querySelector(".right-conversation").style.display = "none";  
            document.querySelector(".widgets-displayer").style.display = "none";
            document.querySelector(".widgets-mainContainer").style.display = "none";  
            document.querySelector(".right-recordingContainer").style.display = "none"; 
            document.querySelector(".org-displayer").style.display = "none";
            document.querySelector(".right-orgDisplayer").style.display = "none";  
            document.querySelector(".notes-displayer").style.display = "none";
            document.querySelector(".Allnotes-displayer").style.display = "none" 
            document.querySelector(".cliqMeeting-displayer").style.display = "none"
            document.querySelector(".calendar-displayer").style.display = "none";
            document.querySelector(".right-calendarContainer").style.display = "none";  
            document.querySelector(".dark5").style = "border-left : 2px solid #6CA534;color : #6CA534;background-color: rgb(26,43,60)";  
            document.querySelector(".shared-dv").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534"; 
            document.querySelector(".taz-dv").style = "background-color : transparent;border : none";
            document.querySelector(".recording-dv").style = "background-color : transparent;border : none"; 
            listContainer[k].style = "color:#4E9CC1;border : none;background-color : transparent";    
        });
        document.querySelector(".dark6").addEventListener("click",function(){            
            document.querySelector(".calendar-displayer").style.display = "block";
            document.querySelector(".right-calendarContainer").style.display = "block";
            document.getElementById("chat-displayer").style.display = "none";
            document.querySelector(".mainPage").style.display = "none";
            document.getElementById("contact-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".channel-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-callContainer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".right-conversation").style.display = "none";
            document.querySelector(".widgets-displayer").style.display = "none";
            document.querySelector(".widgets-mainContainer").style.display = "none";
            document.querySelector(".files-displayer").style.display = "none";
            document.querySelector(".right-shareContainer").style.display = "none";
            document.querySelector(".right-recordingContainer").style.display = "none";
            document.querySelector(".org-displayer").style.display = "none";
            document.querySelector(".right-orgDisplayer").style.display = "none";
            document.querySelector(".notes-displayer").style.display = "none";
            document.querySelector(".Allnotes-displayer").style.display = "none"
            document.querySelector(".cliqMeeting-displayer").style.display = "none"
            document.querySelector(".dark6").style = "border-left : 2px solid #6CA534;color : #6CA534;background-color: rgb(26,43,60)";  
            listContainer[k].style = "color:#4E9CC1;border : none;background-color : transparent";      
        });
        document.querySelector(".dark7").addEventListener("click",function(){
            document.querySelector(".notes-displayer").style.display = "block";
            document.querySelector(".Allnotes-displayer").style.display = "block"
            document.querySelector(".widgets-displayer").style.display = "none";
            document.querySelector(".widgets-mainContainer").style.display = "none";
            document.getElementById("chat-displayer").style.display = "none";
            document.querySelector(".mainPage").style.display = "none";
            document.getElementById("contact-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".channel-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-callContainer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".right-conversation").style.display = "none";
            document.querySelector(".files-displayer").style.display = "none";  
            document.querySelector(".right-shareContainer").style.display = "none";
            document.querySelector(".right-recordingContainer").style.display = "none";
            document.querySelector(".org-displayer").style.display = "none";
            document.querySelector(".right-orgDisplayer").style.display = "none";
            document.querySelector(".cliqMeeting-displayer").style.display = "none"
            document.querySelector(".calendar-displayer").style.display = "none";
            document.querySelector(".right-calendarContainer").style.display = "none"; 
            document.querySelector(".dark7").style = "border-left : 2px solid #6CA534;color : #6CA534;background-color: rgb(26,43,60)";   
            listContainer[k].style = "color:#4E9CC1;border : none;background-color : transparent";      
        });
        document.querySelector(".dark8").addEventListener("click",function(){
            document.querySelector(".widgets-displayer").style.display = "block";
            document.querySelector(".widgets-mainContainer").style.display = "block";
            document.getElementById("chat-displayer").style.display = "none";
            document.querySelector(".mainPage").style.display = "none";
            document.getElementById("contact-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".channel-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-callContainer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".right-conversation").style.display = "none";
            document.querySelector(".files-displayer").style.display = "none";  
            document.querySelector(".right-shareContainer").style.display = "none";
            document.querySelector(".right-recordingContainer").style.display = "none";
            document.querySelector(".org-displayer").style.display = "none";
            document.querySelector(".right-orgDisplayer").style.display = "none";
            document.querySelector(".notes-displayer").style.display = "none";
            document.querySelector(".Allnotes-displayer").style.display = "none"
            document.querySelector(".cliqMeeting-displayer").style.display = "none"
            document.querySelector(".calendar-displayer").style.display = "none";
            document.querySelector(".right-calendarContainer").style.display = "none"; 
            document.querySelector(".dark8").style = "border-left : 2px solid #6CA534;color : #6CA534;background-color: rgb(26,43,60)";            
            listContainer[k].style = "color:#4E9CC1;border : none;background-color : transparent";             
        });
        document.querySelector(".dark9").addEventListener("click",function(){
            document.querySelector(".org-displayer").style.display = "block";
            document.querySelector(".right-orgDisplayer").style.display = "block";
            document.querySelector(".widgets-displayer").style.display = "none";
            document.querySelector(".widgets-mainContainer").style.display = "none";
            document.getElementById("chat-displayer").style.display = "none";
            document.querySelector(".mainPage").style.display = "none";
            document.getElementById("contact-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".channel-displayer").style.display = "none";
            document.querySelector(".history-displayer").style.display = "none";
            document.querySelector(".right-callContainer").style.display = "none";
            document.querySelector(".right-meetingContainer").style.display = "none";
            document.querySelector(".right-conversation").style.display = "none";
            document.querySelector(".files-displayer").style.display = "none";  
            document.querySelector(".right-shareContainer").style.display = "none";
            document.querySelector(".right-recordingContainer").style.display = "none";
            document.querySelector(".notes-displayer").style.display = "none";
            document.querySelector(".Allnotes-displayer").style.display = "none"
            document.querySelector(".cliqMeeting-displayer").style.display = "none"
            document.querySelector(".calendar-displayer").style.display = "none";
            document.querySelector(".right-calendarContainer").style.display = "none"; 
            listContainer[k].style = "color:#4E9CC1;border : none;background-color : transparent"; 
            document.querySelector(".menudv1").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
            document.querySelector(".menudv2").style = "background-color : transparent;border : none";  
            document.querySelector(".menudv3").style = "background-color : transparent;border : none";              
            document.querySelector(".dark9").style = "border-left : 2px solid #6CA534;color : #6CA534;background-color: rgb(26,43,60)";                 
        });    
    }
                     /* History sub pages*/
    document.querySelector(".call-dv").addEventListener("click",function(){
        document.querySelector(".right-callContainer").style.display = "block";
        document.querySelector(".right-meetingContainer").style.display = "none";
        document.querySelector(".right-conversation").style.display = "none";
        document.querySelector(".call-dv").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".meeting-dv").style = "background-color : transparent;border : none";
        document.querySelector(".conversation-dv2").style = "background-color : transparent;border : none";
    });
    document.querySelector(".meeting-dv").addEventListener("click",function(){
        document.querySelector(".right-meetingContainer").style.display = "block";
        document.querySelector(".right-callContainer").style.display = "none";
        document.querySelector(".right-conversation").style.display = "none";
        document.querySelector(".meeting-dv").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".call-dv").style = "background-color : transparent;border : none";
        document.querySelector(".conversation-dv2").style = "background-color : transparent;border : none";
    });
    document.querySelector(".conversation-dv2").addEventListener("click",function(){
        document.querySelector(".right-conversation").style.display = "block";
        document.querySelector(".right-callContainer").style.display = "none";
        document.querySelector(".right-meetingContainer").style.display = "none";
        document.querySelector(".conversation-dv2").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".meeting-dv").style = "background-color : transparent;border : none";
        document.querySelector(".call-dv").style = "background-color : transparent;border : none";
    });
                       /* Files sub pages*/
    document.querySelector(".shared-dv").addEventListener("click",function(){
        document.querySelector(".sharing-content").innerHTML = "Shared in Cliq";  
        document.querySelector(".right-recordingContainer").style.display = "none"; 
        document.querySelector(".right-shareContainer").style.display = "none";     
        document.querySelector(".shared-dv").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".taz-dv").style = "background-color : transparent;border : none";
        document.querySelector(".recording-dv").style = "background-color : transparent;border : none";       
        setTimeout(function(){            
            document.querySelector(".right-shareContainer").style.display = "block";
        },100);
    });
    document.querySelector(".taz-dv").addEventListener("click",function(){
        document.querySelector(".sharing-content").innerHTML = "Taz";
        document.querySelector(".right-recordingContainer").style.display = "none";
        document.querySelector(".right-shareContainer").style.display = "none";
        document.querySelector(".taz-dv").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".shared-dv").style = "background-color : transparent;border : none";
        document.querySelector(".recording-dv").style = "background-color : transparent;border : none";         
        setTimeout(function(){            
            document.querySelector(".right-shareContainer").style.display = "block";
        },100);
    });
    document.querySelector(".recording-dv").addEventListener("click",function(){
        document.querySelector(".right-recordingContainer").style.display = "block";
        document.querySelector(".right-shareContainer").style.display = "none";
        document.querySelector(".recording-dv").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".shared-dv").style = "background-color : transparent;border : none";  
        document.querySelector(".taz-dv").style = "background-color : transparent;border : none";      
    });
                          /* Notes sub pages */
    document.querySelector(".notes-containDv1").addEventListener("click",function(){        
        document.querySelector(".Allnotes-displayer").style.display = "block";
        document.querySelector(".cliqMeeting-displayer").style.display = "none";
        document.querySelector(".Allnotes-txt").innerHTML = "All Notes";
        document.querySelector(".notes-containDv1").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".notes-containDv2").style = "background-color : transparent;border : none";
        document.querySelector(".notebook-category").style = "background-color : transparent;border : none";
    })                      
    document.querySelector(".notes-containDv2").addEventListener("click",function(){
        document.querySelector(".cliqMeeting-displayer").style.display = "block"
        document.querySelector(".Allnotes-displayer").style.display = "none"
        document.querySelector(".notes-containDv2").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".notes-containDv1").style = "background-color : transparent;border : none";
        document.querySelector(".notebook-category").style = "background-color : transparent;border : none";
    })
    document.querySelector(".notebook-category").addEventListener("click",function(){        
        document.querySelector(".Allnotes-displayer").style.display = "block";
        document.querySelector(".cliqMeeting-displayer").style.display = "none";
        document.querySelector(".Allnotes-txt").innerHTML = "My Notebook";
        document.querySelector(".notebook-category").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".notes-containDv1").style = "background-color : transparent;border : none";
        document.querySelector(".notes-containDv2").style = "background-color : transparent;border : none";
    })
                           /* Org sub pages*/
    document.querySelector(".menudv1").addEventListener("click",function(){
        document.querySelector(".right-orgDisplayer").style.display = "block"; 
        document.querySelector(".Alluser-container").style.display = "flex";
        document.querySelector(".org-subContainer").style.display = "none"; 
        document.querySelector(".menudv1").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".menudv2").style = "background-color : transparent;border : none";  
        document.querySelector(".menudv3").style = "background-color : transparent;border : none";          
    })
    document.querySelector(".menudv2").addEventListener("click",function(){
        document.querySelector(".org-subContainer").style.display = "flex"; 
        document.querySelector(".org-subContent").innerHTML = "No department members added yet.";
        document.querySelector(".Alluser-container").style.display = "none";
        document.querySelector(".menudv2").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".menudv1").style = "background-color : transparent;border : none";  
        document.querySelector(".menudv3").style = "background-color : transparent;border : none";          
    })
    document.querySelector(".menudv3").addEventListener("click",function(){
        document.querySelector(".org-subContent").innerHTML = "You currently have no reports.";
        document.querySelector(".Alluser-container").style.display = "none";
        document.querySelector(".menudv3").style = "background-color: rgba(44, 73, 102, 1); border-left: 2px solid #6CA534";
        document.querySelector(".menudv1").style = "background-color : transparent;border : none";  
        document.querySelector(".menudv2").style = "background-color : transparent;border : none";          
    })
document.querySelector(".drop-dv").addEventListener("click",function(){
      document.querySelector(".dropdown-menu").classList.toggle("mystyle");
}) 
  for(let m = 0;m < optiondv.length;m++){
      optiondv[m].addEventListener("click",function(){
        document.querySelector(".txt-dv").innerHTML =  optiondv[m].firstElementChild.innerHTML
        document.querySelector(".dropdown-menu").classList.toggle("mystyle");
        document.querySelector(".txt-dv").style = "color:#6CA534;font-weight:bold";
        var prevEl = document.querySelector('.checked');
        var styleEl = document.querySelector('.paint');
        if(prevEl || styleEl){
            prevEl.classList.remove('checked');
            styleEl.classList.remove("paint")
        }
        optiondv[m].lastElementChild.classList.add("checked");
        optiondv[m].classList.add("paint");
      })
  } 
document.querySelector(".drop-icon").addEventListener("click",function(){
    document.querySelector(".meetType-drop").classList.toggle("mystyle");
}) 
document.querySelector(".all-dropdv").addEventListener("click",function(){
    document.querySelector(".conversation-drop").classList.toggle("mystyle");
}) 
for(let n = 0;n < convedropDv.length;n++){
    convedropDv[n].addEventListener("click",function(){
      document.querySelector(".all-content").innerHTML = convedropDv[n].firstElementChild.innerHTML
      document.querySelector(".conversation-drop").classList.toggle("mystyle");
      var prevEle = document.querySelector('.check1');
      var styleEle = document.querySelector('.paint2');
      if(prevEle || styleEle){
          prevEle.classList.remove('check1');
          styleEle.classList.remove("paint2")
      }
      convedropDv[n].lastElementChild.classList.add("check1");
      convedropDv[n].classList.add("paint2");
    })
} 
