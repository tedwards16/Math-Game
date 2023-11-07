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
    var operator = "+"
    while ((operator == "/" && secondNumber == 0) || (operator == "/" &&  firstNumber%secondNumber !== 0) || (operator == "-" && firstNumber < secondNumber)) {
      firstNumber = Math.floor(Math.random() * 10);
    }
    equation.leftSide = firstNumber + operator + secondNumber;
    equation.rightSide = eval(equation.leftSide);
    return equation;
  }
  
  var currentEquation = equationGenerator();

  $("#equation").text(currentEquation.leftSide)

  var correctAnswer = Number(currentEquation.rightSide);

  function newEquation() {
    currentEquation = equationGenerator();
    $("#equation").text(currentEquation.leftSide);
  }
  $(".userInput").on('keyup', function() {
    var userInput = $(".userInput").val();
    if (correctAnswer == userInput) {
      currentEquation = equationGenerator();
      correctAnswer = Number(currentEquation.rightSide);
      $("#equation").text(currentEquation.leftSide);
      $(".userInput").val("");
    }
  });

});