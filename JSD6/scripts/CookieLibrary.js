function allCookieList(){
    var assArray = [];
    var CookieArray = document.cookie.split("; ");
    for(var i = 0; i< CookieArray.length; i++){
        var key = CookieArray[i].split("=")[0];
        var val = CookieArray[i].split("=")[1];
        assArray[key] = val;
    }
    return assArray;
}


function deleteCookie(key){
    var today = new Date();
    today.setMonth( today.getMonth() - 10 );
    document.cookie = key+"=;expires="+today;
}

function setCookie(cookieName,cookieValue,expiryDate){
    if(expiryDate){//Value ==> Persistant
        var today = new Date();
        today.setMonth( today.getMonth()+ expiryDate )
        document.cookie = cookieName+"="+cookieValue+";expires="+today;
    }else{//undefined ==> session
        document.cookie = cookieName+"="+cookieValue;
    }

}

function hasCookie(cookieName){
    var CookieArray = document.cookie.split("; ");
    var index = CookieArray.findIndex(cookieName)
    if (index == -1) {
        return false;
    }else{
        return true
    }
}

function getCookie(cookieName){
    var cookieArray = document.cookie.split("; ");
    for (var i = 0; i < cookieArray.length; i++) {
        var cookiePair = cookieArray[i].split("=");
        if (cookiePair[0] === cookieName) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;

}
