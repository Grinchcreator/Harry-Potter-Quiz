const usernames = JSON.parse(localStorage.getItem('usernames'))
const finalScore = document.querySelector ('#finalScore')
const user = document.querySelector('#user')
const mostRecentScore = localStorage.getItem('mostRecentScore')
const endtext = document.querySelector ('#end-text')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []
console.log(highScores)

const MAX_HIGH_SCORES = 3

finalScore.innerText = mostRecentScore
user.innerText = usernames



saveHighScores = e => {
e.preventDefault()

const score = {
   score: mostRecentScore,
   username: usernames
}
console.log(score)

highScores.push(score)

highScores.sort((a, b) =>{
    return b.score - a.score
})
highScores.splice (3)

localStorage.setItem('highScores', JSON.stringify(highScores));
}
document.addEventListener('DOMContentLoaded', ()=>{
document.getElementById('saveScoreBtn').addEventListener('click', saveHighScores);})

$(document).ready(function(e) {
      $("#saveScoreBtn").click(function(e) {
      $("#saveScoreBtn").css("display","none")})});
