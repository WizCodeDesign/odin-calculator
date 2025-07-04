
let operation = {
        numb1 : null,
        numb2 : null,
        operator : null,
    }
function calculate (x){
    
    if(operation[0] == null || operation[1] == null || operation[2] 
        == null){
        if(x == '*' || x == '-' || x == '+' || x == '/' &&
            operation.operator == null) {
            operation[2] = x;
            document.getElementById("display").value = 
            operation[0] + ' ' + operation[2] + ' ' + operation[1];
        }
        if(typeof x === 'number' && operation[0] == null){
            i = 0; 
            operation[i] = x;
            document.getElementById("display").value = operation[i];
            i++;
        } else if (typeof x === 'number' && operation[0] != null &&
            operation[1] == null){
            operation[i] = x;
            document.getElementById("display").value =
            operation[0] + ' ' + operation[2] + ' ' + operation[1];
        }
    } else if (x == '=' && operation[0] != null && operation[1] != null
        && operation[2] != null){
        operate(operation[0], operation[1], operation[2]);
        
    }

    

}

/*function calculate (input) {
    let number1;
    let number2;
    let operator = '';
    if(number1 === '' && number2 === ''){
        number1 = input;
    } else if (number1 !== '' && number2 === ''){
        number2 = input;
    } else if (number1 !== '' && number2 !== '' && operator === ''){
        operator = input;
    } 

}*/

function operate (n1, n2 , operator) {
    switch (operator) {
        case '+':
            result = n1 + n2;
            document.getElementById("display").value = result;
            break;
        case '-':
            result = n1 - n2;
            document.getElementById("display").value = result;
            break;
        case '*':
            result = n1 * n2;
            document.getElementById("display").value = result;
            break;
        case '/':
            if (n2 === 0) {
                alert("Cannot divide by zero");
                return null;
            }
            result = n1 / n2;
            document.getElementById("display").value = result;
            break;
        default:
            return null;
    }
}

function cleared (x){
    if(x == 'AC'){
    document.getElementById("display").value = null;
    operation[0] = null;
    operation[1] = null;
    operation[2] = null;
    }
    else if (x == 'C'){
    operator[1] = null;
        

    }
}

document.addEventListener("keydown", function (event){
    if(event.key == '*' || event.key == '-' || event.key
         == '+' || event.key == '/' && operation[2] == null){
            calculate(event.key);
         }
    else if(event.key >= 0 && event.key < 10){
        calculate(parseInt(event.key));
    }
    else if (event.key == '='){
        calculate(event.key);
    } else if (event.key == "Backspace"){
        if(document.getElementById('display').value != null){
        value = document.getElementById('display').value;
        document.getElementById('display').value = 
        value.substr(0,value.length -2); 
        }
         else {
                alert("Nothing to delete, please input a number first");
            }
    }
})