var timeLeft = 30;

var display = document.getElementById("display");
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft === -1) {
        clearInterval(timerId);
        // clearTimeout(timerId);
        endQuiz();
    } else {
        display.innerHTML = timeLeft + " seconds remaining";
        timeLeft--;
    }
}

function endQuiz() {
    alert("It worked");
}