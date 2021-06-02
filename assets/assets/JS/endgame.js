var username = document.querySelector('#username');
var saveScoreButton = document.querySelector('#save-score');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var finalScore = document.querySelector('#final-score');


var allScores = JSON.parse(localStorage.getItem('allScores')) || [];

finalScore.innerText = mostRecentScore;


saveScore = function(event){
    event.preventDefault();

    var scoreCollection = {
        scoreCollection: mostRecentScore,
        name: username.value};

        
    allScores.push(scoreCollection);
    
    localStorage.setItem('allScores', JSON.stringify(allScores));

    setTimeout(function(){
        window.location.href = './index.html';
    }, 1000);
}