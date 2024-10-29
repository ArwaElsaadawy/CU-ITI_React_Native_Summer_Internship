/**4 Main Objects
 * 1)BOM ==> [window] ==> [screen - navigator - location - ....]
 * 2)DOM ==> Document
 * 3)Buil-in Objects
 * 4)User Defined
 */

//========= Object [Prop - Methods] ==========

/**3)Built-In Objects
        * 1-Number     ?????
        * 2-String    ==> 
        * 3-Array      ?????
        * 4-Boolean
        * 5-RegExp   ==>
        * 6-Date       ?????
        * 7-Function
        * 8-Object
        * 9-Error
        * 10-Math      ?????
 */

//JavaScript LifeCycle ???

//Number
// 1)Literal Creation
// var x = 10;

// // 2)Constructor Creation
// var y = new Number(10);

// console.log(x);//10
// console.log(y);//Number {10}
// console.log(typeof y);//object

// console.log( y.valueOf() );//10

// var x = 10;
// console.log(isFinite(x));//true
// console.log(Number.isFinite(x));//false

// var y = undefined+10;
// console.log(y);//NaN

// console.log( typeof y );//number
// //isFinite() || isNaN()
// console.log( isFinite(y) );//false

// var x = 123.456;
// console.log(x.toString());//'123.456'
// // console.log(x.toString(2));//''
// // console.log(x.toString(8));//''
// // console.log(x.toString(16));//''
// console.log( x.toLocaleString('ar-eg') );
// console.log( x.toLocaleString('zh-Hans-CN-u-nu-hanidec') );


// Number [toFixed-toPersecion-toExponentioal]


// Math

//Array
//Immutable - Mutable

//1)Literarl Creation
// var arr = [];
// var arr2 = [10,5,"Hello", true, function(){console.log("Inside Function")},100,{},[]];
// arr2[8]="Hamada";

// console.log(arr2);
// console.log(arr2.length);

// // console.log(arr2[4]);
// // var myFun = arr2[4];
// // myFun();

// arr2[4]();
// var arr = [];

// arr[50]="Hello";
// console.log(arr.length);//51
// console.log(arr);//[undefined,....,undefined, "Hello"]

// console.log(arr[0]);//undefined



// //2)Constructor Creation
// var arr1 = new Array();
// console.log(arr1);//[]
// console.log(typeof arr1);//object

// var arr2 = new Array(3);//[,,,]
// console.log(arr2[0]);
// arr2[5] = "Hello"
// console.log(arr2);

// var arrrrrr = [,,,];//[undefined, undefined , undefined]
// console.log(arrrrrr[0]);
// arrrrrr[5] = "Hello"
// console.log(arrrrrr);


// //3)Dense Array
// var arr3 = new Array("Apple", 10, "Banana")
// console.log(arr3);


//Methods [push-pop-unshift-shift]
//Immutable - Mutable

/**
 * Push(val) [Add From End of Array]
 * Pop() [Remove From End of Array]
 * unshift(val) [Add From Start of Array]
 * shift() [Remove From Start of Array]
 */


// var arr1 = [1,5,10,3,40];
// var arr2 = [70,80,90];

// console.log( arr1.concat(arr2) );

// console.log( arr1 );//[1,5,10,3,40]
// console.log( arr1.join() );//1,5,10,3,40
// console.log( arr1.join("*") );//1*5*10*3*40

// var str = arr1.join("*");//1*5*10*3*40

// console.log( str.split("*") );//[]

// console.log( arr1.join("*").split("*") );
// console.log( Number( arr1.join("*").split("*") ) );


//sort
// var arr = [5,10,1,15,20,2,30,50,4]

// console.log(arr.sort());//[1, 10, 15, 2, 20, 30, 4, 5, 50]
// // console.log(arr);//[1, 10, 15, 2, 20, 30, 4, 5, 50]

// var arr = [5,10,1,15,20,2,30,50,4]
// //[1,2,4,5,10,15,20,30,50]
// // ASC
// console.log( arr.sort( function(a,b){return a-b;} ) )
// //Desc
// console.log( arr.sort( function(a,b){return b-a;} ) )


//========== Mutable VS Immutable ===========
// var x = 10;
// var y = x;
// console.log(x);//10
// console.log(y);//10

// x = 100;
// console.log(x);//100
// console.log(y);//10

//Reference
// var arr1 = [1,2,3];
// var arr2 = arr1;
// console.log(arr1);//[1,2,3]
// console.log(arr2);//[1,2,3]

// arr1[0] = "Hello";
// console.log(arr1);//["Hello",2,3]
// console.log(arr2);//["Hello",2,3]


//Solve By Hard Copy
// var arr1 = [1,2,3];
// var arr2 = [];

// for(var i = 0; i<arr1.length; i++){
//     arr2[i] = arr1[i];
// }
// console.log(arr1)
// console.log(arr2)

// arr1[0] = "Hello";
// console.log(arr1)//["Hello",2,3]
// console.log(arr2)//[1,2,3]





//=============== Associative Array ===============
//Concept==> arguments ==> [caller:f, ]

// var arr = ["Hello",true,10];

// //Dot Notation
// console.log( arr.length );//3
// //Subscribt Notation
// console.log( arr['length'] );//3

// arr.push(5);
// console.log(arr);//["Hello",true,10,5]

// arr['push'](100);
// console.log(arr);//["Hello",true,10,5,100]


// var assArr = [];
// assArr['userName'] = "Ahmed";
// assArr['age'] = 10;

// console.log(assArr);
// console.log(assArr['userName']);
// console.log(assArr.length);//0

// for(var i=0; i<assArr.length; i++){
//     console.log( "Hello" );
// }


// for(var i in assArr){// i ===> Keys
//     // console.log( i );//Key
//     // console.log( assArr[i] );//Value
//     console.log(i + ": " + assArr[i]);
// }



// var assArr = [];
// assArr['userName'] = "Ahmed";
// assArr['age'] = 10;
// assArr[0] = "Sama";
// assArr[1] = "Mohamed";

// for(var i=0; i<assArr.length; i++){
//     console.log(assArr[i]);//Values
// }

// for(var i in assArr){
//     console.log(i + ": "+ assArr[i]);
// }

//["Sama", "Mohamed", 'userName':"Ahmed", 'age':10]
// console.log(assArr);



var assArr = [];
assArr['userName'] = "Ahmed";
assArr['age'] = 10;
assArr[0] = "Sama";
assArr[1] = "Mohamed";


assArr['showInfo'] = function(){
    return assArr['userName']+" & Age = "+ assArr['age']
}


for(var i=0; i<assArr.length; i++){
    console.log(assArr[i]);//Values
}

console.log( assArr.showInfo() )