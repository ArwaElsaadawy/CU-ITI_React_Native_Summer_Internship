var regName = /^[a-zA-Z]+$/ ;
var regmobile = /^(010|011|012){1}[0-9]{8}$/;
var regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
function checkinput(){
    if (!regmobile.test(document.getElementById("mobile").value.trim()) || !regEmail.test(document.getElementById("email").value.trim()) || 
        !regName.test(document.getElementById("name").value.trim())){
            location.reload();
    }

}