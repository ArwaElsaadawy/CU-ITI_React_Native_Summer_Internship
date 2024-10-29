/**
 * 3) Built-In Objects ==> [10 Objects] [Number-Boolean - ....]
 */

//#region  Date
// var today = new Date();//Object==> Properties -Methods
// console.log(today);//Sun Aug 25 2024 09:32:58 GMT+0300 (Eastern European Summer Time)
// console.log(today.getMonth());//7  ==> [Aug(8)] => 0-11
// console.log(today.getDay());//0  ==> [Sun(0)] => 0(Sun)-7(Sat)
// console.log(today.getYear());//124  ==> 1900 (0) ==> 2024(124)
// console.log(today.getYear()+1900);//2024  ==> 1900 (0) ==> 2024(124)
// console.log(today.getFullYear());//2024  ==> 1900 (0) ==> 2024(124)

// today.setMonth( today.getMonth()+2 );

// console.log(today.toDateString());//Sun Aug 25 2024
// console.log(today.toLocaleDateString("ar-eg"));//
// console.log(today.toLocaleDateString());//8/25/2024
//#endregion

/** 4 Main Objects at JS
 * 1)BOM
 * 2)DOM
 * 3)Built-In Objects
 * 4)User Defined Objects
 */

//BOM [Browser Object Model]
/**
 * 1) Window [Parent Object]
 *      a)navigator
 *      b)screen
 *      c)history
 *      d)location
 *      e)document
 */

//window

// var x = 10;
// window.y = 20;

// function Add(){

// }

// console.log(y);//20
// console.log(window.y);//20

// console.log(window);

// window.alert("Hello")


//#region Window[open-close-moveBy-moveTo]
//Methods [window]
//open - close

// var myWin;//undefined ==> undefined.hamada ==> Error
// function open1(){
//     // open();
//     myWin = open("../Pages/profile.html","","width=300,height=300");
//     // window.myWin = open("../Pages/profile.html","","width=300,height=300");
// }
// function close1(){
//     if(myWin)
//         myWin.close();
// }
// function move1(){
//     myWin.moveTo(50,50);
//     myWin.focus();
// }
// function move2(){
//     if(myWin && !myWin.closed){
//         myWin.moveBy(50,50);
//         myWin.focus();
//     }else{
//         console.log("Hii")
//     }
// }
//#endregion


//#region Window [SetTimeOut VS SetInterval] [ClearTimeOut - ClearInterval]

// for (let i = 1; i <= 6; i++) {
//     document.write("<h"+i+"> Hello </h"+i+">")    
// }

//time

//1)-->Parsing EveryTime
// setInterval("alert('Hello')",3000);

//2)Best Practice [Function-> ref at Interval]
// function Hello(){
//     alert('Hello');
// }

// setInterval(Hello,3000);

//3)Function Inside Interval
// setInterval(function(){
//     alert("Hello")
// },3000)

// var myInterval;

// function startInterval(){
//     myInterval = setInterval(function(){
//         alert("Hello")
//     },3000)
// }

// function stopInterval(){
//     clearInterval(myInterval);
// }


// myInterval = setInterval(function(){
//     alert("Hello")
// },3000)

// setTimeout(function(){
//     alert('TimeOut Run Successfully');
//     clearInterval(myInterval);
//     alert('Interval Deleted Successfully');
// },12000)


//clearTimeout
// var myTimeOut;
// function Hello(){
//     alert('Hello')
//     myTimeOut = setTimeout(Hello,3000)
// }

// Hello();


// function stopTimeOut(){
//     clearTimeout(myTimeOut);
// }


//#endregion


//#region JS LifeCycle

//Stack
// var x = 10;
// console.log(x);//10

// console.log("Befor Timeout")

//Web API(Timer) ==> Queue ==> EventLoop(Empty Stack) ==> Stack
// setTimeout(function(){
//     console.log("Inside TimeOut");
// },3000)

// console.log("After Timeout")
//#endregion


//#region window[navigator]
// console.log(navigator.language);//en-US
// console.log(navigator.languages);//['en-US', 'en', 'ar']
// console.log(navigator.appCodeName);//
// console.log(navigator.userAgent);//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36


// if(navigator.userAgent.includes("Chrome/")){//Chrome
//     document.write("Welcome At Chrome")
// }else{//FireFox
//     document.write("Please Use Google Chrome")
// }

//#endregion








