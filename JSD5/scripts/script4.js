function EnterNumber(num){
    var answer = document.getElementById("Answer").value
    var lastdig = answer[answer.length-1]
    if (answer.includes("=")) {
        document.getElementById("Answer").value =""
    }
    if (!(lastdig == '.' && num == '.')) {     
        document.getElementById("Answer").value += num;  
    }
}

function EnterClear(){
    document.getElementById("Answer").value = ""
}

function EnterOperator(operator){
    var regex = /[/*\-+]/;
    var answer = document.getElementById("Answer").value
    var lastdig = regex.test(answer[answer.length-1])

        if (answer.includes("=")) {
            document.getElementById("Answer").value =  answer.substring(answer.indexOf("=") + 1) + operator;
        }else if (lastdig) {
            document.getElementById("Answer").value = answer.substring(0,document.answer.length-1) + operator;
        }else{           
            document.getElementById("Answer").value += operator;
        }

}

function EnterEqual(){
    var result = eval(document.getElementById("Answer").value)
    document.getElementById("Answer").value += '=' + result;
    
}