// Asynchronous & Synchronous

import { call } from "function-bind"
import { forEach } from "neo-async"

// Synchronous way 
// Synchronous in Javascript refers to the execution of a program code in a blocking manner
// It's give output via mantaining sequence
// In this way when printing any result it wil print one by one, if some command takes time the execution will be wait for it.
// Example
// console.log('Hello 01')
// console.log('Hello 02')
// console.log('Hello 03')
// console.log('Hello 04')
// console.log('Hello 05')

// // Proof with using setTimeout
// console.log('Hello Proof 01')
// console.log('Hello Proof 02')
// setTimeout(function(){ // 
//     console.log('Hello Proof 03')
// },3000)
// setTimeout(function(){ // 
//     console.log('Hello Proof 03')
// },0)
// setTimeout(function(){ // 
//     console.log('Hello Proof 03')
// },3000)

// console.log('Hello Proof 04')
// console.log('Hello Proof 05')

// ==================== AJAX
// const xhr = new XMLHttpRequest()
// xhr.open('get','https://jsonplaceholder.typicode.com/posts')
// xhr.onreadystatechange=function(e){
//     if(xhr.readyState===4){
//         if(xhr.status===200){
//             let responce = JSON.parse(xhr.response)
//             console.log(responce)
//         }else{
//             console.log(xhr.status)
//         }
//     }
   
// }
// xhr.send()

// ==================== AJAX call with callback
// function getRequest(url, callback){
//     const xhr = new XMLHttpRequest()
//     xhr.open('get',url)
//     xhr.onreadystatechange = function(e){
//         if(xhr.readyState===4){
//             if(xhr.status===200){
//                 let response = JSON.parse(xhr.response)
//                 callback(null, response)
//             }else{
//                 callback(xhr.status, null)
//             }
//         }
//     }
//     xhr.send()
// }

// getRequest('https://jsonplaceholder.typicode.com/posts',(err, res)=>{
//     if(err){
//         console.log(err)
//     }else{
//        res.forEach(data => console.log(`#${data.id}. ${data.title}`))
//     //    console.log(res)
//     }
// })

// getRequest('https://jsonplaceholder.typicode.com/posts/1/comments',(err, res)=>{
//     if(err){
//         console.log(err)
//     }else{
//        res.forEach(data => console.log(`#${data.id}. ${data.name}`))
//     //    console.log(res)
//     }
// })