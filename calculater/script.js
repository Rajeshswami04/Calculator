
const screen = document.querySelector(".ioscreen");
const buttons = document.querySelectorAll(".buttonbox button");

let expression = ""; // 

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.innerText;

        if (value === "Enter") {
            try {
                const result = evaluateExpression(expression);
                screen.innerText = result;
                expression = result.toString(); 
            } catch (error) {
                screen.innerText = "Error";
                expression = "";
            }
        } else if (value === "BACK") {
            expression = expression.slice(0, -1);
            screen.innerText = expression;
        } else if (value === "Square") {
            expression += "**2";
            screen.innerText = expression;
        } else if (value === "Inverse") {
            expression += "**-1";
            screen.innerText = expression;
        } else {
            expression += value;
            screen.innerText = expression;
        }
    });
});


function evaluateExpression(expr) {
    
    return Function('"use strict"; return (' + expr + ')')();
}
