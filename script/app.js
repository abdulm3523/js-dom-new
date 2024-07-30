import { CompatSource } from "webpack-sources";
import "../style/style.css";
// // import './asyn'
// import './promis'
import './dom'

// // // javascript es6

// // // ================================================================
// // // string tempalte
// // // ================================================================


// // // note: we can write miltiple line in one string. also can define variable using {} braket. on the {} we can write single line condifion or any othe code
// // let age = 17
// // let myDetails = `My name is Abdul Malik. I'm ${age} years old`
// // console.log(myDetails)

// // // write single line condition on string
// // let checkAge = `My name is abdulmakik. i'm ${age <= 18 ? 'not ': ''}adult`

// // console.log(checkAge)


// // // checking the data is vailable or not on the string
// // console.log(myDetails.includes('Abdul Malik'))//true
// // // implementing start with method to check is the available at the begening of the staring or not
// // console.log(myDetails.startsWith('My'))//true
// // console.log(myDetails.startsWith('my'))//flase

// // // useing padStart method to add somthing at the begging of the string
// // console.log(myDetails.padStart(100,'a'))// to fill the string with 100 checkrecter it will add a multiple time at the bigining of the string
// // console.log(myDetails.padEnd(100,'a'))// to fill the string with 100 checkrecter it will add a multiple time at the end of the string

// // // ================================================================
// // // ====== FUNCTION FOR ES6
// // // ================================================================


// // // ARROW FUNCTION 
// // let fun = (a,b) =>{
// // return a+b
// // }
// // console.log(fun(30,45))

// // // for single line function
// // // in single line function thier is no need to return, the javascript engine automatically retutn the result for us
// // let fun2 = (a,b) => a+b
// // console.log(fun2(45,6))


// // let func = (argument)=>{
// //     console.log(`This is abdulMalik`)
// // }

// // func()

// // let func2 = () => console.log(`This is abdulMalik`)
// // func2()


// // // ================================================================
// // // FUNCTION THIS 
// // // ================================================================

// // // NORMAL FUNCTION & ARROW FUNCTION

// // let obj = {
// //     name:'abdul malik',
// //     outPut: function(){

// //         setTimeout(function(){
// //             // this is not defind for make it valid have to pass it from parent. currently
// //             console.log(`Hello, ${this.name}`)
// //         },1000)
// //     }
// // }
// // obj.outPut()


// // let obj3 = {
// //     name:'abdul malik',
// //     outPut: function(){
// //         const thisFind = this
// //         setTimeout(function(){
// //             // this is not defind for make it valid have to pass it from parent. currently it's window
// //             console.log(`Hello, ${thisFind.name}`)
// //         },1000)
// //     }
// // }
// // obj3.outPut()

// // let obj2 = {
// //     name:'abdul malik',
// //     outPut: function(){
// //         // const thisFind = this
// //         setTimeout(function(){
// //             console.log(`Hello, ${this.name}`)
// //         }.bind(this),1000)
// //     }
// // }
// // obj2.outPut()


// // // arrow function

// // let obj4 = {
// //     name:'abdul malik',
// //     outPut: function(){
// //         setTimeout(()=>{
// //             console.log(`Hello, ${this.name}`)
// //         },1000)
// //     }
// // }
// // obj4.outPut()



// // // ================================================================
// // // CUSTOM OBJECT ITERATABLE
// // // ================================================================

// // let obj = {
// //     num1:1,
// //     num9:9,
// //     [Symbol.iterator] : function(){
// //         let currentVal = this.num1
// //         const val = this
// //         return{
// //             next(){
// //                return{
// //                 done:currentVal> val.num9,
// //                 result: currentVal++
// //                }
// //             }
// //         }
// //     }

// // }

// // for(let i of obj){
// //     console.log(i)
// // }



// // let func = (a)=>{
// //     console.log(`hi`)
// //     return () =>{
// //        console.log(a)

// //         const fun = ()=>{
// //             console.log(a+a)
// //         }
// //         return fun()
// //     }
// // }
// // func(5)()


// ============== ITARETOR
// let arr = [1,2,3,4,5,6,7,8]
// let iterate = arr[Symbol.iterator]()

// for(let v of iterate){
//     console.log(v)
// }
// let str = 'Name'
// let itaretor2 = str[Symbol.iterator]()

// for(let val of itaretor2){
//     console.log(val)
// }

// const testObj = {
//  name: 'abdul',
//  age:23
// }
// const testArr = [1,2,3,4,5,6,7,8]

// // for(let v of testObj){
// //     console.log(v)
// // }

// // for(let v of testArr){
// //     console.log(v)
// // }



// generator==========
// function* gen(arrArg){
// for (let i = 0;i<arrArg.length;i++){
//     yield arrArg[i]
// }
// }

// const genVal = gen(testArr)
// console.log(genVal.next())
// console.log(genVal.next())
// console.log(genVal.next())
// console.log(genVal.next())
// console.log(genVal.next())


// SET=======
// SET CAN WORK WITH ARRAY
// SET DONT ALLOW SAME DATA MULTIPLE TIME IN ARRAY
// set make an new object from input array
// const arr = [3,4,5,6,7,8]
// const setTest = new Set(arr)

// // To add new data use add() method
// setTest.add(12)
// setTest.add(15)
// setTest.add(12)
// setTest.add(16)

// console.log(setTest)
// // to check data on the array object use has() method
// console.log(setTest.has(6))

// console.log(setTest.entries())
// console.log(setTest.values())
// console.log(setTest.keys())
// for(let v of setTest){
//     console.log(v)
// }


// ============== INHERITANCE
// class Common{
//     constructor(name,age,industry){
//         this.name = name
//         this.age = age
//         this.industry = industry

//     }
//     getResult(){
//         return `Name:- ${this.name} Age:- ${this.age} School Name:- ${this.industry} Subject:- ${this.subject}`
//     }
// }

// class Person extends Common{
//     constructor(name,age,industry,subject){
//         super(name,age,industry);
//         this.subject = subject
//     }

   
// }

// class Person2 extends Common{
//     constructor(name,age,industry,subject){
//         super(name,age,industry);
//         this.subject = subject
//     } 
// }




// const person1 = new Person('Abdul malik',25,'FDC', 'Science')
// const person2 = new Person2('Mohammad Alam',25,'FDC', 'Accounting')
// // console.log(person1.name)
// // console.log(person1.age)
// // console.log(person1.industry)
// // console.log(person1.subject)
// console.log(person1.getResult())
// console.log(person2.getResult())


// ============== Custom error build
// The Error is the global (resarv keywords)
// class CustomError extends Error{
//     constructor(msg){
//         super(msg)
//         if(Error.captureStackTrace){
//             Error.captureStackTrace(this,CustomError)
//         }
//     }
// }
// try{
//     console.log(`hello`)
//     throw new CustomError(`This is an error`)
// }catch(e){
//     // console.dir(e)
//     // console.log(e)
//     console.log(e.message)
// }