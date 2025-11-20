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
      clearInterval(timerInterval);
      console.log("Temps écoulé !");
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timerElement.textContent = `${minutes}:${seconds}`;
}

// Démarre le timer à l'ouverture de la page