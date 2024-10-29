var s1= prompt("Write your text:")
var s2= prompt("Write the character you want to count:")
var ch = confirm("consider case sensitivity?")
if (!ch) {
    s1=s1.toLowerCase();
    s2=s2.toLowerCase();
}
var count = s1.split(s2).length-1

alert("the character repeted " + count + " times." )



var pil = prompt("Write your text:")
ch = confirm("consider case sensitivity?")
if (!ch) {
    pil=pil.toLowerCase();
}

var s = pil.length/2
var p = true
for (var i = 0 , j = pil.length-1; i < s; i++,j--) {
    if(pil.charAt(i)!=pil.charAt(j)){
        p = false;
        break;
    }
}
if (p) {
    alert("your text is palindrome!")
} else {
    alert("your text is not palindrome!")
}