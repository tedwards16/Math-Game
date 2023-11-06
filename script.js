$(document).ready(function(){
  
  
function equationGenerator () {
    var equation = {};
    var firstNumber = Math.floor(Math.random() * 10);
    var secondNumber = Math.floor(Math.random() * 10);
    console.log(firstNumber);
    console.log(secondNumber);
    var operator = ["*", "+", "-", "/"][Math.floor(Math.random() * 4)]; 
    equation.leftSide = firstNumber + operator + secondNumber;
    equation.rightSide = eval(equation.leftSide);
    return equation;
  }
console.log(equationGenerator());

});