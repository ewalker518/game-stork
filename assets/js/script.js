var questionsEl = document.getElementById("questions"); //references the different questions with the choices
var questionChoices = document.getElementById("choices"); //references the different choices, choices will act like submit button as well
var titleEl = document.getElementById("questiontitle");


//var submitButton = document.getElementById("submit"); //XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX IF YOU WANT TO LINK TO ANOTHER HTML PAGE



function startQuiz() { //what happens when you press the start quiz button
  var startScreenEl = document.getElementById("start-screen"); //select the first page html
  startScreenEl.setAttribute("class", "hide"); // references the css stylesheet, display: none .....so this hides the initial page

  questionsEl.removeAttribute("class"); // this will display the questions
  
  getQuestion();  //transitional function to next function
}

function getQuestion() {
  var currentQuestion = questions[questionsIndex]; //XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX this is for the api's YOU CAN CHANGE THE QUESTION INDEX TO YOUR API

  var titleEl = document.getElementById("questiontitle");
  titleEl.textContent = currentQuestion.title;


  questionChoices.innerHTML = ""; //delete old choices

  
  currentQuestion.choices.forEach(function(choice, i) {  // create a loop to actually add in the new choices https://stackoverflow.com/questions/56024232/use-the-foreach-function-to-add-option-elements-to-select-html-element    
    //because the old choices are deleted this will add brand new choices into the mix, it doesnt replace the values, rather it hides the values and unhides new values which are in the array https://utah.bootcampcontent.com/utah-coding-bootcamp/uofu-virt-bo-fsf-pt-06-2021-u-b/-/tree/master/04-Web-APIs/02-Challenge
    var loopChoices = document.createElement("button");
    loopChoices.setAttribute("class", "choice");
    loopChoices.setAttribute("value", choice);

    loopChoices.textContent = i + 1 + ". " + choice;   //https://www.youtube.com/watch?v=49pYIMygIcU  its like 40 minutes long and they didn't section it out but its full of good information

    
    loopChoices.onclick = onButtonClick; 

    questionChoices.appendChild(loopChoices); // puts the values on the page //XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX PROBABLY GOING TO NEED TO CHANGE/DELETE THIS FOR API
  });
}

function onButtonClick() {

  //XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX this is for the api's

  questionsIndex++; // this moves the question along!!!!!!

  if (questionsIndex === questions.length) {
    endQuiz();
  } else {
    getQuestion();
  }
}

function endQuiz() {  

  var finalResults = document.getElementById("finalresults");
  finalResults.removeAttribute("class"); // this will display the final results
  
  questionsEl.setAttribute("class", "hide");   //hide questions
  

  //XXXXXXXXXX PLACE HOLDER FOR JESSIE AND TRENT XXXXXXXXXXX 
  //var scoreEl = document.getElementById("score");   //display final score
  //scoreEl.textContent = time;

}

//XXXXXXXXXX JESSIE AND TRENT XXXXXXXXXXX IF YOU WOULD LIKE TO LINK TO ANOTHER HTML FILE FOR THE GOOGLE MAPS 
//function showHighScores() {
    //this is where we GET the highscores from localstorage
    //var highScores = JSON.parse(window.localStorage.getItem("highScores")) || []; //https://stackoverflow.com/questions/60037063/how-to-save-scores-in-javascript-quiz
    //formats the scores into two different sections to store them appropriately 
    //var quizResults = {
    //  score: time, 
    //  initials: initials
    //};
    //this pushes the newly formatted scores to local storage for future reference 
    //highScores.push(quizResults);
    //window.localStorage.setItem("highScores", JSON.stringify(highScores));

    //window.location.href = "highscore.html";   //this will take us to the separate html page
//}
//submitButton.onclick = showHighScores;
startButton.onclick = startQuiz; //this starts the quiz