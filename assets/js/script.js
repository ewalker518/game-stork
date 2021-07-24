var startButtonEl = document.getElementById("start-btn");
var questionsEl = document.getElementById("questions");
var choicesEl = document.getElementById("choices");
var questionArray = 0;

var questions = [
    {
        question: "What is the capital of Assyria?",
        choices: ["Damascus", "I don't know that"],
    },
    {
        question: "",
        choices: ["", ""],
        answer: ""
    },
    {
        question: "",
        choices: ["", ""],
        answer: ""
    },
    {
        question: "",
        choices: ["", ""],
        answer: ""
    },
    {
        question: "",
        choices: ["", ""],
        answer: ""
    }
];

function startQuiz() {
    console.log("quiz started");
    // hide the stuff in the start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");

    // unhide the stuff in the questions screen
    questionsEl.removeAttribute("class", "hide");
    
    // run the questions script
    showQuestions();
};

function showQuestions() {
    // get the question from the array
    var currentQuestion = questions[questionArray];
    var questionTitleEl = document.getElementById("question-title");

    // set the title for the current question
    questionTitleEl.textContent = currentQuestion.question;

    // set the choices for the question
    currentQuestion.choices.forEach(function(choice) {
    var choiceButton = document.createElement("button");
    choiceButton.setAttribute("class", "choice is-danger is-medium");
    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = choice;

    choiceButton.onclick = questionClick;

    choicesEl.appendChild(choiceButton);
    });
}

function questionClick() {
    // clear previous questions
    choices.innerHTML = "";

    timerEl.textContent = time;

    questionArray++;

    // after all of the questions are finished, end the quiz
    if (questionArray === questions.length) {
        endQuiz();
        
    } else {
        showQuestions();
    }
}

startButtonEl.onclick = startQuiz;