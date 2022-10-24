var startButton = document.querySelector("#start");
var quizContainer = document.querySelector(".quiz-container")
var button1 = document.getElementById("op1");
var button2 = document.getElementById("op2");
var button3 = document.getElementById("op3");
var button4 = document.getElementById("op4");
var timeHolder;

var time = 60;
var timerEl = document.querySelector("#timer")

startButton.addEventListener("click", function (event) {
    quizContainer.classList.remove("hide");
    startButton.classList.add("hide");
    startTimer();
    nextQuestion();
})

var questions = [
    {
        question: "Commonly used data types do not include:",
        answers: ["strings", "booleans", "alert", "numbers"],
        correctAnswer: "alert",
    },
    {
        question: "The condition in an if/else statement is enclosed with _",
        answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        correctAnswer: "parenthesis",
    },
    {
        question: "Arrays in javascript can be used to store:",
        answers: ["number and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    },
    {
        question: "String values must be enclosed within _ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correctAnswer: "quotes",
    },

]

var currentQuestionIndex = 0;

function nextQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var questionContainer = document.querySelector(".question-container")
    console.log(currentQuestion, 'this is the current question')
    console.log(questionContainer, 'container was made a variable')


    var title = document.querySelector("#title")

    title.innerText = currentQuestion.question
    console.log(title, 'this is the title of current question')


    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const element = currentQuestion.answers[i];
        console.log(element, 'this is the current answer')
        const optionBtn = document.getElementById("op" + i)
        optionBtn.textContent = element
    }
}

function startTimer() {
    timeHolder = setInterval(function () {
        time--
        console.log(time)
        timerEl.innerText = time
        if (time <= 0) {
            endQuiz()
        }
    }, 1000)
}
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");
var submitName = document.getElementById("submit-name");




function endQuiz() {
    clearInterval(timeHolder)
    var questionContainer = document.querySelector(".question-container");
    quizContainer.setAttribute("class", "hide");
    title.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    finalScore.textContent = time
}

function saveScore() {
    var scoreArray = JSON.parse(localStorage.getItem("scores")) || []

    var newScore = {
        name: initials.value,
        score: time
    }
    scoreArray.push(newScore)
    localStorage.setItem("scores", JSON.stringify(scoreArray))
}

submitName.onclick = saveScore
function showScores() {
    var scoreArray = JSON.parse(localStorage.getItem("scores")) || []
    scoreArray.forEach(element => {
        var scoreItem = document.createElement("li")
        scoreItem.textContent = "name: " + element.name + " " + "score: " + element.score
        document.getElementById("score-list").append(scoreItem)
    });
}

showScores();

function checkAnswer(event) {
    var chosenAnswer = event.target.textContent
    var correctAnswer = questions[currentQuestionIndex].correctAnswer
    if (chosenAnswer === correctAnswer) {
        alert("correct")
    }
    else {
        alert("wrong")
        time -= 10
    }

    currentQuestionIndex++
    if (currentQuestionIndex === questions.length) {
        endQuiz();
    }
    else {
        nextQuestion();
    }
}

