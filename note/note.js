     
   
    
  var row = 1;
   var newt = document.getElementById("btn");
   newt.addEventListener("click", newTable)
    function newTable(){
       var name = document.getElementById("expen").value;
       var date = document.getElementById("date").value;
       var amount = document.getElementById("amount").value;

        if(!name||!date||!amount){
          alert("Pls Fill In The Boxes")
           return
         }
          var display = document.getElementById("show")
            var init= display.insertRow(row)
              var cell1 = init.insertCell(0 );
              var cell2 = init.insertCell(1);
              var cell3 = init.insertCell(2)
               var cell4 = init.insertCell(3);
               cell1.innerHTML= name;
               cell2.innerHTML=  date;
    
               cell3.innerHTML= amount;
                cell4.innerHTML =`<a onClick ="onDelete(this)"><button> Remove</button> </a>`;
                row ++;
                document.getElementById("expen").value ="";
                document.getElementById("date").value ="";
                document.getElementById("amount").value ="";

  
                
}
  








 function onDelete(td){
    if(confirm("are you sure you want to delete this?")){
row = td.parentElement.parentElement;
 document.getElementById("show").deleteRow(row.rowIndex)
  
    }
 }

   
