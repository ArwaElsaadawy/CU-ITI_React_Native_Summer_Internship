//2.2

var arr2 = []

for(var i=0;i<5;i++){
    arr2.push( +(prompt("your number is:")))
}
document.write("<h1>Sorting</h1><hr>");
document.write("<p><span style='color:red;'>you've entered the values of: </span><span>" + arr2+ "</span></p>");
arr2.sort(function(a,b) {return a-b;})
document.write("<p><span style='color:red;'>your values after being sorted ascending: </span><span>" + arr2+ "</span></p>");
arr2.sort(function(a,b) {return b-a;})
document.write("<p><span style='color:red;'>your values after being sorted desending: </span><span>" + arr2+ "</span></p>");


