//1.3 

// var input = prompt("your text is:")

// function lword(s = ""){
// var s1 = s.split(" ");
// var result = s1[0];
// for(var i=1;i<s1.length;i++){
//     if(s1[i].length>result.length){
//         result = s1[i]
//     }
// }
// return result;
// }

// alert(lword(input))

//2.1

var ar = [],sum=0,div=1,mul=1

for(var i=0;i<3;i++){
    ar.push( +(prompt("your number is:")))
    sum+=ar[i]
    mul*=ar[i]
    if (i==0) {
        div = ar[i]
    }else{
        div /=ar[i]
    }
}
document.write("<h1>Adding--Multiplying--Dividing 3 values</h1><hr>");
document.write("<p><span style='color:red;'>sum of the 3 values is: </span><span>" + ar[0] + '+' +ar[1] + '+' + ar[2]+'='+sum+ "</span></p>");
document.write("<p><span style='color:red;'>multiplication of the 3 values is: </span><span>" + ar[0] + '*' +ar[1] + '*' + ar[2]+'='+mul+ "</span></p>");
document.write("<p><span style='color:red;'>division of the 3 values is: </span><span>" + ar[0] + '/' +ar[1] + '/' + ar[2]+'='+div+ "</span></p>");

