$(document).ready(function(){
  var operator = {
    "+": 0,
    "-": 1,
    "*": 2,
    "/": 3,
  };
  
function equationGenerator () {
    var equation = {};
    var firstNumber = Math.floor(Math.random() * 10);
    var secondNumber = Math.floor(Math.random() * 10);
    console.log(firstNumber);
    console.log(secondNumber);
    operator = Object.keys(operator)[Math.floor(Math.random() * 4)];
    while ((operator == "/" && secondNumber == 0) || (operator == "/" &&  firstNumber%secondNumber !== 0) || (operator == "-" && firstNumber < secondNumber)) {
      firstNumber = Math.floor(Math.random() * 10);
    }
    equation.leftSide = firstNumber + operator + secondNumber;
    equation.rightSide = eval(equation.leftSide);
    return equation;
  }
console.log(equationGenerator());

});