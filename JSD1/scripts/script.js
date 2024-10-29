var text = prompt("Please Enter Your Massege:")
var head = 0
do {
    head++
    document.write("<h" + head + "> "+text+ " Number " + head +"</h" + head + "> ")
} while (head < 6);