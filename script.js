var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton1=document.getElementById("add-popup-btn")

addpopupbutton1.addEventListener("click",function(){
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})

var cancelpopup=document.getElementById("cancel-book")

cancelpopup.addEventListener("click",function(event)
{
    event.preventDefault();
    popupoverlay.style.display="none";
    popupbox.style.display="none ";
})

 var containerr=document.querySelector(".container");
 var bookcontainer=document.querySelector(".book-container")
 var addbook=document.getElementById("add-book");
 var booktitle=document.getElementById("book-title");
 var bookauthor=document.getElementById("book-author");
 var bookdesc=document.getElementById("book-desc");

 addbook.addEventListener("click",function(event)
{
    event.preventDefault();
    var div=document.createElement("div");
    div.setAttribute("class","book-container");
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${bookauthor.value}</h5>
    <p>${bookdesc.value}</p>
    <button onclick="delbook(event)">Delete</button>`
    containerr.append(div);
    popupbox.style.display="none"
    popupoverlay.style.display="none";
})

function delbook(event)

{
    event.target.parentElement.remove();
}