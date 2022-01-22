 // creating a close button and also making it close its parent elo=ement when clicked on
  var myNodeList = document.getElementsByTagName("LI"); 
   var i;
   for(i =0; i<myNodeList.length; i++){
       var span = document.createElement("SPAN")
        var txt= document.createTextNode("\u00D7");
        span.className= "close";
        span.appendChild(txt);myNodeList[i].appendChild(span)

   }
    var close = document.getElementsByClassName("close");
     var i;
     for(i =0;i<close.length; i++){
         close[i].onclick=function(){
             var div = this.parentElement;
             div.style.display ="none"
         }
     }
      // add checked sign to every of the li and make them disappear onclick
       var lis = document.querySelector("ul");
       lis.addEventListener("click", function(ev){
           

        if(ev.target.tagName ==="LI"){
               ev.target.classList.toggle("checked");
           }
       }, false);
    
        
 
 // by clicking the add button you shld be able to add notes in to todo lis 
 function newElement(){
          let li = document.createElement("li");
           let  inputValue = document.getElementById("myinput").value
           let t =   document.createTextNode(inputValue); 
            li.appendChild(t);
            if(inputValue===""){
                alert("you must write something")
            }
            else{document.getElementById("list").appendChild(li)}
          document.getElementById("myinput").value=""
  var span = document.createElement("SPAN"); 
  var  txt = document.createTextNode("\u00D7");
  span.className="close";
  span.appendChild(txt);
  li.appendChild(span);
  for(i=0; i<close.length; i++){
      close[i].onclick= function(){
           var div = this.parentElement; 
        div.style.display = "none" }
  }
     } 
       