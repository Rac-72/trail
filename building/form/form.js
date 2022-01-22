var row = 1;
var btn = document.getElementById("btn")
  btn.addEventListener("click", add)
  function add(){
        var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
        var fac = document.getElementById("fac").value;
        var  dept = document.getElementById("dept").value;
        var lev = document.getElementById("lev").value;
        var grade= document.getElementById("grade").value;
         if(!fname||!lname||!fac||!dept||!dept||!lev||!grade){
             alert("pls fill in the boxes")
             return
         }
        var input = document.getElementById("scores")
         var init = input.insertRow(row)
         var cell1 =init.insertCell(0);
         var cell2 =init.insertCell(1);
         var cell3 =init.insertCell(2);
         var cell4 =init.insertCell(3);
         var cell5 =init.insertCell(4);
         var cell6 =init.insertCell(5);
         var cell7 =init.insertCell(6);
         
 cell1.innerHTML=fname;
 cell2.innerHTML=lname;
 cell3.innerHTML=fac;
 cell4.innerHTML=dept;
 cell5.innerHTML=lev;
 cell6.innerHTML=grade;
 cell7.innerHTML=`<a onClick="myDelete(this)"><button> Remove</button></a>`;
  row++;
document.getElementById("fname").value ="";
document.getElementById("lname").value ="";
document.getElementById("fac").value ="";
 document.getElementById("dept").value="";
  document.getElementById("lev").value="";
  document.getElementById("grade").value="";  

  }
 function myDelete(td){
     if(confirm("Are You Sure You Want To Delelet This ?")){
       row= td.parentElement.parentElement
        document.getElementById("scores").deleteRow(row.rowIndex);
          return
     }
 }