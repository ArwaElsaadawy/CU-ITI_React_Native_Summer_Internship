/**
 * Cookies ---> 
 * User Defined Objects
 */

// console.log(document.cookie)

// function addCookies(){
//     //#region Session Cookie
//         document.cookie = "userName=Ahmed";//Session Cookie
//         document.cookie = "userAge=25";//Session Cookie
//     //#endregion

//     //#region Persistant Cookie
//         var today = new Date();
//         today.setMonth( today.getMonth() + 2 );
//         document.cookie = "userAddress=123st.;expires="+today;
//     //#endregion
// }


// function deleteCookie(){
//     var today = new Date();
//     today.setMonth( today.getMonth()-3 );
//     document.cookie = "userAddress=;expires="+today;
// }


// function SubmitForm(){
//     var userName = document.getElementById("name").value;
//     var userAge = document.getElementById("age").value;
//     //Session Cookie
//     document.cookie = "userName="+userName;
//     //Persistant Cookie
//     var today = new Date();
//     today.setMonth( today.getMonth()+2 );
//     document.cookie = "userAge="+userAge+";expires="+today;
// }



// function SubmitForm(){
//     var userName = document.getElementById("name").value;
//     var userAge = document.getElementById("age").value;
//     //Session Cookie
//     CreateCookie("userName", userName);
//     //Persistant Cookie
//     CreateCookie("userAge", userAge, 2);
// }

// console.log( GetAllCookies() );

/**
 * BOM [window] -> [5]
 * DOM 
 * Built-in Objects [10]
 * User Defined Objects
 */

//User Defined Object
// var obj1 = {};
// var obj2 = new Object();

// console.log(obj1)
// console.log(obj2)

// var obj = {};
// //Properties
// obj.name = "Ahmed";
// obj.age = 20;
// obj.phones = ['01212345678','01512345678','01012345678'];

// obj["address"] = "123 st."

// // console.log(obj);
// // console.log(obj.name);//Ahmed
// // console.log(obj['name']);//Ahmed

// //Methods
// obj.show = function(){
//     return "Hello ya "+obj.name;
// }

// obj.name = "Aly";
// console.log( obj.show() );
// console.log( obj );

// var obj = {name:"Ahmed", age:20};
// obj.address = "123 st."

// console.log(obj);

// var obj = {
//     name:"Ahmed",
//     age:20,
//     show: function(){
//         return "Hello Ya "+obj.name;
//     }
// };

// console.log(obj.show())


// console.log(this);//window
// console.log(window);//window

// var x = 10;
// console.log(x)
// console.log(window.x)
// console.log(this.x)

// var name = "koko"
// var age = 33;

// console.log(z);//ReferenceError ==> z is not defined
// console.log(name);//window.name=''
// console.log(window);

// var obj = {
//     name:"Aly",
//     age:22,
//     disp: function(){
//         return "Hello ya "+obj.name+", of Age= "+obj.age
//     },
//     disp2: function(){
//         return "Hello ya "+this.name+", of Age= "+this.age
//     },
//     disp3: function(){
//         setTimeout(function(){
//             //this ==> window ==> Why???
//             //name ==> ''  || age ==> undefined ??
//             console.log("Hello ya "+this.name+", of Age= "+this.age)
//         },3000)
//     },
//     disp4: function(){
//         setTimeout(function(){
//             console.log("Hello ya "+obj.name+", of Age= "+obj.age)
//         },3000)
//     },
//     disp5: function(){
//         var that = this;// _this  that  _that  self _self
//         setTimeout(function(){
//             console.log("Hello ya "+that.name+", of Age= "+that.age)
//         },3000)
//     },
//     disp6: function(){
//         // setTimeout(function(){},3000)
//         setTimeout(()=>{
//             console.log("Hello ya "+this.name+", of Age= "+this.age)
//         },3000)
//     }
// };


// console.log( obj.disp() );
// console.log( obj.disp2() );
// console.log( obj.disp3() );

// obj.disp3();
// obj.disp4();
// obj.disp5();
// obj.disp6();



//Arrow Function

// function Add(x,y){
//     return x+y;
// }
// console.log(Add(2,3))


// var myFun = function(x,y){return x+y};
// var myFun = (x,y)=>{return x+y};
// var myFun = (x,y)=>{return x+y};
// var myFun = (x,y) => x+y;
// var myFun = (x) => x*10;
// var myFun = x => x*10;


// console.log(myFun(2));


// console.log(w);//w is Not defined

// w=u=>u*10;//Not Hoisted

// console.log( w(10) );//100



//Employees ==> [{name, age, salary, address, dept},{name, age, salary, address, dept},{name, age, salary, address, dept},{name, age, salary, address, dept}]

// var e1 = {name:"Ahmed", age:22, address:"123 st.", dept:"IT"};
// var e2 = {name:"Aly", age:23, address:"456 st.", dept:"Acc"};
// var e3 = {nam:"Sara", age:25, address:"789 st", dept:"HR"}

// var emps = [e1, e2, e3];

// for(var i = 0; i<emps.length; i++){
//     console.log( emps[i].name );
// }


//1)Factory Function ==> return {}
function employee(name, age, address, dept){
    return {
                name: name, 
                age: age, 
                address: address, 
                dept: dept
            };
}

//#region Call Of Factory Function
// var e1 = employee("Ahmed", 20, "123 st", "IT");
// var e2 = employee("Sara", 22, "456 st", "HR");
// var e3 = employee("Haitham", 25, "789 st", "Acc");

// var emps = [e1, e2, e3];

// for(var i = 0; i<emps.length; i++){
//     console.log( emps[i].name );
// }
//#endregion

//2)Constructor Function
function Employee(name, age, address, dept){
    //Has No Return
    this.name = name;
    this.age = age;
    this.address = address;
    this.dept = dept;
}

var e1 = new Employee("Ahmed", 20, "123 st.", "IT");
var e2 = new Employee("Aly", 25, "456 st.", "HR");
var e3 = new Employee("Sara", 24, "789 st.", "Acc");
// console.log(e1);//undefined ??? ===> {name....}

var emps = [e1, e2, e3];

for(var i = 0; i<emps.length; i++){
    console.log( emps[i].name );
}

// console.log(e1.name);//Error ==> undefined.ayHaga ??
// console.log(window.name);
// console.log(window.age);
// console.log(window.address);
// console.log(window.dept);



/**
 * var obj = {}
 * var obj = {name:"", .....}
 * var obj = new Object()
 * function empFactory(name, age){retrun {name:name, age:age} }
 * function empCtor(name, age){ this.name = name; this.age = age; }
 */


