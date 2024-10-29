//#region Agenda
/**
 * String ==> template String
 * Ajax
 * Set-Map
 * default parameter --> default [options]object
 */
//#endregion

//#region String API
// var name = "Ahmed";
// var age = 20;

// console.log("Hello ya "+name + " , Age = "+age);
// console.log(`Hello ya ${name} , Age = ${age}`);
// let str = "Hello";
// console.log(str.startsWith("H"));//true
// console.log(str.startsWith("h"));//false
// console.log(str.endsWith("o"));//true
// console.log(str.endsWith("oo"));//false
// console.log(str.endsWith("lo"));//true
// console.log(str.includes("lo"));//true
// console.log(str.includes("llo"));//true
// console.log(str.includes("lllo"));//false
// console.log(str.repeat(5));//
//#endregion

//#region Default Options
// var obj = {};
// Object.defineProperty(obj, "name", {});

//Default Parameter
// function Add(x=0,y=0){
//     return x+y;
// }

// console.log( Add(5,10) );//15
// console.log( Add() );//NaN ==> 0

//Default Options  ==> Hello ya Eng.Mohamed, Age= 20
// function displayInfo(msg="Hello Ya", {title="Eng", name="Ahmed", age=20, phone}){
//     return `${msg} ${title}.${name}, Age= ${age},,,,,,${phone}`;
// }

// function displayInfo(msg="Hello Ya",obj = {title, name, age}){
//     return `${msg} ${obj.title}.${obj.name}, Age= ${obj.age}`;
// }

// function displayInfo(msg="Hello Ya",obj = {title:"Eng", name:"Ahmed", age:20}){
//     return `${msg} ${obj.title}.${obj.name}, Age= ${obj.age}`;
// }

// function displayInfo(msg="Hello Ya",option = {}){
//     var defObj = {title:"Eng", name:"Ahmed", age:20};
//     var result = Object.assign(defObj, option);
//     // console.log(Object.keys(result));//[title, name, age, address]
//     return `${msg} ${result.title}.${result.name}, Age= ${result.age}`;
// }

// // console.log( displayInfo("Hello ya",{title:"Eng", name:"Mohamed", age:20}) )
// console.log( 
//     // displayInfo("Hello ya",{title:"Dr", name:"Mohamed", age:22})
//     // displayInfo("Hello Ya ",{}) 
//     // displayInfo("Hello Ya ",{title:"DR"}) 
//     // displayInfo("Hello Ya ",{title:"DR",name:"Aly"}) 
//     // displayInfo("Hello Ya ",{title:"DR",age:25}) 
//     displayInfo("Hello Ya ",{title:"DR",age:25,address:"132 st"}) 
// )


// throw Error("7asal Error");
//#endregion

//#region Errors

//Error Types
//1)Syntax Error
// alert("Hello"

//2)Range Error
// var num = 1;//1.00000000000
// num.toFixed(500);

//3)Type Error
// var num = 1;
// num.toUpperCase();

//4)Reference Error
// var x = 10;
// x = x + y;//

//5)URI Error
// console.log(encodeURIComponent("@"))
// console.log(decodeURIComponent("%40"))

// console.log(encodeURIComponent(" "))
// console.log(decodeURIComponent("%20"))

// console.log(decodeURIComponent("%"))


// throw Error("7asal Error")
// throw TypeError("7asal Error")
// try{
//     console.log("Before Error Try")
//     // throw ReferenceError("7asal Error");
//     console.log("After Error Try")
// }catch(err){
//     console.log(err);
//     // throw RangeError("7asal Error")
//     console.log("After Error Catch")
// }finally{   
//     console.log("End");
// }
//#endregion


//#region AJAX [XMLHttpRequest()] [XHR]
//0)Create Instance From XMLHttpRequest()
var xhr = new XMLHttpRequest();
//1)Open Request [Method - URL]
// xhr.open("GET","../Data/data.txt");//1
// xhr.open("GET","../Data/data.json");//1
xhr.open("GET","https://jsonplaceholder.typicode.com/users");//1
// //2)Send() Request
// xhr.send('');
//3)Listen Event ===> Recive Data
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            // console.log(xhr.responseText);
            var data = JSON.parse(xhr.responseText);//{students:[]} ==jsonPlaceHolder==> [{},{}]
            // console.log(data.students);//[]
            // console.log(data);//
            // for(let i=0; i<data.students.length; i++ ){
            //     document.getElementById("container").innerHTML += "<h1>"+data.students[i].name+"</h1>";
            // }
            for(let i=0; i<data.length; i++ ){
                document.getElementById("container").innerHTML += "<h1>"+data[i].name+"</h1>";
            }
        }
    }
}


function SendNow(){
    //2)Send() Request
    xhr.send('');
}


//#endregion
