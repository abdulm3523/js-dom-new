// // PROMIS IN JAVASCRIPT

// const { forEach } = require("neo-async")

// // const { promises } = require("graceful-fs")
// // const { reject } = require("neo-async")
// // const resolve = require("resolve")

// // import { promises } from "graceful-fs";
// // import { reject } from "neo-async";
// // import resolve from "resolve";

// // function getResult(ifPassed){
// //     let promis = new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             if(ifPassed){
// //                 resolve('You are passed')

// //             }else{
// //                 reject('you are failed')
// //             }
// //         },3000)
// //     })

// //     return promis

// // }
// // getResult(true)
// // .then((res)=>{
// //     console.log(res)
// // })
// // .catch((err=>{
// //     console.log(err)
// // }))

// ///// get user data

// // function getResult(url){
// //     return new Promise((resolve, reject)=>{
// //         const xhr = new XMLHttpRequest()
// //         xhr.open(`get`,`${url}/users`)
    
// //         xhr.onreadystatechange = function(e){
// //             if(xhr.readyState ===4){
// //                 if(xhr.status===200){
// //                     const userDate = JSON.parse(xhr.response)
// //                     resolve(userDate)
// //                 }else{
// //                     reject( new Error('this is an error'))
// //                 }
// //             }
// //         }
// //         xhr.send()
// //     })
// // }
// // getResult('https://jsonplaceholder.typicode.com')
// // .then(data=>{
// //     return data.forEach(userNames=>{
// //         console.log(`Names:- ${userNames.name}`)
// //     })
// // })
// // .catch(error=>{
// //     console.log(error.message)
// // })

// // get comments 

// function getComments(url){
//     const result = new Promise((resolve, reject)=>{
//         const xhr = new XMLHttpRequest()
//         xhr.open('get',url)
//         xhr.onreadystatechange = function(e){
//             if(xhr.readyState === 4){
//                 if(xhr.status ===200){
//                     const userComments = JSON.parse(xhr.response)
//                     resolve(userComments)
//                     // console.log(userComments)
//                 }else{
//                     reject(new Error('Error Occured'))
//                 }
//             }
//         }
//         xhr.send()
//     })

//     return result
// }

// getComments('https://jsonplaceholder.typicode.com/comments')
// .then(userEmail=>{
//     userEmail.forEach(emailId =>{
//         console.log(`Email: ${emailId.email}`)
//     })
// }).catch(error=>{
//     console.log(error.message)
// })



// const aPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        if(true) {
//           resolve('I am here!');
//        } else {
//           reject('No! It is an error!');
//        }
//     }, 5000)
//  })

//  const promiseHandle = async() => {
//     const data = await aPromise;
//     console.log(data);
//  }
//  promiseHandle()