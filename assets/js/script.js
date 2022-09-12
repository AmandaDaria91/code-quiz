var startBtn = document.getElementById("startQuiz")

function startQuiz () {
    document.getElementById("mainArea").setAttribute("style", "display:none;")
    document.getElementById("questionArea").setAttribute("style", "display: block;")
    //display changes
    showQuestions()
    // timerStarts()
}

function showQuestions() {
    
}

startBtn.addEventListener("click", startQuiz)