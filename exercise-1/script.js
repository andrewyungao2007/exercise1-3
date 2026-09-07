function calculate() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);

    document.getElementById("sum").innerHTML = num1 + num2;
    document.getElementById("difference").innerHTML = num1 - num2;
    document.getElementById("product").innerHTML = num1 * num2;
    document.getElementById("quotient").innerHTML = num1 / num2;
}

function clearAll() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";

    document.getElementById("sum").innerHTML = "";
    document.getElementById("difference").innerHTML = "";
    document.getElementById("product").innerHTML = "";
    document.getElementById("quotient").innerHTML = "";
}