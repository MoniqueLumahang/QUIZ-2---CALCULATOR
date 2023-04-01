function calculator(){
    
    let operator = document.getElementById("operator").value;
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;

    numberOne = Number(numberOne);
    numberTwo = Number(numberTwo);

    let result = document.getElementById("result")

    switch(operator){
        case '+': 
            result.innerHTML = numberOne + numberTwo;
            break;
        case '-':
            result.innerHTML = numberOne - numberTwo;
            break;
        case '*':
            result.innerHTML = numberOne * numberTwo;
            break;
        case '/':
            result.innerHTML = numberOne / numberTwo;
            break;
        default:
            result.innerHTML = "Please Try Again"   
    }
}