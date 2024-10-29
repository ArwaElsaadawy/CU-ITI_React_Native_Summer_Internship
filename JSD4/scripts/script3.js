
function childW(){
    
    window.myWin = open("","","width=300,height=300");
    myWin.document.write("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur impedit mollitia aut? Harum mollitia, maiores ex inventore illum vel magnam ea delectus perspiciatis nobis alias libero impedit, nesciunt ipsam quam.");
    myInterval = setInterval(function() {
        if (myWin && !myWin.closed) {
            if (myWin.innerHeight + myWin.scrollY < myWin.document.body.scrollHeight) {
                myWin.scrollBy(0, 50);
            } else {
                clearInterval(myInterval);
                myWin.close();
            }
        } else {
            clearInterval(myInterval);
        }
    }, 300); 
        
}