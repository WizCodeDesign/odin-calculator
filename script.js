function operate () {
    let n1 = parseFloat(prompt("Enter the first number:"));
    let operator = prompt("Enter an operator (+, -, *, /):");
    let n2 = parseFloat(prompt("Enter the second number:"));
    switch (operator) {
        case '+':
            result = n1 + n2;
            document.getElementById("display").innerHTML = result;
            break;
        case '-':
            result = n1 - n2;
            document.getElementById("display").innerHTML = result;
            break;
        case '*':
            result = n1 * n2;
            document.getElementById("display").innerHTML = result;
            break;
        case '/':
            if (n2 === 0) {
                alert("Cannot divide by zero");
                return null;
            }
            result = n1 / n2;
            document.getElementById("display").innerHTML = result;
            break;
        default:
            return null;
    }
};

alert("Welcome to the Odin Calculator!");
document.getElementById("display").innerHTML = result;