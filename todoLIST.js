var button = document.getElementById("enter");
var input  = document.getElementById("userInput");
var ul= document.querySelector("ul");
var li =document.querySelector("li");

var button1=document.getElementsByClassName("delete");
for(var i=0;i<button1.length;i++){

var button2=document.getElementsByClassName("delete")[i];

button2.addEventListener("click",removeParent);
}
//function on when text is clicked add a cut to it
ul.onclick=function(event){
	var target1=event.target;
	target1.classList.toggle("done");
    
}


function superf(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));		
	ul.appendChild(li);
	input.value = "";



//here we created a button when we add new li to list
var btn = document.createElement("button");
btn.className="delete";
	// here we attached a name to the button we created 
   btn.appendChild(document.createTextNode("Delete!"));
	   	//here we attached that button to our the li we created 
	   	li.appendChild(btn);
	   	//here we added the functionality that 
	   	//WHAT BUTTON WILL DO WHEN IT IS CLICKED
     btn.onclick = removeParent;
 } 


//function declaration of what button will do when clicked
function removeParent(evt){
	evt.target.parentNode.remove();
}


function hello(){
	if(input.value.length>0){
		superf();}
}


function panda(e){
		if(input.value.length>0&&e.keyCode===13){
			superf();}
}

button.addEventListener("click",hello)
input.addEventListener("keypress",panda)

