var username = document.querySelector('#username');
var saveScoreButton = document.querySelector('#save-score');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var finalScore = document.querySelector('#final-score');
finalScore.innerHTML = mostRecentScore;


username.addEventListener('keypress', function(event){
    saveScoreButton.disabled = !username.value;
});


saveScore = function(event){
    console.log("it's clicked");
    event.preventDefault();
}