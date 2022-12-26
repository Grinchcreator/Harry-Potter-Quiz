const question = document.querySelector ('#question');
const choices = Array.from(document.querySelectorAll ('.choice-text'));
const scoreText = document.querySelector('#score');
const progressText = document.querySelector ('#progressText');
const progressBarFull = document.querySelector ('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
{
question: "What does Harry accidentally do when he goes to the zoo?",
choice1: "Turns a flamingo blue",
choice2: "Make the glass in the snake enclosure disappear",
choice3: "Teaches the monkeys to sing",
choice4: "Turns a meerkat into a football",
answer: 2,
},

{
question: "What's Harry's mum Lily's surname before she marries Harry's dad?",
choice1: "Peters",
choice2: "Smith",
choice3: "Evans",
choice4: "Collins",
answer: 3,
},

{
question: "Which of these is NOT a book by Gilderoy Lockhart?",
choice1: "Travels With Trolls",
choice2: "Year With A Yeti",
choice3: "Zumba with a Zombie",
choice4: "Holidays With Hags",
answer: 3,
},

{
question: "In which year was Harry born?",
choice1: '1991',
choice2: '2000',
choice3: '1976',
choice4: '1980',
answer: 4,
},

{
question: "What make is the flying car in Harry Potter?",
choice1: "Ford Anglia",
choice2: "A Mini",
choice3: "Chevvy",
choice4: "Skoda",
answer: 1,
}
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startQuiz = () => {
questionCounter = 0
score = 0
availableQuestions = [...questions]
getNewQuestion()
}

getNewQuestion = () => {
if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign ('end.html')
}

questionCounter++
progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

const questionsIndex = Math.floor (Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice =>{
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})

availableQuestions.splice (questionsIndex, 1)

acceptingAnswers = true
}

choices.forEach (choice =>{
    choice.addEventListener('click', e =>{
    if (!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if (classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
    }

    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout (() =>{
    selectedChoice.parentElement.classList.remove(classToApply)
    getNewQuestion()
    }, 1000)
    })
})

incrementScore = num => {
    score+= num
    scoreText.innerText = score
}

startQuiz()