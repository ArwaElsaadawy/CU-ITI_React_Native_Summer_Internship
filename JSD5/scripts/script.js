var arrdata = (((location.search.replace('?',"")).replace("%40" , "@")).replace("+"," ")).split("&")
var element;
for (var i = 0; i < arrdata.length; i++) {
    element = arrdata[i].split('=');
    document.getElementById(element[0]).innerHTML= element[1]
    
}

if (!navigator.userAgent.includes("Chrome/")) {
    document.getElementById("browser").innerHTML = "Please Use chrome."
}