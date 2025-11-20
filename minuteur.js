let timeLeft = 20; 
const timerElement = document.getElementById("timer");
let timerInterval;

function startTimer() {
  clearInterval(timerInterval);
 
  timeLeft = 20;
}