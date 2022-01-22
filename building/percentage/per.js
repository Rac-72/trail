var btn = document.getElementById("cal");
btn.addEventListener("click", percentage);
function percentage() {
  var a = document.getElementById("value1").value;
  var b = document.getElementById("value2").value;
  var result = document.getElementById("result");
  var per = 0;
 if(document.getElementById("value1").value==""||document.getElementById("value2").value==""){
   alert("input value")
   return
 }
  if (a.length > 0 && b.length > 0) {
    per = (a * b) / 100;

    var fixed = per.toFixed(3);
  }

  result.innerText = `${fixed}`;

  document.getElementById("value1").value = "";
  document.getElementById("value2").value = "";
  
}

const close = document.getElementById("close");
close.addEventListener("click", myClo);
function myClo() {
  let res = document.getElementById("result");
  res.innerText=""
   
   
}
