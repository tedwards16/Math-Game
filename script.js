$(document).ready(function(){
  var currentScore = 0;
  var highScore = 0;
  var interval;
  var timeLeft = 10;

  var updateTimeLeft = function (amount) {
    timeLeft += amount;
    $('#time-left').text(timeLeft);
  };

  var startGame = function () {
    if (!interval) {
      if (timeLeft === 0) {
        updateTimeLeft(10);
        currentScore = 0;
      }
      interval = setInterval(function () {
        updateTimeLeft(-1);
        if (timeLeft === 0) {
          clearInterval(interval);
          interval = undefined;
        }
      }, 1000);
    }
  }

  var operators = ["+"];
  $('input[id = "addition"]').click(function () {
    if (this.checked) {
      operators.push("+");
    }
    else {
      operators.splice((operators.indexOf("+")),1);
    }
  });
  $('input[id = "subtraction"]').click(function () {
    if (this.checked) {
      operators.push("-");
    }
    else {
      operators.splice((operators.indexOf("-")),1);
    }
  });
  $('input[id = "multiplication"]').click(function (){
    if (this.checked) {
      operators.push("*");
    }
    else {
      operators.splice((operators.indexOf("*")),1);
    }
  })
  $('input[id = "division"]').click(function (){
    if (this.checked) {
      operators.push("/");
    }
    else {
      operators.splice((operators.indexOf("/")),1);
    }
  })

  
  
  function equationGenerator () {
    var equation = {};
    var firstNumber = Math.floor(Math.random() * 10);
    var secondNumber = Math.floor(Math.random() * 10);
    var operator = operators[Math.floor(Math.random() * (operators.length))];
    while ((operator == "/" && secondNumber == 0) || (operator == "/" && firstNumber == 0) || (operator == "/" &&  firstNumber%secondNumber !== 0) || (operator == "-" && firstNumber < secondNumber)) {
      firstNumber = Math.floor(Math.random() * 10);
    }
    equation.leftSide = firstNumber + operator + secondNumber;
    equation.rightSide = eval(equation.leftSide);
    return equation;
  }
  
  var currentEquation = equationGenerator();
  $("#equation").text(currentEquation.leftSide);
  
  var correctAnswer = Number(currentEquation.rightSide);

  var checkAnswer = function () {
    var userInput = $(".userInput").val();
    if (correctAnswer == userInput) {
      currentEquation = equationGenerator();
      correctAnswer = Number(currentEquation.rightSide);
      $("#equation").text(currentEquation.leftSide);
      $(".userInput").val("");
      currentScore++;
      timeLeft++;
      $("#current-score").text("Current Score: " + currentScore);
      if (currentScore > highScore) {
        highScore = currentScore;
        $("#high-score").text("High Score: " + currentScore);
      }
    }
  };

  $(".userInput").on('click', function() {
    startGame();
  });

  $(".userInput").on('keyup', function() {
      startGame();
      checkAnswer();
  });

});