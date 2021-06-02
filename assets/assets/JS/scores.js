var scoresList = document.querySelector('#allScoresList');

var allScores = JSON.parse(localStorage.getItem('allScores') || []);

scoresList.innerHTML = 
    allScores.map(function(allScores){
    return`<li class="score-display">${allScores.name}-${allScores.scoreCollection}</li>`;
})
.join("")