var question = document.querySelector('#question');
var choices = Array.from(document.getElementsByClassName('choice-text'));
var timer = document.querySelector('#start-timer')
var score = document.querySelector('#score');


var currentQuestion = {};
// var acceptingAnswers = true;
var questionCounter = 0;
var correctAnswer = 10;
var maxQuestions = 5;

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

startGame = function(){
    questionCounter = 0;
    score = 0;
    playQuestions = [...allQuestionsAnswers];
    timeLeft = 60;
    setInterval(function(){
        if(timeLeft <= 0){
            clearInterval(timeLeft = 0);
        }
        timer.innerText = timeLeft
        timeLeft--},1000)
    getQuestion();
}

getQuestion = function(){
    questionCounter++;
    var questionIndex = '' * playQuestions.length;
    currentQuestion = playQuestions[questionIndex];
    question.innerText = currentQuestion.question;
    // console.log(playQuestions);

    if(playQuestions.length === 0 || questionCounter > maxQuestions){
        // localStorage.setItem('recentScore', score);
        return window.location.assign('./endgame.html');
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
        
        var selectedChoice = event.target;
        var selectedAnswer = selectedChoice.innerText;

        // console.log(selectedAnswer===currentQuestion.answer)

        // if(selectedAnswer===currentQuestion.answer){
        //     $(".result").append("<p>Correct</p>").css('color', 'green').fadeOut('slow');
        // }else{
        //     $(".result").append("<p>Incorrect</p>").css('color', 'red').fadeOut('slow');
        // }

        getQuestion();
    });

});




startGame();
