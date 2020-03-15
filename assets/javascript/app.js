var timeLeft = 60;
var Questions = [""]
var rightTotal = 0;
var wrongTotal = 0;
var answer;
var unanswered = 0;
var totalQuestions;
var timer;
var timeLeft;

function startGame () {
  timeLeft = 60;
  timer = setInterval (showTime, 1000);
  
}

function showTime () {
  if (timeLeft == 0 ){
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
alert (rightTotal + " " + wrongTotal + " " + unanswered);



document.getElementById("correct").innerHTML = "correct:" + rightTotal;
document.getElementById("incorrect").innerHTML = "incorrect:" + wrongTotal;
document.getElementById("unanswered").innerHTML = "unanswered:" + unanswered;
}
