const addBtn=document.querySelectorAll(".add-btn")
const selectedEvent=document.querySelector(".selectedEvent")

addBtn.forEach(function(addBtn){
addBtn.addEventListener("click",function(){
const element=addBtn.parentElement
const title =element.querySelector("h1").innerHTML
const image = element.querySelector("img").src
 const newEvent=`
 <div class="introdection1">
 <h1> ${title}</h1>
 <img src="${image}" height="100px" width="25%" alt="" srcset="" >
 
 </div>
 `
 selectedEvent.innerHTML+=newEvent
 /*element.remove()*/
 

})

})