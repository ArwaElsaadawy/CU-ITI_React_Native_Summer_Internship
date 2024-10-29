// document.write("Hello World")
// document.write("<p>Hello World</p>")
// document.write("<h1>Hello World</h1>")


//Variables in js
//Loosely Data Type
// var x = {};
// x = 100;
// x = "Hello";
// x = true;
// x = [];

// var x = 10;
// console.log(x);//10
// console.log(typeof x)//number

// x = "Hello";
// console.log(x);//Hello
// console.log(typeof(x))//string

// x = true;
// console.log(x);//true
// console.log(typeof(x))//boolean

// x = 10.2;
// console.log(x);//10.2
// console.log(typeof x)//number

/** Data Types ==> [Primative - Non-Primative]
 * --------------------------------------------
 * A)Primative Data Types
 * -----------------------
 *    1)number[integer-float-double...]
 *    2)string[char-string]
 *    3)boolean[true-false]
 *  -->ES6
 *    4)bigInt
 *    5)symbol
 *  -->Special Primative Data Type
 *    6)null
 *    7)undefined
 * 
 * B)Non-Primative Data Type:(ref)
 * ---------------------------
 *    1)Object
 *    2)Function
 *    3)Array
*/

//undefined
// var t ;//default value [undefined]
// console.log(t);
// console.log(typeof t);



// //null
// var z = null ;
// console.log(z);//null
// console.log(typeof z);//


// var x = 10;
// // x++; // PostFix ==> x++ ==> x = x + 1
// // ++x; // PreFix ==>  ++x ==> x = x + 1
// console.log(x);//11


// var x = 10;
// // var y = ++x;// ++x ==> x = x + 1 ==> y = x
// var y = x++; // y = x ===> x = x + 1

// console.log(x);//11
// console.log(y);//10


// var x = 10;//Number ture
// // var y = -x; // -10
// // var y = !x; // false
// var y = !!x; // true

// console.log(y);//


//================[Falsy Values]=================
//[false - 0 - "" - undefined - null - NaN]

// console.log(!!false);//false
// console.log(!!0);//false
// console.log(!!"");//false
// console.log(!!undefined);//false
// console.log(!!null);//false


// == ===   != !==
//Comparison Operators
// var x = 10;
// var y = "10";

// console.log(x == y);//true
// console.log(x === y);//false


//Logical Operators [&&-||-!]
// console.log(10<20);//true
// console.log(10>20 && typeof("Hello") === 'string');//true

// console.log(10>20 || 5<10);//true


//Short Circuit
// console.log( true && true );//true
// console.log( true && false );//false
// console.log( 10 && false );//false
// console.log( 10 && 0 );// 0
// console.log( 10 && 0 && true );// 0
// console.log( 10 && "" && true );// 
// console.log( 10 && null && true );// 
// console.log( 10 && true && "Hello" && null );// null


// console.log( true || false || false );//true
// console.log( 10 || 0 || "" );//10
// console.log( 0 || "" || 10 );//10
// console.log( 0 || "" || null );//null
// console.log( 10 && "Hello" && [] );//[]

// [].length //==> 0 ==> false value

// console.log( 10 && "Hello" && [].length );//0


//Coersion
// console.log( 5<3<2 ); //false ==> true
// 5<3 ==> false ==> false<2 ==> 0<2 ==> true


// console.log( 10+"Hello" )

//boolean[true-false] ==> number [1-0] ==> string


// console.log( 10+5+"3" );//153
// console.log( "3"+10+5 );//3105


// console.log( 10+5-"3" );//12 ==> 15-3=12

// if(true){

// }else{

// }


// var x = 10;

// if(x<100){
//     //Code
// }else if(x==200){
//     //Code
// }else if(x==500){
//     //Code
// }else{
//     //Code
// }


// var x;
// switch(x){
//     case 10:
//         //Code
//     break;
//     case 100:
//         //Code
//     break;
//     case 20:
//         //Code
//     break;
//     case 5:
//         //Code
//     break;
//     default:
//         //Code
//     break;
// }


//methods to communicate with user [alert - confirm - prompt]

// 1) alert() ==> Show Information
// alert("Hello ya Folan")
// alert("Deleted Successfully")

// 2) prompt() ==> take data from user[string]
// var userName = prompt("Enter Name");//Value - null

// var num1 = +(prompt("Enter 1st Number"));//10
// var num2 = +(prompt("Enter 2nd Number"));//5


// // alert( parseInt(num1)+parseInt(num2) );//"10"+"5" = "105"
// // alert( parseFloat(num1)+parseFloat(num2) );//"10"+"5" = "105"
// // alert( Number(num1)+Number(num2) );//"10"+"5" = "105"
// alert( num1+num2 );//


// 3) confirm [Question] ==> true | false
// var con = confirm("Do you want to Exit??");
// // console.log(con);
// if(con){
//     alert("Bye Bye :)")
// }else{
//     alert("Enjoy With US")
// }





