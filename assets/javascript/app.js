var timeLeft = 60;
var Questions = [""]
var rightTotal = 0;
var wrongTotal = 0;
var answer;
var unanswered = 0;
var totalQuestions;
var timer;
var timeLeft;

function hideQuestions () {
  document.getElementById("question1").style.display = 'none';
  document.getElementById("question2").style.display = 'none';
  document.getElementById("question3").style.display = 'none';
  document.getElementById("question4").style.display = 'none';
  document.getElementById("question5").style.display = 'none';
  document.getElementById("question6").style.display = 'none';
  document.getElementById("question7").style.display = 'none';
  document.getElementById("question8").style.display = 'none';
  document.getElementById("question9").style.display = 'none';
  document.getElementById("question10").style.display = 'none';
}
hideQuestions ();

function startGame () {
  timeLeft = 60;
  timer = setInterval (showTime, 1000);
  document.getElementById("question1").style.display = 'block';
  document.getElementById("question2").style.display = 'block';
  document.getElementById("question3").style.display = 'block';
  document.getElementById("question4").style.display = 'block';
  document.getElementById("question5").style.display = 'block';
  document.getElementById("question6").style.display = 'block';
  document.getElementById("question7").style.display = 'block';
  document.getElementById("question8").style.display = 'block';
  document.getElementById("question9").style.display = 'block';
  document.getElementById("question10").style.display = 'block';
 $(':radio').prop('checked', false);
} 

function showTime () {
  if (timeLeft == 0 ){
    alert("Time's up! You lose!");
    clearInterval(timer);
  }
  document.getElementById("timeLeft").innerHTML = "Time Remaining:" + timeLeft;
  timeLeft--;
}

function checkAnswers(){   
rightTotal = $('input[value=r]:checked').length;
wrongTotal = $('input[value=w]:checked').length;
totalQuestions = $(':radio').length / 4; 
unanswered = totalQuestions - rightTotal - wrongTotal;
clearInterval(timer);



document.getElementById("correct").innerHTML = "correct: " + rightTotal;
document.getElementById("incorrect").innerHTML = "incorrect: " + wrongTotal;
document.getElementById("unanswered").innerHTML = "unanswered: " + unanswered;
}
