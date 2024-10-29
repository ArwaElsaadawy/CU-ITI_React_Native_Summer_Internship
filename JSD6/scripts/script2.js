var visitCount = parseInt(getCookie("visitCount"))
visitCount++;
setCookie("visitCount", visitCount, 3);
document.getElementById("username").innerHTML = getCookie("userName")
document.getElementById("username").style = "color :" + getCookie("colorPreference") + ";"
document.getElementById("visited").innerHTML = visitCount
document.getElementById("visited").style = "color :" + getCookie("colorPreference") + ";"
var gender = getCookie("gender")
if(gender == "male"){
   document.getElementById("gender").src="../cookie/1.jpg"
}else{
   document.getElementById("gender").src="../cookie/2.jpg"
}