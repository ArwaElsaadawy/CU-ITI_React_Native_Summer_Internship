function register() {
    var username = document.getElementById("N").value;
    var age = document.getElementById("age").value;
    var gender = document.getElementsByName("gender");
    var selectedgender;
    var color = document.getElementById("colorSelect").value; 
    var visitCount = parseInt(getCookie("visitCount")) || 0;


    for (var i = 0; i < 2; i++) {
        if (gender[i].checked) {
            selectedgender = gender[i].value;
            break;
        }
    }

    if (username === "" || age === "" || !selectedgender) {
        alert("Please fill in all fields.");
        return;
    }

    if (isNaN(age) || age <= 0) {
        alert("Please enter a valid age.");
        return;
    } 
    setCookie("userName", username, 3);
    setCookie("age", age, 3);
    setCookie("gender", selectedgender, 3);
    setCookie("colorPreference", color, 3);
    setCookie("visitCount", visitCount, 3); 
    location.href = "Task1p2.html";

}
