firstLetterOfMyStr = "";
var myStr = "ilove you";
firstLetterOfMyStr = myStr[1];

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  result +=
    " the " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdverb; 
  return result;
}
console.log(wordBlanks('dog', 'big', 'ran', 'quickly'))
var ourArray = [
  ["my name is afolabi", 23],
  ["i live at no", 24],
];
console.log(ourArray)
//checking for arrays
var myArray = [50, 60, 70];
var myData = myArray[1];
console.log(myArray[0])
// using arrays to change number index
var yourArray = [
  [50, 60, 80],
  [80, 70, 40],
  [70, 40, 80],
  [30, 20, 15],
  [9, 5],
];
yourArray[1][0]=30;
yourArray[0][2] = 20;
console.log(yourArray)
//manipulating arrays with push
var dataArray = [["push"], ["my,job"], ["to50"]];
dataArray.push(["my love", "for js"]);
console.log(dataArray)
//manipulation arrays with pop() removing  the last array
var removeFromDataArray = dataArray.pop();
//manipulating arrays with shift()  remove the first element of the array

var removeFromDataArray = dataArray.shift();

//manipulating arrays with unshift() adds an element to the begining of an array
dataArray.unshift(["paul", 25]);
//shopping list
var myList = [
  ["eggs", 5],
  ["cereals", 3],
  ["bannana", 3],
];
//reuseable funtions
function ourReuseableFunction() {
  console.log("hey", "world");
}
ourReuseableFunction();
ourReuseableFunction();
ourReuseableFunction();
//passing argument to a function
function ourFunction(a, b, c) {
  console.log(a - b + c);
}
ourFunction(10, 5, 2);
//global scope and funtions
var myGlobal = 10;

function fun1() {
  ooopsGlobal = 5;
}
function fun2() {
  var outPut = "";
  if (typeof myGlobal != undefined) {
    outPut += "myGlobal:" + myGlobal;
  }
  if (typeof ooopsGlobal != undefined) {
    outPut += "ooopsGlobal:" + ooopsGlobal;
  }
  console.log(outPut);
}

fun1(); 
fun2();
//local scope and function
function localScope() {
  Var  = 5;
  console.log(Var);
}
localScope();
//global vs local scope in funtions\
var myOutWear = "tshirt"; //global var
function outFit() {
  var myOutWear = "sweater"; //local var
  return myOutWear;
}
console.log(outFit());
console.log(myOutWear);
//return a value from a function with return
function num(minus) {
  return minus - 10;
}
console.log(num(20));

function minusMy(num) {
  return num * 8;
}
console.log(minusMy(20));

//understanding a undefined value returned from a function
var sum = 50;
function addFive() {
  sum += 5;
}
console.log(addFive());
console.log(sum);
// assignment with a return variable
var changed = 85;
function change(num) {
  return (num * 5) / 3;
}
changed = change(20);
console.log(changed);
//stand in line
function nextInLine(arrays, items) {
  arrays.push(items);
  return arrays.shift();
}

var testArrays = [1, 2, 3, 4, 5];
console.log("Before:" + JSON.stringify(testArrays));
console.log(nextInLine(testArrays, 6));
console.log("after:" + JSON.stringify(testArrays));
// tryinf stand in line again
function standInLine(arr, num) {
  arr.push(num);
  return arr.unshift();
}
var testArr = [
  "i love you now",
  "you are too much",
  "unsolicited",
  "adivices",
  9,
  10,
  30,
];
console.log("Before:" + JSON.stringify(testArr));
console.log(standInLine(testArr, 10));
console.log("after:" + JSON.stringify(testArr));
//booleans  value
function welcomeToBooleans() {
  return false;
}
//if statement
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "yes, it is true";
  }
  return "no, it is false";
}
console.log(ourTrueOrFalse(false));
//comparism with equality operator
function testEqual(val) {
  if (val == 12) {
    return "Equal";
  }
  return "Not equal";
}
console.log(testEqual(12));
// comparism with the strict equality operator
function testEqual(fal) {
  if (fal === 12) {
    return "Equal";
  }
  return "Not equal";
}
console.log(testEqual("12"));
//comparing differrent values
function comparism(a, b) {
  if (a == b) {
    return "Equal";
  }
  return "Not equal";
}

console.log(comparism(10, "10"));
//comparism with inequality operator
function testNotEqual(val) {
  if (val != 10) {
    return "Not equal";
  }
  return " equal";
}
console.log(testNotEqual(13));

function testStrictNotEqual(val) {
  if (val !== 10) {
    return "Not equal";
  }
  return " equal";
}
console.log(testStrictNotEqual("10"));
//comparism with logic and operator
function testGreaterThan(val) {
  if (val > 100) {
    return "over";
  }
  if (val > 10) {
    return "under";
  }
}
console.log(testGreaterThan(73));
//comparism with equal than or equal to operator
function testGreaterThanF(val) {
  if (val >= 100) {
    return " 100 or over";
  }
  if (val <= 100) {
    return "less than 100";
  }
}
console.log(testGreaterThanF(102));
//comparism with logic and operator
function testLogical(val) {
  if (val <= 50 && val > 25) {
    return "true";
  }
  return "false";
}

console.log(testLogical(30));

//comparism logic or operator
function testLogicOr(val) {
  if (val < 10 || val > 100) {
    return "inside";
  }
  return "outside";
}

console.log(testLogicOr(99));
//else statement
function testElse(val) {
  var result = "";
  if (val > 5) {
    result = "bigger than 5";
  } else {
    result = "smaller than 5";
  }
  return result;
}
console.log(testElse(0));

//else statement are used for 3 quotes
function testElseIf(val) {
  if (val > 10) {
    return "greater than 10";
  } else if (val < 5) {
    return "lesser than 5";
  } else {
    return "between 5 and 10";
  }
}

console.log(testElseIf(9));
//logical order in if statemen from the lowest tonthe highest below is not relevant
function logicalOrder(val) {
  if (val < 5) {
    return "less than 5";
  } else if (val < 10) {
    return "lesser than 10";
  } else {
    return "greater than or equal to 10";
  }
}
console.log(logicalOrder(12));
//chaining if else statement
function testSize(val) {
  if (val < 5) {
    return "tiny";
  } else if (val < 10) {
    return "small";
  } else if (val < 15) {
    return "medium";
  } else if (val < 20) {
    return "large";
  } else {
    return "huge";
  }
}
console.log(testSize(25));
//golf code
var names = [
  "hole in one!",
  "eagel",
  "birdie",
  "par",
  "boggie",
  "double boggie",
  "go home",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
}
console.log(golfScore(8, 11));
// switch  statemment
function caseInSwitch(val) {
  var myAnswer = "";
  switch (val) {
    case 1:
      myAnswer = "alpha";
      break;
    case 2:
      myAnswer = "beta";
      break;
    case 3:
      myAnswer = "gamma";
      break;
    case 4:
      myAnswer = "delta";
      break;
  }

  return myAnswer;
}
console.log(caseInSwitch(2));
// default options in switch statements
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "baby";
      break;
    case "c":
      answer = "cat";
      break;
    case "d":
      answer = "dog";
      break;
    default:
      answer = "bold";
      break;
  }
  return answer;
}
console.log(switchOfStuff(2));
// multiple identical options in switch statements
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "low";
      break;
      case 4:
        case 5:
        case 6:
          answer = "mid";
          break;
          case 7:
        case 8:
        case 9:
          answer = "high";
          break;
    }
  return answer;
}
console.log(sequentialSizes(7));
//replacing  if else chain with switch
function chainToSwitch(val){
    var answer = '' 
    switch (val) {
        case 'bob': answer = 'marley';
            break;
            case 1: answer =' there is no #1';
            break;
            case 42: answer = ' the answer';
            break;
            case 99: answer = 'missed me by this much';
            break;
            case 7: answer = 'ate nine';
            break;
    
    
        default: answer ="all of my life";
            break;
    }
    return answer;
}
console.log(chainToSwitch(34))
//returning boolean values from functions
function isLess (a,b){
    if(a>b) {
        return true;
    } else{ return false;}
}
console.log(isLess(10,15))
//returning of boolean
function isLess1 (a,b){
    return a<b
}
console.log(isLess1(10, 15))
// returning early pattern  from functions
 function abTest( a,b){
     if (a<0||b<0){ return undefined;}
     return Math.round(Math.pow(Math.sqrt(a)+ Math.sqrt(b),2));
 }
 console.log(abTest(5,3));
 //counting cards
  var count = 0;
  function cc ( card){
switch (card) {
    case 2:
        case 3:
            case 4:
                case 5:
                    case 6:
                        count++;
                        break;
                        case 10:
                            case 'J':
                                case 'Q':
                                    case 'K':
                                        case 'A':
                                            count--;
                                break;}
                                var holdbet = "hold"
                                if (count > 0){ holdbet="bet";}
                                return count + ' ' + holdbet
}
  cc(2); cc(3); cc(10); cc('J'); cc('A');
  console.log(cc(10));
  //build javascript objects
   var ourDog = {
       'name':'quincy',
       "legs":  4,
       "tails": 1,
       "friends":['everything!']
   };
   console.log(ourDog);
   // accessing object properties with dot notation
   var textObj ={'name':'quincy',
   "legs":  4,
   "tails": 1,

   };

 var  nameValue = ourDog.name;
 var  legsValue = ourDog.legs;

 //acessing object properties  with bracket notation
 var ourDog = {
    'name of':'quincy',
    "legs to":  4,
    "tails": 1,}
var nameValue = ourDog['name of'];
var legsValue = ourDog['legs to'];
// accessing object properties with variables
var ourDog = {
    1:'quincy',
    2:  "naman",
    3:   'loddy'};
var playerNumber= 2;
var player = ourDog [playerNumber];
//updating object property
var ourDog = {
    'name':'quincy',
    "legs":  4,
    "tails": 1,
    "friends":['everything!']
};
ourDog.name = ['happy quincy'];
console.log(ourDog.name);
//add a new property to an object
var ourDog = {
    'name':'quincy',
    "legs":  4,
    "tails": 1,
    "friends":['everything!']
};
ourDog.bark= 'bow-wow';
console.log(ourDog.bark);
var ourDog = {
    'name':'quincy',
    "legs":  4,
    "tails": 1,
    "friends":['everything!']
};
ourDog['laugh'] = 'woof';
console.log(ourDog['laugh']);
console.log (ourDog);
//delete properties from object
delete ourDog.tails;
console.log(ourDog)
//using objects for lookups
function lookupsFor(val)
{
    var result ='';
    var lookUp ={
        'alpha': 'adams',
        'bravo':'boston',
        'charlie': 'chicago',
        'delta':'denver',
        'echo': 'easy',
        'froxtrot': 'frank'
    }
result = lookUp[val];
return result;
}
console.log(lookupsFor('alpha'))
//testing object for properties
 var myObject={
     'gift': 'pony',
     'pet':'kitten',
     'bed': 'sliegh',
 };
 function checkObject(checkProp){
     if( myObject.hasOwnProperty(checkProp)){
         return myObject[checkProp];
     } else{ return 'Not found'}
 }
 console.log(checkObject('hello'))
 //manipulatinfg complex object
 var myMusic =[
     {
         'artist': 'nobel igwe',
         'title': 'paino man',
         'release year': 1995,
         'formats':[
             'cd',
             '8t',
             'lp',],
         'gold':'true',
     },{'artist': 'pasuma',
     'title': 'ligaligali',
     'release-year': 2003,
     'formats':[
         'youtube',
         'instagram',
         'boomplay',]}
 ];
 
 var releaseYear=1995
 console.log(releaseYear);

 var music ={
     'car':{
         'inside':{
             'glove box': "maps", 
             'passenger seats':'crumbs',
         },
         'outside':{
             'trunk': 'jack'
     }}
 };
    var gloveBoxContents =  music.car.inside['glove box'];
    console.log(gloveBoxContents);
    //acessing nexted arrays
    var myFlower=[
        {
            'type': 'flowers',
            'list':[
                'rose',
                'tulip',
                'dandeelion',
            ]
        },{
        'type': 'flowers',
            'list':[
                'fin',
                'pine',
                'birch',]},
    ]
    var flowers = myFlower[1].list[2];
    console.log(flowers)
    //record collection
    
    

    var collection ={
        '2346':{
            'album':'slipery when wet',
            'artist':'obesere',
            'track':[
                '1999',
                 'little red corvette'
            ]
        },
        '1523':{
            'album':'slipery when wet',
            'artist':'obesere',
            'track':[
                '1999',
                 'little red corvette'
            ]
        },
         '1934':{
             'artist': 'wahalata',
             'tracks':[]
         },
         '5043':{
             'album': 'alba gold',
         }

    }; 
 //Making a copy of the  record

 var collectionCopy = JSON.parse(JSON.stringify(collection));
 
 // create a function for updating records

 
 function updateRecord(id, prop, value){
     if(value ==="") {delete collection[id][prop]; } else if( prop ==='track')
     { collection[id][prop] =collection[id][prop] ||[]; collection [id][prop].push(value)} 
     else{collection[id][prop]=(value)};
    return collection };
    
    
    console.log(updateRecord( '5043', 'track', 'youtube'));
    //iterate with loops
    var myFullArray=[];
    var i =(0);
    while (i<8) {myFullArray.push(i);
      i++;
      
    }
    
     console.log(myFullArray);

 //iterate with afor loops

var yourArray=[];
    
    for(var i = 0;i<5; i++){
      yourArray.push(i);
    }
     console.log(yourArray);
     //iterate even numbers

 var yourArray=[];
    
    for(var i = 0;i<10; i+=2){
      yourArray.push(i);
    }
     console.log(yourArray);
     //iterate odd numebrs
     var yourArray=[];
    
    for(var i = 1;i<10; i+=2){
      yourArray.push(i);
    }
     console.log(yourArray);
     //count backwords with  afor loops
     var yourArray=[];
    
    for(var i = 10; i>0; i-=1){
      yourArray.push(i);
    }
     console.log(yourArray);
     //iterate through an array with  a for loop
     var yourArray=[ 10, 10, 10,20];
      var yourTotal = 0;
    
     for(var i = 0;i<yourArray.length; i++){
       yourTotal+= yourArray[i];
     }
      console.log(yourTotal); 
      //trying it myself
      var yourArray =[ 50, 50, 100];
      var yourTotal =0;
      for( var m =0; m<yourArray.length; m++) {
        yourTotal+=yourArray[m]
      }
      console.log(yourTotal);
      //nesting for loop
      function multiplyAll(arrays){
        var product =1;
        for(var i =0; i<arrays.length;i++){
          for(var j =0; j< arrays[i].length;j++){
            product *= arrays[i][j];
          }
        }
        return product
      }
      var product = multiplyAll([[1,2],[3,4],[5,6,7]]);
      console.log(product)
      //iterate with do.... while loops
      var myArr =[];
      var i =10;
      do{
        myArr.push(i);
        i++
      }while(i<5)
      console.log(i, myArr)
      //profile lookup
      var contacts=[
        {
          'firstName': 'abosede',
          'lastName': 'afolabi',
          'numbers': 09045453028,
          'likes':['pizza','coding', 'swimming',]
        },
        {
          'firstName': 'isaiah',
          'lastName': 'onodipe',
          'numbers': 0904542010,
          'likes':['efo','football', 'tennis',]
        },
        {
          'firstName': 'taiwo',
          'lastName': 'lasile',
          'numbers': 09045452080,
          'likes':['eba','math', 'dancing',]
        },
        {
          'firstName': 'joe',
          'lastName': 'anifowoshie',
          'numbers': 'unknown',
          'likes':['garri','reading', 'singing',]
        },
      ]
      function lookUpProfile(name, prop){
for(var i=0; i<contacts.length; i++){
  if(contacts[i].firstName=== name){
    return contacts[i][prop]|| 'No such property'; }
}
return 'No such contact'
      }
      var data = lookUpProfile('kay', 'likes');
      console.log(data)

      //create random fractions
       function randomFunction() {
         return Math.random();
       }
       console.log(randomFunction ());
       //generate whole random numbers
 var  randomNumberBetween0and19 = Math.floor( Math.random() *20);
       function randomWholeNumber() {
        return  Math.floor(Math.random()*20);
      }
      console.log(randomWholeNumber ());
      //generate random numbers within a range
      function ourRandomRange(ourMin, ourMax){
        return Math.floor(Math.random()*(ourMax-ourMin+1)) + ourMin
      }
      var myRandom = ourRandomRange(1,15);
      console.log(myRandom)
      //use the parseINT function
      function convertToInterger(str){
        return parseInt(str);
      }
      console.log(convertToInterger('200'))
      //use the parseInt function with a redix
      function convertToInterge(str){
        return parseInt(str,2);
      }
      console.log(convertToInterge('1000100001'))
      //use the conditional (ternary) operator
      function checkOut(a,b){
        return a===b? true:false;
      }
console.log(checkOut(10,10))
//using multiple ternary operator
function checkSign(num1){
  return num1>0? 'positive':num1<0?'negative':'zero';
}
console.log(checkSign(0)) 
//differences between the var and the let keyword
//we use let when we dont wanna replicatr variables
//we also use let when we want the function to only be inthe block scope
function checkScope(){
  "use strict";
  let i ='function scope';
  if(true){
    let i ='block scope';
    console.log("block scope is:i", i);
  }
  console.log("function scope is:i", i)
return i;
 
}
checkScope();
//declare a read only varaible with const keyword
// when you describe a variable with a const, you cant not reassign it after.... 
//when using const it is commmon to use all captital letter\
//you  mostly use const and let
//mutate an array declared with a cons

const s=[1,3,5];
function edit(){
  s[0]=1;
  s[1]=2;
  s[2]=5;
  
}
edit();
console.log(s);
//prevent object mutation
function objFreeze(){
  "use strict"
  const Math_CONSTANTS={
    PI:3.14
  };
  Object.freeze(Math_CONSTANTS)
   try {
     Math_CONSTANTS.PI =99;
   } catch(ex) {
     console.log(ex);
   } return Math_CONSTANTS.PI;
}
const PI = objFreeze();
console.log(PI);
// use arrow functions to write concise anonynmous functions
/* var magic=function(){
  return new date();
}
same as below*/
const magic =()=>
  new Date();

//writtong arrow functions with parameters
let myDoll =( arr1, arr2)=>arr1.concat(arr2);
console.log(myDoll([1,2],[3,4,5]));
//writting higher order arrow functions
 const realNumbers=[4, 2.6, 7.8, 16, 4, -2, .45, 5]
const squareList =(arr) =>{
  const squareInterger =arr.filter(num=>Number.isInteger(num)&& num>0).map(x=>x*x)
  return squareInterger
} 
const squareInterger= squareList(realNumbers);
console.log(squareInterger)

//write higher order arrow function 
const increment = (function() {


 return function increament (number, value=5) {
   return number+value

 };
}  )();
console.log(increment(5,));
console.log(increment(4,))
//use the rest operator with function parameter
const add = (function() {
return function add(...arg) {
    
    return arg.reduce((a,b) => a + b, 0);
 
  };
 }  )();
 console.log(add(1,2,6,19));
 //using the rest operator to evaluate arrays in-palce
  const arr3 =['JAN', 'FEB', 'MAR', 'APR', 'MAY',];
 let arr4 ; (function(){
    arr4 =[...arr3];
    arr3[0] ='pot'
  })();
  console.log(arr4)
  //use destructing assignment to assign variables from objects
   const AVG_TEM ={
     "yesterday":77.5,
  'today': 45,
  'tomorrow':44,
   };
    function getTemp(averageTem){
      const {tomorrow:tempOfTomm} =averageTem;
      return tempOfTomm;
    }
    console.log(getTemp(AVG_TEM))
    //destructing assignment with nested object
    const local = {
      today:{min:75, max:550},
      tomorrow: {min:40, max:273},
    }
    function getMax(forcast){
      const { tomorrow:{max:newForcast}} = forcast;
      return newForcast
    };
    console.log(getMax(local));
    //use destructing assignment to assign varriables from array
    const [a, ,,,,b]=[1,2,3,4,5,6,7,8,9,]
    console.log(a,b)
    let d=8, f=9;
    (() => {
      "use strict";
      [d,f] =[f,d]
    })();
    console.log(d);
    console.log(f);
    //use destructing assignment with the rest operator
     const source =[1,2,3,4,5,6,7,8,9,0]
     function removeTwo(list){
       const [,,...arr] =list;
       return arr;
     }
     const arr = removeTwo(source)
console.log(arr);
console.log(source);
// use destructing assignment to pass an object as a functions as a parameters
const stats={
  max:56.78,
  standard_deviation:4.34,
  medain:34.54,
  mode:23.45,
  min:-0.75,
  average:34.77
};
const half=(function(){
  return function half({max,min}){
    return (max+min)/2.0;
  };

})();

console.log(stats);
console.log(half(stats));
//create a string using template literals
const person={
  love:'afolabi',
  hate:12,
};
function makeList(arr){
const personDisplay =[];
for (let i =0; i<arr.length; i++){
  personDisplay.push(`my name is ${person.love}`)
} return personDisplay
};
 const personDisplay=makeList(person.love);
console.log(personDisplay);
//write concise object literal declaration using simple feilds
 const createPerson =(name, age, gender)=>{
   return{
   na:name,
   ag:age,
   gender:gender,};

 };

console.log(createPerson("joeseph", 45, "male"))
//or
const createLove =(name, age, gender)=>({name, age, gender});
console.log(createLove("joeseph", 45, "male"))
//write concise declarative functions
const bicycle= {
  gear:2,
  spear(newGear){
    "use strict";
    this.gear=newGear
  }
};
bicycle.spear(3);
console.log(bicycle.gear);
//use class syntax to define a constructor function

class space{constructor(planet){
  
  this.planet= planet;
}
}

var bose = new space('jupiter')
 console.log(bose.planet)
 function makeClass(){
   class vegetable {constructor(name){
   this.name =name
 }} return vegetable}
 const vegetable=makeClass()
 const carrot = new vegetable ('bannana');
 console.log(carrot.name)
 //using gutters and setters to control acess to an object
 function makeA(){
   class thermostart{
     constructor(temp){
       this.temp=5/9
       *(temp-32);
     }
     get temperature(){
       return this._temp
      }
      set temperature(updatedTemp){
        this._temp= updatedTemp
      }
   } return thermostart

 }

 const thermostart = makeA();
 const thermos = new thermostart(76);
 let temp =thermos.temperature;
 thermos.temperature =26
 temp=thermos.temperature
 console.log(temp)
  //understanding the difference btwn import and require
  // import * as the file and where it is imported from cottation mark
  // export default/ export
  //import a default export
  //global enviroment, excution enviroment, lexical enviroment.
 
  function r(){
    console.log(vVar);
  }
  function e(){
    r();
    var vVar=3
  }
 var vVar=1
e()
 function j(){
   function k(){ console.log(vVar);}
   var  vVar=5;
   k()
 }
 var vVar=1;
 j()
 function newFunction(p1,p2){

  return p1*p2;
   
 } 

console.log(newFunction(7,3));
  let x =com(40,40);
  function com(a,b){
    return a+b;
  }
  console.log(x)
   function fam(f){
     return (5/9)*(f-32)

   }
    console.log(fam(77))
     const babyName ={
       firstName:'bose',
       lastName:'afolabi',
       eyeColor:'blue',
       age:50,
       fullName:function(){ return this.firstName+ '' +this.lastName}

     }
     console.log( babyName.fullName())
      const  babyFace={
        firstName:' tope  ',
        lastName:'orotayo',
        age:34,
        country:' nigeria '
      }
      console.log(babyFace.country + "" + babyFace.firstName)
      
      const varcc = document.getElementById('demo1');
      varcc.onclick =function(){
        this.innerHTML=Date()
        
      }
      // object can not be compared or duplicated
       let y =   new String('bose');
       let w = new String('bose');
       console.log(y==w)
       //trying out slice () in string
       let v = 'boy, apple, sweeet,coconut, mango';
    //string methods
   console.log(v.slice(4, 19))
   let h =[1,2,3,4,5,6,7,8,9,10,]
   console.log(h.slice(1,10))
   let lwm =[1,2,3,4,5,6,7,8,9,10,];
   console.log(lwm.slice(-5))
   let hnm ='bose,abosede,afolabi,rachael';
   let newHnm =hnm.replace('abosede', 'oluwagbemiga');
   console.log(newHnm)
    let text1 =' bose ';
    let text2 =' afolabi '
    let text3 = text1.concat('', text2)
    console.log(text3)
    let ess='Hello world!';
    console.log(ess.charAt(8))
    //case sensitive
    let ese='Hfolabi';
    console.log(ese.charCodeAt(0))
    //using strinf.split
    let text5 = 'helloworld';
    const text7 = text5.split("  ")
    text5 ='';
      for (let i= 0; i < text7.length; i++) {
        text5+= text7[i]; 
        
      }
    console.log(text5)
     let lak= "boy girl goat bean 'location' boli!" 
     lak= lak.lastIndexOf('goat', 10)
console.log(lak)
let lake= 'i love spain lain and aint gain';
console.log(lake.match(/ain/g))
let lake1= 'i, love, spAIN, lain, and, aint, gain';
console.log(lake1.match(/ain/gi))
console.log(lake1.includes('lain'))
console.log(lake1.startsWith('i'))
console.log(lake1.startsWith('gain',33))
 let hisName= ' lasile ';
 let herName=' abosede ';
 let theirName=`welcome ${hisName}${herName}`;
 console.log(theirName)
 let price=12;
 let vat =0.25;
 let total = `total:${(price*(1+vat)).toFixed(2)}`
 console.log(total)
 let em =0xff;
 console.log(em)
 let weNUmbers =40
  console.log (weNUmbers.toString(10));
  console.log(weNUmbers.toString(32));
  console.log(weNUmbers.toString(16));
 weNUmbers.toString(8);
 weNUmbers.toString(2);
  let yem = new Number (123);console.log(yem)
   let xem =123;
   console.log(xem.toString())
   console.log((123).toString())
   console.log((100+23).toString())
   let u = 3.55690;
   console.log(u.toExponential(0));
    let uem = 3.55690;
    console.log(uem.toFixed(3))
     let nem =123
     console.log(nem.valueOf())
     console.log((123*5).valueOf())
       console.log( Number(true))
        console.log(Number(new Date(1999-2021)))
         console.log( Number( new Date("1970-02-01")))
           let cen = Number.MAX_VALUE;
           console.log(cen)
 var ken =Number.MIN_VALUE;
 console.log(ken)
  const uen =Number.POSITIVE_INFINITY
  console.log(uen)
   let fruit =[' banana ',' mango ', ' carrot ', 'apple'];
   const fru = fruit
   fruit=""
for(i=0;i<fru.length;i++){
  fruit+= fru[i];
}
console.log(fruit.split())
let eso =['banna','mango','coconut','egg']
for(i=0; i<eso.length;i++){
  eso.push()
}
console.log(eso)
 let nar =[];
  for(i=1;i<10;i+=2){
    nar.push(i)
  }
  console.log(nar)
   let bon =['bose', 'bunmi', 'kola',]
    console.log(Array.isArray(bon))
     console.log(bon instanceof Array);
     // splice method
      const fruits1= ['mango','apple', 'banana']
      function demFunction(){
        fruits1.splice(2,0,'kiwi','lemon')
      }
       demFunction();
       console.log(fruits1);
        //slicing
        const vrui= ['banana', 'bose','kemi','joe'];
const citrus = vrui.slice(1);
console.log(citrus);
 const lrui= ['banana', 'bose','kemi','joe'];
const litrus = lrui.slice(0,4);
console.log(litrus)
// sorting arrays
 let car2 =['bannaa', 'apple', 'carrot','dog', 'egg','fish'];
 console.log(car2.sort());
 console.log(car2.reverse());
 // numerical sort
 let nur =[1,200,40, 50, 60, 70 ,100, 500];
 nur.sort(function(a,b){return a-b});
 console.log(nur);
 let sur =[1,200,40, 50, 60, 70 ,100, 500];
 sur.sort(function(a,b){return b - a });
 console.log(sur);
  
  const likes=[1, 40, 50, 5, 10, 100]
  document.getElementById('demo2').innerHTML=likes;
 function myCis(){
   likes.sort(function(a,b){return 0.5-Math.random()}); document.getElementById('demo2').innerHTML=likes;}
 // the fisher yate method of getting random numbers
   const myLov1 = [1,30,20,40,10, 50, 70, 80, 100, 200];
    document.getElementById('demo3').innerHTML=myLov1;
      
    function myAn(){
       for (let i = myLov1.length -1; i > 0; i--){
          let j = Math.floor(Math.random()* i)
          let  k = myLov1[i]
          myLov1[i] =myLov1[j]
          myLov1 [j] =k
       }
        document.getElementById('demo3').innerHTML= myLov1;
     }  

     //getting the max /min value in an array
      const fish = [1,30, 50, 60, 200, 100, 70] 
    
      function myKol(arr){
        return Math.max.apply(null,arr);
    
      }
       console.log(myKol(fish))
       
       const ish = [1,30, 50, 60, 200, 100, 70] 
    
      function yKol(arr){
        return Math.min.apply(null,arr);
    
      }
       console.log(yKol(ish))
        const dol=[ 1, 4, 50, 30, 60];
        function myLo(arr){
        let  len =arr.length
        let max = -Infinity
         while( len--){
           if(arr[len] > max){ max = arr[len];
          }
         }
          return max;
        }
        console.log( myLo(dol))
        //sorting object array
         const vice = [
           {type: ' benz ', year:'2016'},
           
           {type: '   bmw   ', 
           year:'    2013    '},
           {type: ' volvo ', year:'2020'}
         ]
         displayedCar()
          function miceFunction(){
         vice.sort(function(a,b){ return a.year - b.year }); displayedCar();}
          function displayedCar(){
            document.getElementById('demo5').innerHTML =   
           vice[0].type +""+ vice[0].year    +  
           vice[1].type +""+ vice[1].year +
           vice[2].type +""+ vice[2].year;
        }
        const ars = [
          {type:"Volvo", year:2016},
          {type:"Saab", year:2001},
          {type:"BMW", year:2010}
        ];
        
        displayArs();
        
        function minFunction() {
          ars.sort(function(a, b){
            let x = a.type.toLowerCase();
            let y = b.type.toLowerCase();
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
          });
          displayArs();
        }
        
        function displayArs() {
          document.getElementById("demo6").innerHTML =
          ars[0].type + " " + ars[0].year  +
          ars[1].type + " " + ars[1].year  +
          ars[2].type + " " + ars[2].year;
        }