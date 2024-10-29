/**
 * SET - MAP
 * for of --> Iterator
 * Generator
 * Class --> ctor function
 * inheritance
 */


/**
 * [Set] ==> [Unique Values]
 * Properties ==> [size]
 * Methods ==> [add(val)-delete(val)-clear()-has(val)]
 * Iterator Methods [keys()-values()-entries()]
 */

// var mySet = new Set([1,3,"Hello",true,10]);
// console.log(mySet);
// console.log(mySet.has(10));//true
// console.log(mySet.has(true));//true
// mySet.add("Welcome");
// console.log(mySet);
// mySet.add("Hello");
// console.log(mySet);
// mySet.delete("Hello");
// console.log(mySet);
// mySet.clear();
// console.log(mySet);

// for(var i=0; i<mySet.size; i++){
//     console.log(mySet[i]);
// }

// for(var i in mySet){
//     console.log(i);
// }

// for(var i of mySet){
//     console.log(i, ": ", i);
// }

// var arr = [1,5,20];
// var iter = arr[Symbol.iterator]();
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())
// console.log(iter.next())

//Iterable Objects ==> Iterator ==> {next:f(){}} ==> {value:, done:}

// for(var i of arr){
//     console.log(i);
// }


// console.log(mySet.keys())
// console.log(mySet.values())
// console.log(mySet.entries())

// var obj = {name:"Ahmed", age:20};
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));



/**
 * [Map] ==> [Duplicates Values]
 * Properties ==> [size]
 * Methods ==> [set(key,val)-get(key)-delete(key)-clear()-has(val)]
 * Iterator Methods [keys()-values()-entries()]
 */

var myMap = new Map([ ["name","Ahmed"], ["age",20], [10,true] ])

// myMap.set("address","123 st.")
// myMap.set("name","Aly")
// myMap.set("username","Aly")
// console.log(myMap);

// console.log(myMap.keys());
// console.log(myMap.values());
// console.log(myMap.entries());[[] ,[], []]

// for(var [k, v] of myMap){
//     console.log(k, v);
// }

//Enumerable VS Iterable
//Enumerable Property ==> obj ==> for in
//Iterable Object ==> map, set, arr ==> for of


//Generators
// function Add(x,y){
//     return x+y;
// }

// function* test(){
//     //Code
//     console.log("Hi")
//     yield 10;

//     //Code
//     console.log("After 10")
//     yield * "Hello";
    
//     //Code
//     console.log("After Hello")
//     yield 5;
// }

// var iter = test();//{next:(){}}
// console.log(iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());



// function* EvenGenerator(arr){
//     for(var i =0; i<arr.length; i++){
//         if(arr[i]%2 == 0){
//             yield arr[i];
//         }
//     }
// }

// var myArr = [5,2,10,20,30,1]
// var iter = EvenGenerator(myArr);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


// var salary = 1000;
// var salary = 10000;
// var salary = 100000;
// var salary = 100_000;
// var salary = 1_000_000;
// console.log(salary);


//Logical Assignment Operator

//1) And & Equal [Assign Value When Truth values]

// var a = 1;//true value
// // if(a){
// //     a = 3;
// // }
// // console.log(a);//3 ===> undefined

// a &&= 3;// a = a && 3;

// console.log(a);//


//2) OR || Equal [Assign Value When Falsy]
// var a = 1;
// if(!a){
//     a = 3;
// }
// console.log(a);//1 ==> 3

// a ||= 3; /// a = a || 3;
// console.log(a);


//3)Nullish Coalescing & Equal (??=) [Assign New Value When Null-Undefined]
// var a=null;//undefined
// a ??= 3;
// console.log(a);


/** Objects
 * var obj = {}
 */
// var obj = {};
// obj.name = "";

// var obj = new Object();
// obj.name = "";

// var obj = {name:""};

// function Fact(name){
//     return {name}
// }
// var obj = Fact("");


// function Ctor(name){
//     this.name = name;
//     this.show = function(){ return this.name };
// }
// var obj = new Ctor("");
// console.log(obj);

class Person{
    name;
    age;
    #salary=10_000;
    static count = 0;
    //1)CTOR ==> default CTOR
    constructor(name="Person Name", age=0){
        this.name = name;
        this.age = age;
        if(this.constructor == Person)
            Person.count++;
    }
    show(){
        return `Hello Ya ${this.name}, Age = ${this.age}`;
    }
    get Salary(){
        return this.#salary;
    }
    set Salary(val){
        this.#salary = val;
    }
}
// var p1 = new Person();//Person {name:unedefined, age:unedefined}
// console.log(p1);//Person {name:Person Name, age:0}
// var p2 = new Person("Ahmed", 20);
// var p3 = new Person("Ahmed", 20);
// var p4 = new Person("Ahmed", 20);
// console.log(p2);
// // console.log(p2.#salary);
// console.log(p2.Salary);
// p2.name = "Aly";
// p2.age = 50;
// console.log(p2);
// p2.Salary = 50_000;
// console.log(p2);
// console.log(Person.count);//3

// console.log(p2.show());

// var p3 = new Person();
// console.log(p3.show());




// class Employee extends Person{
//     dept;
//     static count = 0;
//     //CTOR ==> Default CTOR ==> constructor(){super()}
//     constructor(name, age, dept){
//         super(name, age);//Parent CTOR
//         this.dept = dept;
//         Employee.count++;
//     }
// }

// var p1 = new Person();
// var p2 = new Person();
// var p3 = new Person();

// var e1 = new Employee("Ahmed", 25, "IT");
// var e2 = new Employee("Ahmed", 25, "IT");
// // var e2 = new Employee("Ahmed", 25, "IT");
// // console.log(e1);
// // console.log(e1.Salary);
// // console.log(e1.show());

// console.log(Person.count);//1 ==> 2 ==> 2
// console.log(Employee.count);//1 ==> 2==>1

//Named Export
// import { Add, Minus } from '../Modules/module.js';
// import { Add, Minus, Mult, div } from '../Modules/module.js';
// import * as calc from '../Modules/module.js';
// import { Minus } from '../Modules/module.js';

// console.log( Add(10,20) );
// console.log( Minus(10,20) );
// console.log( div(10,20) );
// console.log( Mult(10,20) );
// // console.log( Calc );

// var c1 = new Calc();
// console.log(c1);


//Exported Default
// import hamada, {Minus as minimini, Mult as mumumu}from '../Modules/module.js';

// console.log( hamada(10,20) );//30
// console.log(minimini(20,5));//15

