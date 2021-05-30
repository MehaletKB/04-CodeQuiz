var question = document.querySelector('#question');
var choices = Array.from(document.getElementsByClassName('choice-text'));

var currentQuestion = {};
// var acceptingAnswers = true;
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
    answer: "alerts"
    },

    {
    question: "The condition in an if / else statement is enclosed within ____.",
    choice1: "quotes", 
    choice2: "curly brackets", 
    choice3: "parentheses", 
    choice4: "square brackets",
    answer: "parentheses"
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
    choice1: "commas", 
    choice2: "curly brackets", 
    choice3: "quotes",
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
    // choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    }
]; 


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

    choices.forEach(function(choice) {
        var questionNumber = choice.dataset['choicenumber'];
        choice.innerText = currentQuestion['choice' + questionNumber];
    });

    playQuestions.splice(questionIndex, 1)

    // acceptingAnswers = true;

}

choices.forEach(function(choice) {
    choice.addEventListener('click', function(event){
        // if(!acceptingAnswers){
        //     return;
        // }
        var selectedChoice = event.target;


        getQuestion();

        // console.log(event.target);
    });

});




startGame();
