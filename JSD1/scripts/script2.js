var sum = 0
var n = 1
while(sum < 100 && n != 0 ) {
    n = +(prompt("the next number is:"));
    sum +=n;
}
alert("the total sum is:" + sum)