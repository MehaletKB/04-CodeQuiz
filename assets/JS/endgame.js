var username = document.querySelector('#username');
var saveScoreButton = document.querySelector('#save-score');
var mostRecentScore = localStorage.getItem('mostRecentScore');
var finalScore = document.querySelector('#final-score');
finalScore.innerText = mostRecentScore;



var allScores = JSON.parse(localStorage.getItem("allScores"));
console.log(allScores);

saveScore = function(event){
    event.preventDefault();

    var scoreCollection = {
        scoreCollection: mostRecentScore,
        name: username.value
    };

    allScores.push(scoreCollection);
    console.log(scoreCollection);

    window.location.assign('./index.html');
};

// change and update