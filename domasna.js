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

-1 + 4 * 6;

var x = -1;
var y = 4 * 6;

var z = x + y;

var two = (35 + 5) % 7;
var three = 14 + (-4 * 6) / 11;
var four = 2 + (15 / 6) * 1 - (7 % 2);
console.log(two);
console.log(three);
console.log(four);

// zadaca 7
// a = value1; b = value2
function swapVarValues(nekojaAdresa) {
  var c = nekojaAdresa.imeNaCoek1;
  nekojaAdresa.imeNaCoek1 = nekojaAdresa.imeNaCoek2;
  nekojaAdresa.imeNaCoek2 = c;
  return nekojaAdresa;
}


var solunska11 = {
  imeNaCoek1: 'Ljupco',
  imeNaCoek2: 'Goce',
};

var ime1 = 'Gocee';
var ime2 = 'Ljupcoo';

console.log("a is: ", solunska11.imeNaCoek1);
console.log("b is: ", solunska11.imeNaCoek2);
swapVarValues(solunska11);
console.log("swapping values...");
console.log("a is: ", solunska11.imeNaCoek1);
console.log("b is: ", solunska11.imeNaCoek2);

// zadaca 8

var a = 1;
var b = 2;
var c = 3;
var d = 4;

var e = a + b + c + d;

var f = e / 4;

console.log(f);
