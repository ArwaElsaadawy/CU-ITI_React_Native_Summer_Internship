var currentIndex = 1;
var myinterval;
function next(){
    if (currentIndex == 6) {
        currentIndex = 1; 
    } else {
        currentIndex +=1;
    }
    document.querySelector("img").src="../resources/slideShow/"+currentIndex+".jpg";
}

function stop(){
    clearInterval(myinterval)

}

function slideShow(){
    if (!myinterval) {
    myinterval = setInterval(function() {
        if (currentIndex == 6) {
            currentIndex = 1; 
        } else {
            currentIndex +=1;
        }
    document.querySelector("img").src="../resources/slideShow/"+currentIndex+".jpg";
    }, 500);  
    }

}

function previous(){
    if (currentIndex == 1) {
        currentIndex = 6; 
    } else {
        currentIndex -=1;
    }
    document.querySelector("img").src="../resources/slideShow/"+currentIndex+".jpg";

}