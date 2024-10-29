/**
 * BOM -> window -> [navigator - screen - history - location - document]
 */

//location
// console.log(location.host);
// console.log(location.hostname);
// console.log(location.port);
// console.log(location.protocol);

//assign() - replace() - reload()

//History[forward - back - go]


//location ==> search

// console.log(location.search);


///document Object Model

//document [properties - Methods]

//-->Properties [bgColor - fgColor - title - cookie]
//Methods [write() - writeln()] ==> XXXXXXXXXXXXXX
/** Methods
 * 1) getElementById()           ===> One Element
 * 2) getElementsByClassName()   ===> Collection Of Elements
 * 3) getElementsByTagName()     ===> Collection Of Elements
 * 4) getElementsByName()        ===> Collection Of Elements
 
 * 5) querySelector()
 * 6) querySelectorAll()
*/

// ( 3 )
// window.onload = function(){
//     document.bgColor = "red";
//     //Ur Code
// }



// document.bgColor = "red";
// console.log( document.getElementById("myP") ) //null.ayHaga ==> typeError???


// document.getElementById("myP").innerText = "<h1>Hello</h1>" 
// document.getElementById("myP").innerHTML = "<h1>Hello</h1>" 

// document.getElementById("uName").value = "Ahmed";
// document.getElementById("uName").type = "button";


//Dark Light Mode
// var flag = 0;
// function darkLightMood(){
//     if(flag == 0){
//         document.bgColor = "black";
//         document.fgColor = "white";
//         document.getElementById("myDL").value = "Light";
//         flag = 1;
//     }else{
//         document.bgColor = "white";
//         document.fgColor = "black";
//         document.getElementById("myDL").value = "Dark";
//         flag = 0;
//     }
// }


// console.log(document.getElementsByClassName("myClass"))


// document.getElementsByClassName("myClass")[0].style.color = "red";
// document.getElementsByClassName("myClass")[1].style.color = "red";
// document.getElementsByClassName("myClass")[2].style.color = "red";
// document.getElementsByClassName("myClass")[3].style.color = "red";
// document.getElementsByClassName("myClass")[4].style.color = "red";

// var len = document.getElementsByClassName("myClass").length;
// for(var i =0; i< len; i++ ){
//     document.getElementsByClassName("myClass")[i].style.color = "red";
//     document.getElementsByClassName("myClass")[i].style.backgroundColor = "yellow";
// }

// document.querySelector("h6").style.color = "red"
// document.querySelectorAll("h6")[1].style.color = "green"

// console.log(document.querySelectorAll("h6"))

// document.querySelector("#lll").style.color = "blue";
// document.querySelector(".myClass").style.color = "blue";

// var len = document.querySelectorAll(".myClass").length;
// for(var i = 0; i<len; i++)
//     document.querySelectorAll(".myClass")[i].style.color = "blue";

// document.querySelectorAll(["#lll","#llll"])[0].style.color = "blue"
// document.querySelectorAll(["#lll","#llll"])[1].style.color = "blue"


// console.log(document.querySelectorAll(["#lll","#llll"]))


//forms - links - anchor - images

// console.log( document.getElementsByTagName("form") )
// console.log( document.forms )


// function chg1(){
//     document.getElementById("img1").src = "../Images/2.jpg"
// }

// function chg2(){
//     document.getElementById("img1").src = "../Images/1.jpg"
// }


// function getData(element){
//     // console.log(document.getElementById("uName").value)
//     // document.getElementById("show").innerText = "Username: "+document.getElementById("uName").value
//     // console.log(element.value);
//     document.getElementById("show").innerText = "Username: "+element.value;

// }

// function one(){
//     document.getElementById("screen").value = 1
// }
// function two(){
//     document.getElementById("screen").value = 2
// }
// function three(){
//     document.getElementById("screen").value = 3
// }

function AddToScreen(element, evt){
    // document.getElementById("screen").value += num;
    // document.getElementById("screen").value += element.value;
    document.getElementById("screen").value += evt.target.value.trim();
    // console.log(evt);
}

function ClearAll(){
    document.getElementById("screen").value = ""
}



