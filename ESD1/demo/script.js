//#region var
// Var ==> Hosited & Initialized With [undefined]
// console.log(x);//undefined
// var x = 10;
// console.log(x);//10
//#endregion

//#region let
// console.log(y);// Hoisted But Not Initialized [can not be Used Before Initialization]
// let y = 20;
// y = 50;
// y = "Hello"
// console.log(y);//20 ==> 50 ==> "Hello"
//#endregion

//#region without var-let-const
// console.log(z);//ReferenceError ==> z is not defined
// z = 50;//Not Hoisted
// console.log(z);//50 ==> interpreter ==> initialize = 50
// z = 10;
// console.log(z);//10
// z = "Hello";
// console.log(z);//Hello
//#endregion

//#region const
//const  ==>  Hoisted & Not Initialized [Cannot Access before Initialization]
// console.log(u);//Reference Error: 
// // const u ;
// const u = 10;
// // u = 50;
// console.log(u);//10
//#endregion

//#region for scope with var ==> let
// for(let i=0; i < 3; i++){
//     //Code
// }
// //var i at for has no scope ==> i=0; i=1; i=2; i=3;

// console.log(i);//3 ==> ReferenceError: i is not defined
//#endregion

//#region IIFE [Immediatly Invoked Function Expression]

// function Add(x,y){
//     console.log(x+y);
// }

// Add(5,10);//15

// var myFun = function(x,y){
//     console.log(x+y);
// }

// myFun(10,20);

// (function(x,y){console.log(x+y)})(5,10);//15

// (function(name){console.log("Hello ya "+name)})("Sara");
// (function(age){
//     console.log("Ur Age = "+age)
// })(30);

//#endregion

//#region Problem with var [Hoisting]
//[f, f, f] ==> arr = [];  for(){arr.push(f)}

//#region  let ==> True
// function ArrOfFunctions(){
//     var arr = [];
//     for(let i=0; i<3; i++){//i=3
//         arr.push( 
//             function(){console.log(i)}
//          );
//     }
//     return arr;
// }
//#endregion

//#region IIFE
// function ArrOfFunctions(){
//     var arr = [];
//     for(var i=0; i<3; i++){//i=3
//         arr.push(
//             (function(x){
//                 return function(){console.log(x)}
//             })(i)
//          );
//     }
//     return arr;
// }
//#endregion

// var Arr = ArrOfFunctions();
// console.log(Arr);//[f,f,f]
// // var myFun = Arr[2];
// Arr[0]();//3 ==> 0
// Arr[1]();//3 ==> 1
// Arr[2]();//3 ==> 2

//#endregion

//#region Closure
// function parent(x){//local x ==> closure(parent) x
//     return function inner(y){//local y ==> closure(inner) y
//         return function innerinner(z){//local z - closure(parent) x - closure(inner) y
//             return x+y+z;
//         }
//     }
// }

// console.log(parent(50)(20)(30));//100

// console.log(parent(50));//60 ==> f(){return x+y}
// var inner = parent(50);//x ==> x die
// //Code
// // console.log(inner(20));//70
// var innreinner = inner(20);

// console.log( innreinner(30) );//100

// console.log( parent(50)(20) )


//#endregion


//#region Create Property at Objectes

/**
 * var obj = {}; ==> obj.name ="" ; obj["age"]=0
 * var obj = {name:"", age:0}
 * var obj = new Object(); ==> obj.name ="" ; obj["age"]=0
 * function factory(name, age){ return {name:name, age:age} } ==> var f1 = factory(name, age);     f1.address = "23st"
 * function Ctor(name, age){ this.name = name; this.age = age; }
 */

// function factory(name, age){ 
//     return {name:name, age:age} 
// } 
// function Ctor(name, age){ 
//     this.name = name; 
//     this.age = age; 
// }
// var f1 = factory("Ahmed", 20);
// f1.address = "123st"

// var c1 = new Ctor("Ahmed", 22);
// c1.address = "456st"

// var obj = {name:"Ahmed", age:25, address:"789st"}

//1)ReAssign New Value
//2)Delete Property
//3)see at for loop

// console.log(f1.name)//"Ahmed"
// f1.name = "Aly";
// console.log(f1.name)//"Aly"

// delete f1.name;
// console.log(f1);//{age:20, address:"123st"}

// for(let key in f1){
//     console.log(key +": "+f1[key]);
// }


//Define Property With Features
// let obj = {};
// Object.defineProperty(obj,"name",{
//     value:"Ahmed",
//     writable:true,//default [false(can`t assign)]
//     configurable:true,//default [false(can`t delete)] 
//     enumerable:true//default [false(can`t loop)] 
// });

// Object.defineProperty(obj,"age",{value:0,writable:true});
// Object.defineProperty(obj,"address",{value:"st",enumerable:true});

// obj.address = "123 st";
// delete obj.address;
// console.log(obj);

//{} ==> default Propertie ==value==> false 

// obj.name = "Hamada";//Can`t Assign New Value
// delete obj.name;//Can`t Delete Prop
// console.log(obj);
// for(let key in obj){//Can`t see at for loop
//     console.log(key+": "+obj[key]);
// }

// let obj = {};
// Object.defineProperties(obj,{
//     name:{value:"Ahmed",writable:true},
//     age:{value:10, enumerable:true},
//     address:{value:"st", configurable:true}
// })

// obj.salary = 10000;
// console.log(obj);

// delete obj.name
// delete obj.age
// delete obj.address
// console.log(obj);

//#endregion


//#region rest Parameter VS Spreed Operator

//#region rest
// function sum(){
//     // console.log(arguments);//[5,10] ==> [5,10,20]
//     let result=0;
//     //code
//     for(let i=0; i<arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// }


// function sum(name,age,...arr){
//     let result=0;
//     for(let i=0; i<arr.length; i++){
//         result += arr[i];
//     }
//     return "Hello ya "+name+" of Age= "+age+", Sum = "+result;
// }

// console.log(sum("Ahmed",20));
// console.log(sum("Aly",25,5,10));
// console.log(sum("Sara",23,5,10,20));
// console.log(sum("sama",22,5,10,20,7));
// console.log(sum("Haitham",27,5,10,20,7,5));

//#endregion

//#region spreed
// function fullName(fName, lName){
//     return fName+" "+lName;
// }

// console.log( fullName("Osama", "Zidan") )

// var username1= "Ahmed";
// var username2= "Aly";

// console.log( fullName(username1, username2) )

// var userName = ["Samy","Samer"];
// console.log( fullName(userName[0], userName[1]) );
// //spreed operator
// console.log( fullName(...userName) );


//#endregion

//#endregion


//#region Destructuring [Array-Object]

//#region Dest Array
// let arr = [5,3,7];
// let x = arr[0];
// let y = arr[1];
// let z = arr[2];
// let [x, y, z] = arr;
// let [,x,z] = arr;
// let [x,,z] = arr;
// // console.log(x, y, z);//5 3 7
// console.log(x,z);//5 ===> 3 7 ==> 5  7
//#endregion

//#region Dest Object
// var obj = {name:"Ahmed", age:20, address:"123 st"};
// // let userName = obj.name;
// // let userAge = obj.age;
// // let userAddress = obj.address;

// // let {age, name, address} = obj;
// let {age:userAge, address:userAddress} = obj;

// // console.log(name, age, address);
// console.log(userAge, userAddress);//20 123 st
//#endregion

//#endregion

//#region Array APi Improvment
// let arr = [10,20,5,30];

// var flag = 0;
// for(let i=0; i<arr.length; i++){
//     if(arr[i] == 5){
//         flag = 1;
//         console.log(5)
//     }
// }
// if(flag==0)
//     console.log(undefined)

// var found = arr.find(function(koko){return koko==50})//return Value || undefined
// var found = arr.find(koko=> koko==5)
// var found = arr.find((num,ind)=> {console.log(ind);return num==5})
// console.log(found);

// let arr = [10,20,5,30];
// var isEveryMod5 = arr.every(num => num%5 == 0)//return Boolean
// console.log(isEveryMod5);

// var isSomeMod4 = arr.some(num => num%4 == 0)//return Boolean
// console.log(isSomeMod4);//

// var filterdArray = arr.filter(num => num%7 == 0)//return New Array
// console.log(filterdArray);

// arr.forEach(num=>console.log(num*5));

// var mappedArray = arr.map( num => "this is num = "+num );
// console.log(mappedArray);//["this is num = 10", "this is num = "]

//#endregion




















































































































































