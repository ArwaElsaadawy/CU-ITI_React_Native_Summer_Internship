var currentIndex = 1;
var images = document.querySelectorAll('img'); 
var myinterval;

function start(){
    myinterval = setInterval(function() {
        for (var i = 0; i < 5; i++) {
            if (i === currentIndex) {
                images[i].src = "../resources/marble3.jpg";
            } else {
                images[i].src = "../resources/marble1.jpg";
            }
        }
        currentIndex++;
        if (currentIndex >= 5) {
            currentIndex = 0;
        }
    }, 500);
}
start();
function stop(){
    clearInterval(myinterval)

}
function continu(){
    start();
    }