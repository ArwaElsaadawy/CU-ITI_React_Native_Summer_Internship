document.write("<h1>your info is:</h1> <hr>");
var regName = /^[a-zA-Z]+$/ ;
var regPhone = /^[0-9]{8}$/;
var regmobile = /^(010|011|012){1}[0-9]{8}$/;
var regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
var username,phone,mobile,email
do {
    username = prompt("your name is:");
    } 
    while(!regName.test(username));

do {
    phone = prompt("your phone is:");
    } 
    while(!regPhone.test(phone));

do {
    mobile = prompt("your mobile is:");
    } 
    while(!regmobile.test(mobile));

do {
    email = prompt("your email is:");
    } 
    while(!regEmail.test(email));

var color = prompt(" choose the coloring format either red, green or blue color")
document.write("<p><span style='color:" + color + ";'>Name: </span><span>" + username + "</span></p>");
document.write("<p><span style='color:" + color + ";'>Phone: </span><span>" + phone + "</span></p>");
document.write("<p><span style='color:" + color + ";'>Mobile: </span><span>" + mobile + "</span></p>");
document.write("<p><span style='color:" + color + ";'>Email: </span><span>" + email + "</span></p>");
