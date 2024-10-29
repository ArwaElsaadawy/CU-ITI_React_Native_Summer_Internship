
function typeM(){
    var s = "Hallo at my JS task" 
    var i = 0
    window.myWin = open("","","width=300,height=300");
    myInterval = setInterval(function(){
    if(myWin && !myWin.closed && i < s.length){
            myWin.focus();
            myWin.document.write(s.substring(i, i + 1)); 
            i++;
    }else {
        clearInterval(myInterval);
        myWin.close()
    }
    },300)
}