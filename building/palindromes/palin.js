
 
  let result = document.getElementById("result")
  function check(){
    var inp = document.getElementById("mypali").value;
 let re = /[\W_]/g;
 inp=inp.toLowerCase().replace(re, "")
        let len = inp.length-1;
        for(let i=0; i<len/2;i++){
            if(inp[i]!==inp[len-i]){
               return result.innerText=`${inp} Is Not A Palindrome`

            }
        }
       return  result.innerText=`${inp} Is A Palindrome`; 
  }