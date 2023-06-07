const typeScreen = document.getElementById("tf");
const boxNum = document.getElementById("numbers");
const boxSym = document.getElementById("symbols");
const symbols = ["+", "-", "*", "/", "%", "(", ")", "."];

//this is the function that creates the number buttons, from 9 to 0
function createNumbers() {
    for (let i = 9; i >= 0; i--){
        const newNum = document.createElement("input");
        newNum.type = "button";
        newNum.value = i;
        newNum.className = "num";

        boxNum.appendChild(newNum);

        newNum.addEventListener("click", () => typeOnScreen(i));
    }

}


//the function that creates the arithmetic symbols
function createSymbols() {
    for (let i = 0; i < symbols.length; i++){
        const symInput = document.createElement("input");
        symInput.type = "button";
        symInput.value = symbols[i];
        symInput.className = "art";

        boxSym.appendChild(symInput);

        symInput.addEventListener("click", () => typeOnScreen(symbols[i]));
    }
}

//this is specifically for the result or equal symbol, wich has a separate logic from the others
function resultEqual() {
    const resultBtn = document.createElement("input");
    resultBtn.type = "button";
    resultBtn.value = "=";
    resultBtn.className = "equal";

    boxSym.appendChild(resultBtn);

    resultBtn.addEventListener("click", () => {
        if (typeScreen.value === ""){
            return "";
        }
        else {
            typeScreen.value = eval(typeScreen.value); 
        }
    });

}

//this is the function that types and concatenates values on the textfield
const typeOnScreen = (input) => typeScreen.value += input;

createNumbers();
createSymbols();
resultEqual();

