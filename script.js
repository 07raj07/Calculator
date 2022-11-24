function clearScreen(){
    document.getElementById('result').value = "";
}

function display(value){
    document.getElementById("result").value += value;
}

function calculate(){
    let p = document.getElementById("result").value;
    let q =eval(p);
    document.getElementById("result").value=q
}



function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    if(num2==0){
        return 'not possible';
    }
    return num1/num2;
}

function operate(operator){
    if(operator=="+") return add(num1,num2);
    if(operator=="-") return subtract(num1,num2);
    if(operator=="*") return multiply(num1,num2);
    if(operator=="/") return divide(num1,num2);
}

