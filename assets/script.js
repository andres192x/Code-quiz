var startButton = document.querySelector("#start");
var quizContainer = document.querySelector (".quiz-container")
var button1 = document.getElementById("op1");
var button2 = document.getElementById("op2");
var button3 = document.getElementById("op3");
var button4 = document.getElementById("op4");

var time= 60
var timerEl= document.querySelector("#timer")

startButton.addEventListener("click", function(event){
    quizContainer.classList.remove("hide");
    startButton.classList.add("hide");
    startTimer()
    nextQuestion();
 })

var questions = [
    {
        question: "Commonly used data types do not include:",
        answers: ["strings","booleans","alert","numbers"],
        correctAnswer: "alert",
},
{
    question: "The condition in an if/else statement is enclosed with _",
    answers: ["quotes","curly brackets","parenthesis","square brackets"],
    correctAnswer: "parenthesis",
},
{
    question: "Arrays in javascript can be used to store:",
    answers: ["number and strings","other arrays","booleans","all of the above"],
    correctAnswer: "all of the above",
},
{
    question: "String values must be enclosed within _ when being assigned to variables.",
    answers: ["commas","curly brackets","quotes","parenthesis"],
    correctAnswer: "quotes",
},

]

var currentQuestionIndex = 0;

function nextQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    var questionContainer=document.querySelector('.question-container')  
    console.log(currentQuestion,'this is the current question')
    console.log(questionContainer,'container was made a variable')

    // var title=document.createElement('h2')
    var title=document.querySelector("#title")

    title.innerText=currentQuestion.question
    console.log(title,'this is the title of current question')
    // questionContainer.appendChild(title)
    //using the currentQuestion object you re going to create a for loop for the options
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const element = currentQuestion.answers[i];
        console.log(element,'this is the current answer')
        const optionBtn = document.getElementById("op"+i)
        optionBtn.textContent= element
    }    
}

function startTimer(){
    var timeHolder= setInterval(function(){
    time--
    console.log(time)
    timerEl.innerText= time  
    },1000)
}

function checkAnswer(event){
var chosenAnswer= event.target.textContent
var correctAnswer= questions[currentQuestionIndex].correctAnswer
if(chosenAnswer===correctAnswer){
    alert("correct")
}
else{
    alert("wrong")
    time-=10
}

//check if right or wrong
currentQuestionIndex++ 
if(questions.length>currentQuestionIndex){
  nextQuestion()
}
//move to next question, increase currentQuestion index, run nextQuestion
}
//game over


// /queryselectors for op1-4
// within nextQuestion()
//          //after we move on to next question, now we want to display answers of questions[index] to op 1-4
//         //repeat process for all of the other ones. (edited) 
// function checkAnswer(){
//    //this function is trigered when a op 1-4 button is clicked
//    //compare the answer of the button to the correct answer of questions[index].correctAnswer
// }


// // //COUNTDOWN TIMER:

// /<!-- Display the countdown timer in an element -->
// <p id="demo"></p>

// <script>
// // Set the date we're counting down to
// var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);






// questionText.textContent = questions[currentQuestion].question
// button1.textContent = question[currentQuestion].answers[1]

// var text = questionText.textContent = questions[0].question

 // questionText.textContent = questions[0].question




















// // Questions will be asked
// const Questions = [{
//     id: 0,
//     q: "What is capital of India?",
//     a: [{ text: "gandhinagar", isCorrect: false },
//         { text: "Surat", isCorrect: false },
//         { text: "Delhi", isCorrect: true },
//         { text: "mumbai", isCorrect: false }
//     ]

// },
// {
//     id: 1,
//     q: "What is the capital of Thailand?",
//     a: [{ text: "Lampang", isCorrect: false, isSelected: false },
//         { text: "phuket", isCorrect: false },
//         { text: "Ayutthaya", isCorrect: false },
//         { text: "Bangkok", isCorrect: true }
//     ]

// },
// {
//     id: 2,
//     q: "What is the capital of Gujarat",
//     a: [{ text: "surat", isCorrect: false },
//         { text: "vadodara", isCorrect: false },
//         { text: "gandhinagar", isCorrect: true },
//         { text: "rajkot", isCorrect: false }
//     ]

// }

// ]

// // Set start
// var start = true;

// // Iterate
// function iterate(id) {

// // Getting the result display section
// var result = document.getElementsByClassName("result");
// result[0].innerText = "";

// // Getting the question
// const question = document.getElementById("question");


// // Setting the question text
// question.innerText = Questions[id].q;

// // Getting the options
// const op1 = document.getElementById('op1');
// const op2 = document.getElementById('op2');
// const op3 = document.getElementById('op3');
// const op4 = document.getElementById('op4');


// // Providing option text
// op1.innerText = Questions[id].a[0].text;
// op2.innerText = Questions[id].a[1].text;
// op3.innerText = Questions[id].a[2].text;
// op4.innerText = Questions[id].a[3].text;

// // Providing the true or false value to the options
// op1.value = Questions[id].a[0].isCorrect;
// op2.value = Questions[id].a[1].isCorrect;
// op3.value = Questions[id].a[2].isCorrect;
// op4.value = Questions[id].a[3].isCorrect;

// var selected = "";

// // Show selection for op1
// op1.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightgoldenrodyellow";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op1.value;
// })

// // Show selection for op2
// op2.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightgoldenrodyellow";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op2.value;
// })

// // Show selection for op3
// op3.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightgoldenrodyellow";
//     op4.style.backgroundColor = "lightskyblue";
//     selected = op3.value;
// })

// // Show selection for op4
// op4.addEventListener("click", () => {
//     op1.style.backgroundColor = "lightskyblue";
//     op2.style.backgroundColor = "lightskyblue";
//     op3.style.backgroundColor = "lightskyblue";
//     op4.style.backgroundColor = "lightgoldenrodyellow";
//     selected = op4.value;
// })

// // Grabbing the evaluate button
// const evaluate = document.getElementsByClassName("evaluate");

// // Evaluate method
// evaluate[0].addEventListener("click", () => {
//     if (selected == "true") {
//         result[0].innerHTML = "True";
//         result[0].style.color = "green";
//     } else {
//         result[0].innerHTML = "False";
//         result[0].style.color = "red";
//     }
// })
// }

// if (start) {
// iterate("0");
// }

// // Next button and method
// const next = document.getElementsByClassName('next')[0];
// var id = 0;

// next.addEventListener("click", () => {
// start = false;
// if (id < 2) {
//     id++;
//     iterate(id);
//     console.log(id);
// }

// })
