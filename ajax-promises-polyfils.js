//promises in Javascript
//Synchronous vs Asynchronous

//Async Code
// Code 1
// console.log("Start")

// setTimeout(()=>{
//     console.log("Subscribe to Roadside Coder");

// },0)

// console.log("Finish");
// Output: Start Finish Subscribe to Roadside Coder (due to async setTimeout);

//Code2
// console.log("Start")
// function importantAction(username){
//     setTimeout(()=>{
//         return (`Subscribe to ${username} Coder`);

//     },0)
// }
// const message = importantAction("Roadside");
// console.log(message)
// console.log("Finish"); 
// Explanation: this code will print "Start undefined Finish" because message will store and execute the function as synchronous task.

//callbacks
//Code3
//  console.log("Start")
//  function importantAction(username, cb){
//      setTimeout(()=>{
//          cb (`Subscribe to ${username} Coder`);

//      },0)
//  }
//  const message = importantAction("Roadside", function (message){
//     console.log(message)
// });
// console.log("Finish"); 
// explanation : first it is we are making a call back function inside importantAction func and when the function is called first it is executing the main function going in waiting for the settimeout then it is executing the callback function.

//code 4

// console.log("start");
// function importantAction(username,cb){
//     setTimeout(()=>{
//         cb(`Subscribe to ${username}`)
//     },0)
// }

// function likeTheVideo(video,cb){
//     setTimeout(()=>{
//         cb(`like the ${video} video`)
//     },1000)
// }

// const message = importantAction("Roadside Coder", function(message){
//     console.log(message)
//     likeTheVideo("javascript Interview",function(message){
//         console.log(message)
//     })
// })

// console.log("Stop");
// explanation: in this code first important action will get called then like the video will be called

//Code 5

// console.log("start");
// function importantAction(username,cb){
//     setTimeout(()=>{
//         cb(`Subscribe to ${username}`)
//     },500)
// }

// function likeTheVideo(video,cb){
//     setTimeout(()=>{
//         cb(`like the ${video} video`)
//     },10)
// }

// importantAction("Roadside Coder", function(message){
//     console.log(message)
// })
// likeTheVideo("javascript Interview",function(message){
//     console.log(message)
// })

// console.log("Stop");
// explanation: in this code first function with lower milisec will execute first.

//Code 6


// console.log("start");
// function importantAction(username,cb){
//     setTimeout(()=>{
//         cb(`Subscribe to ${username}`)
//     },1000)
// }

// function shareThevideo(video,cb){
//     setTimeout(()=>{
//         cb(`Share the ${video} video`)
//     },500)
// }

// function likeTheVideo(video,cb){
//     setTimeout(()=>{
//         cb(`like the ${video} video`)
//     },100)
// }

// const message = importantAction("Roadside Coder", function(message){
//     console.log(message)
//     likeTheVideo("javascript Interview",function(message){
//         console.log(message)
//         shareThevideo("javascript Interview",function(message){
//             console.log(message)
//              shareThevideo("javascript Interview",function(message){
//             console.log(message)
//         })
//         })
//     })
// })

// console.log("Stop");
// Explaniation : No matter what is the time function will execute in order of calling. And This type of calling also known as pyramid of doom or callback hell.
//Solution for this problem is Promises

//Promises
//Code 7
// console.log("start")

// const sub = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         const result = false;
//         if(result) resolve ('Subscribed to Roadside Coder')
//         else reject (new Error("Why aren't you subscribed to roadeside coder?"))
//     },2000)
// })
// sub.then((res)=>{
//     console.log(res)
// }).catch((rej)=>{
//     console.log(rej)
// })
// console.log("Stop")
// explanation: Promises are made by creating object of promise with two parameters resolve and reject and for calling we use object name with .then and .catch in this argument pass callback. if you print promise it will print object with state and output which if it is pending it will show undefined

//code 8

// console.log("Start");
// const sub = Promise.resolve("subscribe to roadside coder")
// console.log(Promise.resolve("subscribe to roadside coder"));
// //console.log(sub)

// sub.then((res)=>console.log(res))
// console.log("Stop")
// explanation: it works because promise is directly resolved and it prints fulfilled. Now is it synch or async? if add .then it will show its async nature. so it is async

//code 10
//converting above callback hell code 6 into promise


// console.log("start");
// function importantAction(username){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(`Subscribe to ${username}`)
//         },1000)
//     }) 
// }

// function shareThevideo(video){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`Share the ${video} video`)
//         },50)
//     }) 
    
// }

// function likeTheVideo(video){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(`like the ${video} video`);
//         },100)
//     })
    
// }

// //first approaach which again becomes callback hell like structure
// // importantAction("Roadeside coder")
// // .then(res=>{
// //     console.log(res)
// //     likeTheVideo("javascript interview")
// //     .then(res=>{
// //         console.log(res);
// //         shareThevideo("javascript interview")
// //         .then(res=>{
// //             console.log(res)
// //             likeTheVideo("javascript interview")
// //             .then(res=>{
// //                 console.log(res);
// //                 shareThevideo("javascript interview")
// //                 .then(res=>{
// //                     console.log(res)
// //                 }).catch(err=>console.log(err))
// //             }).catch(err=>console.log(err))
// //         }).catch(err=>console.log(err))
// //     }).catch(err=>console.log(err))
// // }).catch(err => console.log(err))
// // //Second approach
// // importantAction("Roadeside coder")
// // .then(res=>{
// //     console.log(res);
// //     return likeTheVideo("javascript interview")
// // }).then(res=>{
// //     console.log(res)
// //     return shareThevideo("javascript interview")
// // }).then(res=>{
// //     console.log(res);
// //     return importantAction("Roadeside coder")
// // }).then(res=>{
// //     console.log(res);
// //     return likeTheVideo("javascript interview")
// // }).then(res=>{
// //     console.log(res)
// //     return shareThevideo("javascript interview")
// // }).then(res=>{
// //     console.log(res)
// // })
// // .catch(err => console.log(err))

// // third appraoch(Promise Combinators)
// // 1. Promise.all: takes promises as array. if any one of the promise fails the whole .all will fails and .catch block will execute.

// // Promise.all([
// //     importantAction("roadeside coder"),
// //     likeTheVideo("javascript interview"),
// //     shareThevideo("Javascript Interview")
// // ]).then(res=>console.log(res))
// // .catch(err=>console.error("Error : promise",err))
// //2. Promise.race: it returns whoever promise returns first does not matter if promise is resolved or reject. 
// // Promise.race([
// //     importantAction("roadeside coder"),
// //     likeTheVideo("javascript interview"),
// //     shareThevideo("Javascript Interview")
// // ]).then(res=>console.log(res))
// // .catch(err=>console.error("Error : promise",err));

// // 3. Promise.allSettled: this combinator will get results of all promises as that have been given in promise.allSettled no matter if its resolved aor rejected.

// // Promise.allSettled([
// //     importantAction("roadeside coder"),
// //     likeTheVideo("javascript interview"),
// //     shareThevideo("Javascript Interview")
// // ]).then(res=>console.log(res))
// // .catch(err=>console.error("Error : promise",err));

// //4. Promise.any: this combinator will work like a promise.race but it will only get the result of first promise that has been resolved and ignores all the rest. if all the promises rejected then it give the error of promise aggregatorError

// // Promise.any([
// //     importantAction("roadeside coder"),
// //     likeTheVideo("javascript interview"),
// //     shareThevideo("Javascript Interview")
// // ]).then(res=>console.log(res))
// // .catch(err=>console.error("Error : promise",err));

// console.log("Stop");
// //explanation: above Code, to make function into promise return the body as new promise and return results as resolve and reject.Now with second approach, return function() in .then and then take result into next .then as callback. it is called promise chaining


// // Async/Await

// // working with same functions of promises

// //code 12
// const result = async () => {
//     try{
//     const message1 = await importantAction("roadside coder");
//     const message2 = await likeTheVideo("javascript interview");
//     const message3 = await shareThevideo("javascript interview");
//     console.log(message1,message2,message3);
//     } catch(error){ 
//         console.log("Promises failed",error)
//     }

// }
// result();

//output based questions
// Code 1
// console.log("start");

// const promise1 = new Promise ((resolve,reject)=>{
//     console.log(1);
//     resolve(2);
// });

// promise1.then(res=>{
//     console.log(res);
// });

// console.log("end");

//Output : start 1 end 2
//explation: when this code is initialised it is going to find all the synchronous code and now when promise1 is being created inside it console.log(1) is a synchronous code and it will get into result.

//code 2
// console.log("start");

// const promise1 = new Promise ((resolve,reject)=>{
//     console.log(1);
//     resolve(2);
//     console.log(3);
// });

// promise1.then(res=>{
//     console.log(res);
// });

// console.log("end");

//output: start 1 3 end 2
// same explation as above, console.log(3) will be trated as synchronous code.

//code 3

// console.log("start");

// const promise1 = new Promise ((resolve,reject)=>{
//     console.log(1);
//     //resolve(2);
//     console.log(3);
// });

// promise1.then(res=>{
//     console.log(res);
// });

// console.log("end");
//explanation: if no resolve or reject then .then or .catch will not work or not go inside the .then block

//code 3

// console.log("start");

// const fn = () => 
//     new Promise((resolve,reject) => {
//         console.log(1);
//         resolve("success")
//     });

// console.log("middle");

// fn().then(res=>{
//     console.log(res)
// });

// console.log("end");

//output: start middle 1 end success
// explanation same as above but console.log will be activated only when function fn is called. 

//code 4

// function job () {
//     return new Promise(function (resolve, reject){
//         reject();
//     })
// }

// let promise = job();

// promise
// .then(function(){
//     console.log("success 1")
// })
// .then(function(){
//     console.log("success 2")
// })
// .then(function(){
//     console.log("success 3")
// })
// .catch(function(){
//     console.log("Error 1")
// })

// .then(function(){
//     console.log("success 4")

// });
//output : Error 1 success 4

//explanation: it is rejected promise so, it will only go to first .catch and after that any .then will be executed will be executed whether 2or3.

//code 5

// function job (state) {
//     return new Promise(function (resolve, reject){
//         if(state){
//             resolve("success")
//         }else{
//             reject("error")
//         }
//     })
// }

// let promise = job(true);

// promise
// .then(function(data){
//     console.log(data)
//     return job(false);
// })
// .catch(function(data){
//     console.log(data)
//     return "error caught";
// })
// .then(function(data){
//     console.log(data)
//     return job(true);
// })
// .catch(function (error){
//     console.log(error);
// });

//Output: success error error caught
// same as above explanation, first it will go to .then after that there is it returns job(false) that will reject the promise and it will go to catch block after that returns Error caught and due to its a string this will go to .then. 

// code 5

 


