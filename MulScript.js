
function generateProblem(){
  var a = Math.floor((Math.random() * 10) + 1); 
  var b = Math.floor((Math.random() * 10) + 1);
  var op = '*'
  var problem  = a + " " + op + " " + b 
  document.getElementById("problem").innerHTML = problem 
}


function checkAnswer(){

  var problem= document.getElementById("problem").innerHTML;
  var correctAnswer=eval(problem);
  var userAnswer=document.getElementById("answers").value ;
  
  if (userAnswer == correctAnswer){
    alert("Correct Answer 😊");
    generateProblem();
    answers.value=''
  }
  else{
    alert("Wrong Answer 🙁");
    answers.value=''

}

}

window.addEventListener("load", function(){
generateProblem();
})





