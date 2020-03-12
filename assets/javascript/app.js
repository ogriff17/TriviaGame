var timeLeft = 60;
var Questions = [""]
var rightTotal = 0;
var wrongTotal = 0;
var answer;
var unanswered = 0;

function checkAnswers(){
    //alert ("Check Answers");
    //Question1 
   answer = $('input[name=q1]:checked').val();

alert("answer=" + answer)   
if (answer == 4){
    rightTotal++;       
}

else if (answer  == null) {
  unanswered++;
}
 else 
  {wrongTotal++;}


//Question2
answer = $('input[name=q2]:checked').val();

alert("answer=" + answer)   
if (answer == 2){
    rightTotal++;       
}

else if (answer  == null) {
  unanswered++;
}
 else 
  {wrongTotal++;}

document.getElementById("correct").innerHTML = "correct:" + rightTotal;
document.getElementById("incorrect").innerHTML = "incorrect:" + wrongTotal;
document.getElementById("unanswered").innerHTML = "unanswered:" + unanswered;
}
