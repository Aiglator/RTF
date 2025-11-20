let timeLeft = 20; 
const timerElement = document.getElementById("timer");
let timerInterval;

function startTimer() {
  clearInterval(timerInterval);
 
  timeLeft = 20;
  updateTimerDisplay();
 
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
   
    if (timeLeft <= 0) {
    }
  }, 1000);
}