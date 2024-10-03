let timer;
let remainingTime;

function startTimer(minutes) {
    clearInterval(timer);
    remainingTime = minutes * 60;
    updateDisplay();
    timer = setInterval(() => {
        remainingTime--;
        updateDisplay();
        if (remainingTime <= 0) {
            clearInterval(timer);
            alert("Time's up!");
        }
    }, 1000);
}

function updateDisplay() {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    document.getElementById('timerDisplay').innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function customTime() {
    const userInput = prompt("Enter time in minutes:");
    const minutes = parseInt(userInput, 10);
    if (!isNaN(minutes) && minutes > 0) {
        startTimer(minutes);
    } else {
        alert("Please enter a valid number.");
    }
}
