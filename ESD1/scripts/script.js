// #region task1
var obj = {x:10, y:20};
console.log(obj);
[obj.x, obj.y] = [obj.y, obj.x];
console.log(obj);
// #endregion

// #region task2
function maxmin(...arr){
    var obj2 = {min:arr[0], max:arr[0]};
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > obj2.max) {
            obj2.max = arr[i];
        }
        if (arr[i] < obj2.min) {
            obj2.min = arr[i];
        }
        
    }
    return obj2;
}

var s = [10,20,5,90,40,1,33];
console.log(maxmin(...s));

// #endregion

// #region task3
var fruits = ["apple","strawberry","banana","orange","mango"];
var isevery = fruits.every(element => {return typeof element === 'string'})
console.log(isevery);
var issome = fruits.some(element => {return element[0] === 'a'})
console.log(issome);
var genfiltered = fruits.filter(element => {return element[0] === 'b' ||  element[0] === 's'})
console.log(genfiltered);
var genmap = fruits.map(element => "I Like "+element);
console.log(genmap);
genmap.forEach(element=>console.log(element))

// #endregion