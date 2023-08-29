//-------------------------------------------------------------
//Interview 1
// You can use the console window at the bottom

//Create an array of sums at any index put sum of all element except that index element
// make an array which sum of all elem input array except index elem on input array
// const input = [2,7,11,4,-2];
// const output = [20,15,11,18,24];


// 1. input.map()
// 1.1 select the first element and if it is the elment of i then skip add the rest
// 1.2 push the sum into array
// 1.3 until the array is fully traversed repeat the process
// let Output2=[]
// for(let i=0;i<input.length;i++){
//     let sumElem = 0;
//     input.map((elem)=>{
//         if(elem!==input[i]){
//             sumElem+=elem;
//         }
//     })
//     Output2.push(sumElem);
// }
// console.log([...Output2]== [...output])

//----------------------------------------------------------------------
//Interview 2

// const input1 = {a:1,b:2,c:3,d:10,e:12};
// const input2 = {a:2, e:12,d:10};
// const output1 ={}
// for(const inp in input1 ){
//     if(input1[inp]==input2[inp]){
//         output1[inp]= input1[inp];
//     }
// }
// console.log(output1)

//-----------------------------------------------------------------
// Interview 2 question 2

//scond largest number in the array.
// const input = [1,2,-2,11,7,1]
// const output = 7
// const input1 = [1,4,7,2,4,7]
// const output2 = 4

// approach 1
// 1 take array
// 2 take another empty array
// 3 run a loop until array is sorted in ascemnding order
// 4 select the n-2 position of array

// approach 2
// 1 take array
// 2 run a loop in which find the biggest elemnt of array.
// 3 run another loop and in that loop check for smallest difference between elemnt and largest elemnt
// print the value

// function findSLargest(arg){
//     const largestElem = Math.max(...arg);
//     let i = 0;
//     let elem1 =largestElem - arg[0];
//     for(let j =1;j<arg.length;j++){
//         if(largestElem!==arg[j] && largestElem-arg[j]<elem1){
            
//             elem1 = largestElem-arg[j];
//             i = j; 
//         }
//     }
//     return arg[i];
// }
// console.log(findSLargest(input))
// console.log(findSLargest(input1))

//--------------------------------------------------
//Interview 2 Question 3

//rotate array by 2 places 

// const input = [2,7,11,4,-2];
// const output = [11,4,-2,2,7];

// function rotate2(arg,n){
//     let index = n
//     let argR =[]
//     argR.push(arg[index]);
//     for(let i=index+1;i<=arg.length-1;i++){
//         argR.push(arg[i]);
//     }
//     for(let i=0;i<index;i++){
//         argR.push(arg[i]);
//     }
//     return argR;
// }
// console.log(rotate2(input,2))
// console.log(rotate2(input,4))

//----------------------------------------------------------
//Interview 3 question 1

//Missing Odd Number.. assume array to be sorted
// const input = [5,7,9,11,15,21];
// const output = 13;

// function findMOdd(arg){
//     let a = []
//     for(let i=1;i<arg.length;i++){
//         if(arg[i]-2!==arg[i-1]){
//             a.push(arg[i]-2);
//         }
//     }
//     return a;
// }
// console.log(...findMOdd(input))

//-------------------------------------------------------

const arr = [5,-3,2,3,-4]
const k = 2;
let array = []

// for(let i=0;i<arr.length-1;i++){

//     for(let j=0;j<k;j++){
//         if(arr[i+j]<0){
//             array.push(arr[i+j])
//             break;
//         }
//         if(j==1){
//             array.push(0)
//         }
//     }
// }
// //approach 2
// let windowArr=[]
// for(let i=0;i<k;i++){
//     windowArr.push(arr[i])
// }
// let counter = 0;
// for(let i=0;i<arr.length;i++){
//     if(arr[i-counter]<0){
        
//     }
// }
// console.log(...array)

//Implementing closure

// function Parent(){
//     let a = 10;
//     return function Child(b){
//         console.log("sum is",a+b);
//     }
// }

// let Child1 = Parent();

// Child1(4);

//var vs let vs const

function test(){

    if(true){
        let a = 10;
    }
    console.log(a);
}
test();

const Promise = new Promise((resolve,reject)=>{
    if(true){
        resolve("Success");
    }
})
const async1 = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("a")
        },200)
    })
}
const async2 = () => {
    return new Promise((resolve)=>{
        if(true)
        {setTimeout(()=>{
            console.log("b")
        },200)}
    })
}



