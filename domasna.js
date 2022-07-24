// 1-va zadaca

// 1) integer; 2) string 3) string 4) decimal 5) boolean 6) decimal 7) character 8) string 9) boolean 10) ?

// 2 zadaca

var a = "Zdravo";
var b = "Ljupco";

console.log(a);
console.log(b);

// 3 zadaca i 4 zadaca

var x = 2;
var y = 3;
var z = x + y;

console.log(doMathOperation("\\", 2, 3));

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

// zadaca 5

function convertEuroToDenari(euroAmount) {
  console.log(euroAmount * 61.5);
}

convertEuroToDenari(100);

// zadaca 6

-1 + 4 * 6

var x = -1;
var y = 4*6;

var z = x + y;

console.log(z);

// zadaca 8

var a = 1;
var b = 2;
var c = 3;
var d = 4;

var e = a + b + c + d;

var f = e/4;

console.log(f);