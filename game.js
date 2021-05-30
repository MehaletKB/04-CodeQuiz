var question = document.querySelector('#question');
var choices = Array.from(document.getElementsByClassName('choice-text'));

var currentQuestion = {};
var acceptingAnswers = true;
var score = 0;
var questionCounter = 0;
var correctAnswer = 10;

var allQuestionsAnswers = [
    {
    question: "Commonly used data types DO NOT include:",
    choice1:"strings", 
    choice2: "booleans", 
    choice3: "alerts", 
    choice4: "numbers",
    answer: "alerts",
    },

    {
    question: "The condition in an if / else statement is enclosed within ____.",
    choice1: "quotes", 
    choice2: "curly brackets", 
    choice3: "parentheses", 
    choice4: "square brackets",
    answer: "parentheses",
    },

    {
    question: "Arrays in JavaScript can be used to store ____.",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: "all of the above"
    },

    {
    question:"String values must be enclosed within ____ when being assigned to variables.",
    choice1: "quotes", 
    choice2: "curly brackets", 
    choice3: "commas",
    choice4: "parentheses",
    answer: "quotes"
    },

    {
    question:"A very useful tool used during development and debugging for printing content to the debugger is:",
    choice1: "JavaScript", 
    choice2: "terminal / bash", 
    choice3: "for loops", 
    choice4: "console.log",
    answer: "console.log"
    }
]; 

// var questions = [
//     {
//     question: "Commonly used data types DO NOT include:",
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
//     },

//     {
//     question: "The condition in an if / else statement is enclosed   within ____.",
//     choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
//     answer: "parentheses"
//     },

//     {
//     question: "Arrays in JavaScript can be used to store ____.",
//     choices: ["numbers and strings","other arrays","booleans","all of the above" ],
//     answer: "all of the above"
//     },

//     {
//     question:"String values must be enclosed within ____ when being assigned to variables.",
//     choices: ["commas", "curly brackets", "quotes", "parentheses"],
//     answer: "quotes"
//     },

//     {
//     question:"A very useful tool used during development and debugging for printing content to the debugger is:",
//     choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
//     answer: "console.log"
//     }
// ];

startGame = function(){
    questionCounter = 0;
    score = 0;
    playQuestions = [...allQuestionsAnswers];
    // console.log(playQuestions);
    getQuestion();
}

getQuestion = function(){
    questionCounter++;
    var questionIndex = '' * playQuestions.length;
    currentQuestion = playQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    // console.log(playQuestions);

    if(playQuestions.length === 0 ){
        return document.location.href('./endgame.html');
    }
    choices.forEach(function(choice) {
        var questionNumber = choice.dataset['choicenumber'];
        choice.innerText = currentQuestion['choice' + questionNumber];
    });

    playQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;

}

choices.forEach(function(choice) {
    choice.addEventListener('click', function(event){
        if(!acceptingAnswers){
            return;
        }

        acceptingAnswers = false;
        var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.innerText;

        console.log(selectedAnswer===currentQuestion.answer);
        
        getQuestion();

    });

});




startGame();
