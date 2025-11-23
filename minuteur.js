let timeLeft = 20; 
const timerElement = document.getElementById("timer");
let timerInterval;

function startTimer() {
  clearInterval(timerInterval);
 
  timeLeft = 30;
  updateTimerDisplay();
 
  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
   
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      console.log("Temps écoulé !");
      //afficher la question suivante code ajouter par Rayan pour connecter minuteur.js a script.js code assez simple 
      currentIndex++;
      if (currentIndex < questions.length) {
          viewquestion();
      }
    }
  }, 2000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, "0");
  const seconds = (timeLeft % 60).toString().padStart(2, "0");
  timerElement.textContent = `${minutes}:${seconds}`;
}

// Démarre le timer à l'ouverture de la page
startTimer();