
const quizIntro = document.querySelector('.quiz-intro');
const startQuizBtn = document.querySelector('#startQuiz');
const quizQuestions = document.querySelector('.quiz-questions');
const questionsArr = document.querySelector('#questionsArr');
const timer = document.querySelector('#timer');
const answerBtn = document.querySelectorAll('.answerBtn');
const quizEnd = document.querySelector('.quiz-end');
const finalScore = document.querySelector('#finalScore');
const submitScoreBtn = document.querySelector('#submit-btn');
const highScores = document.querySelector('.high-scores');
const backBtn = document.querySelector('#back-btn');
const viewScores = document.querySelector('#view-scores-btn');

let processId = 0;
let timerTime = 75;
let questionsIndex = 0;

let myQuestions = [
    {
    question: "What line of code would you use to print to your debugger?",
    answerOptions: ["console.log()", "boolean", "function", "class"],
    answer: "console.log()",
    }, 
    {
    question: "What does coercion mean in regards to programming?",
    answerOptions:["To convert between types", "To eat", "To poop", "To debug"],
    answer: "To convert between types",
    }, 
    {
    question: "Which of the following choices is NOT a for loop clause?",
    answerOptions:["Initialization", "Conditional Test", "Update", "Water bottle"],
    answer: "Water bottle",
    }, 
    {
    question: "What does append mean in regards to programming?",
    answerOptions:["To insert content at the end of a specific element", "To round down", "To round up", "To round across"],
    answer: "To insert content at the end of a specific element",
    }
];

startQuizBtn.addEventListener("click", () => {
    timerTime = 75;
    questionsIndex = 0;
    processId = setInterval(() => {
        timer.textContent = timerTime--
        if (timerTime === -1) {
            clearInterval(processId)
            endQuiz();
        }
    }, 1000);
    quizIntro.setAttribute("class", "quiz-intro hidden");
    quizQuestions.setAttribute("class", "quiz-questions visible");
    getNewQuestion();
});

function getNewQuestion() {
    questionsArr.innerHTML = myQuestions[questionsIndex].question
    for (let i = 0; i < answerBtn.length; i++) {
        answerBtn[i].textContent = myQuestions[questionsIndex].answerOptions[i];
        answerBtn[i].addEventListener("click", nextQuestion)  
    };
};

function nextQuestion() {
    checkAnswer(this.textContent)
    questionsIndex++
    if (questionsIndex < myQuestions.length) {
        getNewQuestion();
    } else {
        clearInterval(processId);
        endQuiz();
    };
};

function checkAnswer(btnText) {
    var answer = myQuestions[questionsIndex].answer
    if (answer === btnText) {
        alert("Correct!")
    } else {
        alert("Wrong!")
        timerTime = timerTime - 10;
    };
};

function endQuiz() {
    quizEnd.setAttribute("class", "quiz-end visible");
    quizQuestions.setAttribute("class", "quiz-questions hidden");
    finalScore.innerHTML = timerTime + 1;
};

submitScoreBtn.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.setItem('highScore', finalScore.innerHTML);
    quizEnd.setAttribute("class", "quiz-end hidden");
    highScores.setAttribute("class", "high-scores visible");
});

backBtn.addEventListener("click", function() {
    highScores.setAttribute("class", "high-scores hidden");
    quizIntro.setAttribute("class", "quiz-intro visible");
});

viewScores.addEventListener("click", function() {
    quizIntro.setAttribute("class", "quiz-intro hidden");
    quizQuestions.setAttribute("class", "quiz-questions hidden");
    quizEnd.setAttribute("class", "quiz-end hidden");
    highScores.setAttribute("class", "high-scores visible");
    timer.textContent = clearInterval(processId);
});

