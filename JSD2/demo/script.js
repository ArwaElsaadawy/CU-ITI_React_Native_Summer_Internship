/**
 * 1-var [scops] => Hoisting
 * 2-User Defined Function
 * 3-Objects[4 Catigories]
 */


// function Add(x=0,y=0){
//     // x = x || 0;
//     // y = y || 0;
//     console.log(x+y);
//     return x+y;
// }


// Add(10,30);
// Add(20,30);

// var y = Add(5,3);//8
// console.log(y);//

// var x = Add(10,20);
// console.log( Add(10,20) );//30
// console.log( Add(20,30) );//50

// console.log( Add() );// undefined+undefined = NaN ===> 0
// console.log( Add(10,20,100) );//


// function sum(){
//     // return arguments.length;//[]
//     var result=0;
//     //loop array
//     for(var i=0; i< arguments.length; i++){
//         result += arguments[i];
//     }
//     return result;
// }



// console.log( sum() );//0
// console.log( sum(5) );//5
// console.log( sum(5,10) );//15
// console.log( sum(5,10,3) );//18
// console.log( sum(5,10,3,4,8,9) );//39



// function myFun(){
//     alert('Hiiii');
//     var x = 40;
//     console.log("Done")
// }



// var x = 10;
// console.log(y);//ReferenceError: y is not defined
// console.log("End Of Code");//

//Scope

// console.log(x);//undefined
// var x = 10;
// console.log(x);//10


// console.log( ShowHello() );

// function ShowHello(){
//     return "Hello World";
// }

// console.log( ShowHello() );

// console.log( u );
// // u();//TypeError: u is not a Function ==> u = undefined ==> undefined() XXXXX

// //Anonynous Function || statement Function
// var u = function(){
//     console.log("Hello")
// };

// // console.log( u );//func
// u();//func

//Glopal - Local
// var x = 10;//Glopal

// function Add(z=0){//x ==> Glopal & y,z ==> Local
//     var y = 20;//Local
//     return x+y+z;
// }

// console.log( Add(30) );//60



// var x = 10;
// y = 20;
// console.log( x+y );//30

// var x = 10;

// function Add(){//local
//     x = 200;
//     // console.log(y);//undefied XXXXX ==> ReferenceError:
//     y = 10;
//     return x+y;
// }

// // console.log(y);//


// console.log(x);//10
// console.log( Add() )//210
// console.log(x);//10 ==> 200
// // console.log(y);//ReferenceError: y is not defined
// console.log(y);//10



// for(var i=0; i<5; i++){//5
//     var sama = 10;
// }


// console.log(i);//5

// console.log(sama)


//============ 4 Objects =============

/** 4 Main Objects
 * 1) BOM [Browser Object Model] [window]==>[screen-...]
 * 2) DOM [Document Object Model] DOM Manipulation
 * 3) Built-In Objects [10 Objects]
 * 4) User Defined Objects [Custom Objects]
 */


//Any Object ==> [Properties - Methods]


/** 3) Built-In Objects [10 Objects]
        * 1- String   ==>
        * 2- Number
        * 3- Boolean
        * 4- RegExp   ==>
        * 5- Array
        * 6- Date
        * 7- Error
        * 8- Function
        * 9- Math
        * 10- Object
 */


//1)String [Properties - Methods]

//Literal Creation
// var s1 = "Hello World";
// console.log(s1);//Hello World

// //Constructor Creation
// var s2 = new String("Hello World");
// console.log(s2);//String {'Hello World'}

// //Properties
// console.log( s1.length );
// console.log( s2.length );

// //Methods
// console.log( s1.charAt(0) );//H
// console.log( s1.charAt(10) );//d
// console.log( s1.charAt(20) );//''

// console.log( s1.indexOf('H') );//0
// console.log( s1.indexOf('h') );//-1
// console.log( s1.indexOf('l') );//2
// console.log( s1.lastIndexOf('l') );//9


// console.log( s1.indexOf('Wor') );//6


// var s1 = "Hallo From JAvaScript File";
// console.log( s1.split() );//["Hello From JavaScript File"]
// console.log( s1.split(" ") );//['Hello', 'From', 'JavaScript', 'File']
// console.log( s1.split("a") );//['H', 'llo From J', 'v', 'Script File']
// console.log( s1.split("") );//['H', 'a', 'l', 'l', 'o', ' ', 'F', 'r', 'o', 'm', ' ', 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't', ' ', 'F', 'i', 'l', 'e']
// console.log( s1.split("From") );//

// console.log( s1.substr(5,6) )
// console.log( s1.substring(5,6) )

// console.log( s1.replace("a","_") )//"H_llo From JavaScript File"

// ///REGEX ==> /Pattern/flags     i g m
// console.log( s1.replace(/a/,"_") )//"H_llo From JavaScript File"
// console.log( s1.replace(/a/g,"_") )//"H_llo From J_v_Script File"
// console.log( s1.replace(/a/ig,"_") )//"H_llo From J_v_Script File"



var s1 = "Hallo From JAvaScript File";

//RegExp
// //1)Literal Creation
// var r1 = /a/gi;
// console.log( s1.replace(r1,"_") )//"H_llo From J_v_Script File"

// //2)Constructor Creation
// var r2 = new RegExp(/a/,"gi");
// console.log( s1.replace(r2,"_") )//"H_llo From J_v_Script File"



//userName ==> prompt ==> chars Only
// var name = prompt("Enter UserName");
// // var NameRegExp = /^[a-zA-Z]{3,50}$/ 
// // var NameRegExp = /^[a-z]{3,50}$/i 
// // var NameRegExp = /^[a-zA-Z]*$/ ;//zero or more
// // var NameRegExp = /^[a-zA-Z]+$/;//one or more
// // var NameRegExp = /^[a-zA-Z]?$/;//zero or one
// var NameRegExp = /^[a-zA-Z]{1,}$/;//one or more

// console.log( NameRegExp.test(name) );


var phone = "02-12345678";
var PhoneRegExp = /^(02|04|06|08){1}\-{1}[0-9]{8}$/;

console.log( PhoneRegExp.test(phone) );

