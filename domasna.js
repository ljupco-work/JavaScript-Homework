// 1-va zadaca

// 1) integer; 2) string 3) string 4) decimal 5) boolean 6) decimal 7) character 8) string 9) boolean 10) ?

// 2 zadaca

var a = "Zdravo";
var b = "Ljupco";

console.log(a);
console.log(b);

// 3 zadaca

var x = 2;
var y = 3;
var z = x + y;

symbol = theSymbolAfterUserClickedCalulatorButton();

console.log(doMathOperation(symbol, 2, 3));

function doMathOperation(operation, number1, number2) {
  switch (operation) {
    case "-":
      return number1 - number2;
    case "+":
      return number1 + number2;
    case "*":
      return number1 * number2;
    case "/":
      return number1 / number2;
    default:
      break;
  }
}
