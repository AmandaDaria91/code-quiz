var startBtn = document.getElementById("startQuiz")
var questions= 
[
    {
        prompt: "What's up?",
        choices: ["Not much", "The sky", "buterkup", "dog"],
        answer: "dog"
    },
    {
        prompt: "What's Down?",
        choices: ["Yes", "The sky", "buterkup", "dog"],
        answer: "dog"
    },
    {
        prompt: "How's Down?",
        choices: ["No", "The sky", "buterkup", "dog"],
        answer: "dog"
    },
]
var currentQ;

function startQuiz () {
    document.getElementById("mainArea").setAttribute("style", "display:none;")
    document.getElementById("questionArea").setAttribute("style", "display: block;")
    //display changes
    currentQ = 0;
    showQuestions()
    // timerStarts()
}

function showQuestions() {
    document.getElementById("question").textContent = questions[currentQ].prompt
    document.getElementById("optionOne").textContent = questions[currentQ].choices[0]
    document.getElementById("optionTwo").textContent = questions[currentQ].choices[1]
    document.getElementById("optionThree").textContent = questions[currentQ].choices[2]
    document.getElementById("optionFour").textContent = questions[currentQ].choices[3]
}

function checkAnswer(event) {
    //this is where you will handle points and time going down
    console.log(event.target.textContent)

    currentQ++;
    if(currentQ < questions.length) {
        showQuestions()
    }
}

startBtn.addEventListener("click", startQuiz)
document.getElementById("optionOne").addEventListener("click",checkAnswer)
document.getElementById("optionTwo").addEventListener("click",checkAnswer)
document.getElementById("optionThree").addEventListener("click",checkAnswer)
document.getElementById("optionFour").addEventListener("click",checkAnswer)