

function childW(){
    window.myWin = open("../Pages/profile.html","","width=300,height=300");
    myInterval = setInterval(function(){
    if(myWin && !myWin.closed){
            myWin.moveBy(50,50);
            myWin.focus();
    }else {
            clearInterval(myInterval);
        }
    },500)

}
