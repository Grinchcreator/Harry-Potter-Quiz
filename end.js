const usernames = JSON.parse(localStorage.getItem('usernames'))
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector ('#finalScore')
const user = document.querySelector('#user')
const mostRecentScore = localStorage.getItem('mostRecentScore')


const highScores = JSON.parse(localStorage.getItem('highScores')) || []
console.log(highScores)

const MAX_HIGH_SCORES = 3

finalScore.innerText = mostRecentScore
user.innerText = usernames


saveScoreBtn.onclick = 
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

localStorage.setItem('highScores', JSON.stringify(highScores))
window.location.assign('/')
}