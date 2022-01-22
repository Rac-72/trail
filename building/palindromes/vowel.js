let  vowels = ["a", "e", "i","o", "u" ]
let result = document.getElementById("result");
let counter = 0;
function vowel(){
     
       let word = document.getElementById("myvowel").value;
         if(word===""){
             alert("pls fill the box")
             return
         }
         for(w of word){
             for(v of vowels){
                 if(w==v){
                     counter++
                 }
             }
         }
          result.innerText = `${word} has ${counter} vowels`;
    document.getElementById("result").value=""
           document.getElementById("myvowel").value =""
             
 } 
 
