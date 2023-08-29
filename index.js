//Chat Code 1
function delayValue(value, delay) {
    return new Promise((resolve) => setTimeout(() => {console.log(value); resolve(value)}, delay));
  }
  
  async function fetchData() {
    const data = await Promise.all([
      delayValue("One", 300),
      delayValue("Two", 200),
      delayValue("Three", 100)
    ]);
    return data;
  }
  
  fetchData().then((result) => {
    console.log(result);
  });

  // Chat Code 2

  // function* generatorFunction() {
  //   yield Promise.resolve(1);
  //   yield Promise.resolve(2);
  //   yield Promise.resolve(3);
  // }
  
  // async function process() {
  //   for await (const num of generatorFunction()) {
  //     console.log(num);
  //   }
  // }
  
  // process();

//Let Var & Const 
// Scope: a certain region where a variable can be recognised
//Variable Shadowing
//Code 1
// function test () {
//     let a = Hello;
//     if(true){
//         let a = "Hi";
//         console.log(a)
//     }
//     console.log(a);
// }
// test();

//Code 2

// function test(){
//     var a = "Hello";
//     let b = "Bye";

//     if(true){
//         let a = "Hi";
//         var b = "GoodBye";//Illegal shadowing
//         console.log(a);
//         console.log(b);
//     }
// }

//Declaration

const a =7; // give a value otherwise it wil give an error

//Hoisting: during creation phase javascript moves all the variable and function to top of your code.
//Javascript Execution Context: just after execution, there is two phases
//1st Creation Phase: Three things happen: 1st Global or window object created & 2nd it setups the memory heap for storing variable and function references & it assigns all of the variables with undefned
//2nd Execution Phase : during this, it executes every code line by line, it assigns value and executes the function calls & every function executed javascropt creates a new execution context.
//var: it will be hoisetd and can be accesed before initialization and value will undeined
//let:it will be hoisetd and can't be accesed before initialization
//const: reference error in both let and const

//temporal dead zone: 

// function abc(){
//     console.log(a,b,c);

//     const c = 10
//     let b = 5
//     var a = 8;
// }
// Event Propagation Capturing(true) and bubling
let div = document.querySelector('div');
let button = document.querySelector('button');
div.addEventListener('click',(e)=>{
  console.log('div');
  console.log(e);
},true)
button.addEventListener('click',()=>{
  console.log('button');
})
//Polyfills for map filter reduce
// map polyfill
Array.prototype.map2=function(cb){
  let temp=[];
  for(let i=0;i<this.length;i++){
    temp[i]=cb(this[i],i,this)
  }
  return temp;
}
//filter polyfill
Array.prototype.filter2 = function(cb){
  let temp =[];
  for(let i=0;i<this.length;i++){
    let a = cb(this[i],i,this)
    if(a){
      temp.push(this[i]);
    }
  }
  return temp;
}
//reduce polyfill
Array.prototype.reduce2 = function(cb,acc){
  for(let i=0;i<this.length;i++){
    if(acc===undefined) {acc=this[i];++i;}
    acc = cb(acc,this[i],i,this);
  }
  return acc;
}
let arr = [1,2,3,4];

let arr2 = arr.reduce2((acc,elem)=>{
  return acc + elem;
})

console.log(arr2);

// questions 6 : return total marks for students with marks greater than 60 
//              after 20marks have been added to those who scored less than 60

let students =[
  {name:"Piyush", rollNumber:31, marks:80},
  {name:"Jenny", rollNumber:15, marks:69},
  {name:"Kaushal", rollNumber:16, marks:35},
  {name:"Dilpreet", rollNumber:7, marks:55},
]

let tutArray = students.map((student)=>{
  if(student.marks<60){
    student.marks+=20;
  }
  return student;
}).filter((student)=> student.marks>60);
console.log(tutArray)
let totalM = tutArray.reduce((acc,curr)=>{return acc+curr.marks},0);

console.log(totalM);

//Debounce and Throttling in Javascript
//question 1 : Create Debounce polyfill Implementation

// const debounceP = function MyDebounce (cb,delay) {
//   let timer;
//   return (...args) => {
//     timer = setTimeout(()=>{
//       cb.apply(this,args)
//     },delay);
//   }
// }
function debounce(func, delay) {
  let timer = null;

  return function() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.apply(this, arguments);
    }, delay);
  };
}


const cl = document.querySelector('.debounce');

// cl.addEventListener('keyup',(e)=>{
//   let inpT = e.target.value;
//   debounceP((e)=>{console.log()},800);
// })
cl.addEventListener("keyup", debounce((e) => {
  console.log(e.target.value)
}, 500)); // 500 milliseconds delay