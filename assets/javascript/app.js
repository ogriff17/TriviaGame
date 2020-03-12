var timeLeft = 60;
var Questions = [""]
var rightTotal = 0;
var wrongTotal = 0;
var answer;



function checkAnswers(){
    alert ("Check Answers");
    //Question1 
   answer = $('input[name=q1]:checked').val();

alert("answer=" + answer)   
if (answer == 4) {
    rightTotal++; 
      
}
else 
  {wrongTotal++;}
  document.getElementById("correct").innerHTML = "correct:" + rightTotal;
  document.getElementById("incorrect").innerHTML = "incorrect:" + wrongTotal;

}
