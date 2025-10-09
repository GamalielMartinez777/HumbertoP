let btnS = document.getElementById("suma");
let btnR = document.getElementById("resta");
let btnM = document.getElementById("multi");
let btnD = document.getElementById("divi");

function suma() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 + num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function resta() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 - num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function multi() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let resultado = num1 * num2;
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}

function divi() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    if (num2 === 0) {
        document.getElementById("resultado").innerText = "Error: División por cero";
    } else {
        let resultado = num1 / num2;
        document.getElementById("resultado").innerText = "Resultado: " + resultado;
    }
}

btnS.addEventListener("click", suma);
btnR.addEventListener("click", resta);
btnM.addEventListener("click", multi);
btnD.addEventListener("click", divi);