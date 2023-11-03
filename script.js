$(document).ready(function () {
  var timer = 10;
  var currentScore = 0;
  var highScore = 0;
  var firstNumber;
  var secondNumber;
  var answer; 
  var limit = 10
  function generateEquation () {
    firstNumber = Math.floor(Math.random()*limit);
    secondNumber = Math.floor(Math.random()*limit);
    $('.first-number').text(firstNumber);
    $('.second-number').text(secondNumber);
    answer = firstNumber + secondNumber;
    };

  generateEquation();

  function countdown () {
    var time = setInterval(function () {
      addTime(-1);
      $('#timer').text(timer);
      if (timer == 0) {
        clearInterval(time);
        $('#timer').text('10');
        currentScore = 0;
        $('#current-score').text("Current Score: 0");
      }
    }, 1000);
    timer = 10;
  }

  function addTime (amount) {
    timer += amount;
  }

  function game () {
    timer = 9;
    countdown ();
    $(document).on('keyup', '.answer', function (){
      var userAnswer = $('.answer input').val();
      if (userAnswer == answer) {
        $('.answer input').val('');
        currentScore++;
        addTime(1);
        $('#current-score').text("Current Score: " + currentScore);
        if (currentScore > highScore) {
          highScore = currentScore;
          $('#high-score').text("High Score:" + highScore);
        }
        generateEquation();
      }
    });
  }
  
  $(document).on('click', function() {
    if ($('#timer').text() == 10) {
      game();
    }
  });

  $(document).on('keydown', function() {
    if ($('#timer').text() == 10) {
      game();
    }
  })


})