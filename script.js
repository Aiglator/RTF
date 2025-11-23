
//Script pour questionnaire interactif avec validation des reponses et affichage des résultats
//timer avec compte à rebours
// AUthor: Rayan et Thomas CheckAnswer peer to peer programming
function checkAnswer(userAnswer,correctAnswer,explanation,buttonElement) {
    const feedbackDiv = document.querySelector("#feedback");
    if(userAnswer===correctAnswer) {
        buttonElement.classList.remove("btn-outline-primary");
        buttonElement.classList.add("btn-success");
        feedbackDiv.innerHTML = "";
        score ++;
    }else {
        buttonElement.classList.remove("btn-outline-primary");
        buttonElement.classList.add("btn-danger");
        feedbackDiv.innerHTML = "<div class='alert alert-danger mt-3'><strong>Mauvaise réponse !</strong><br>La bonne réponse était : "+correctAnswer+"<br>Explication : "+explanation+"</div>";
    }
}

//fetch les question de questions.json Author:Rayan Chattaoui je l'ai mis en bas il a pas était appeller je le mets en haut
function fetchjsonQuestions(){
    fetch('questions.json')
    .then(response => response.json())
    .then(news => {
        questions = news;
        viewquestion();
    })
    .catch(error => console.error('Erreur lors du chargement des questions :', error));
}
fetchjsonQuestions();
let currentIndex = 0;
let indexButton = 0;
let questions = [];
let score = 0;

function changeNumberOfQuestions(){
    const changenumberofQuestions = document.getElementById("changenumberofQuestions");
    changenumberofQuestions.textContent = `Question ${currentIndex + 1} sur ${questions.length}`;
}
function bluechangequestion(){
    const bluechange = document.getElementById("bluechange");
    const progressPercentage = ((currentIndex)/questions.length)*100;
    bluechange.style.width= `${progressPercentage}%`;
}

// Partit scoring Educentre
function showResultInline() {
  document.getElementById('popup-score').textContent = `Score : ${score} / ${questions.length}`;
  document.getElementById('popup-result').classList.remove('d-none');
}

function sendScoreToEducentre(studentName) {
  try {
    const edac = new EducentreActivity();
    const normalisedScore = score / questions.length;

    // Envoyer le score à Educentre avec un callback (OBLIGATOIRE)
    edac.sendScore(normalisedScore, (response) => {
      console.log('Réponse Educentre après envoi du score:', response);
    });

    // Sauvegarder les données de l'étudiant
    edac.saveStorage({
      studentName: studentName,
      score: score,
      total: questions.length,
      normalizedScore: normalisedScore,
      date: new Date().toISOString()
    }, (response) => {
      console.log('Données sauvegardées:', response);
    });

    console.log(`Score envoyé à Educentre: ${normalisedScore} (${score}/${questions.length}) par ${studentName}`);
    alert('Score envoyé avec succès à Educentre !');
  } catch (error) {
    console.error('Problème lors de l\'envoi du score à Educentre:', error);
    alert('Erreur lors de l\'envoi. Vérifiez la console.');
  }
}

// Bouton pour envoyer le score
document.getElementById('popup-send').onclick = () => {
  const studentName = document.getElementById('student-name').value.trim();
  if (!studentName) {
    alert('Veuillez entrer votre nom et prénom.');
    return;
  }
  sendScoreToEducentre(studentName);
};

// Bouton pour fermer le popup
document.getElementById('popup-next').onclick = () => {
  document.getElementById('popup-result').classList.add('d-none');
};

// …dans ton setTimeout après checkAnswer :
if (currentIndex < questions.length) {
  viewquestion();
} else {
  showResultInline();
}



function viewquestion(){

const button = document.querySelectorAll("button[data-value]");
const element = questions[currentIndex];
document.querySelector("h3").textContent = element.question;
document.querySelector("#feedback").innerHTML = "";
indexButton = 0;
changeNumberOfQuestions();
bluechangequestion();

// Connections pour redémarrer le timer à chaque nouvelle question feature: Rayan Chattaoui j'ai fait ceci pour connecter les deux fichiers
if (typeof startTimer === 'function') {
    startTimer();
}

element.choices.forEach(choice => {
    button[indexButton].textContent = choice;
    button[indexButton].classList.remove("btn-success","btn-danger");
    button[indexButton].classList.add("btn-outline-primary");
    button[indexButton].onclick = (e) => {
        e.preventDefault();

        // Arrêter le minuteur quand l'utilisateur répond
        if (typeof timerInterval !== 'undefined') {
            clearInterval(timerInterval);
        }

        checkAnswer(choice, element.answer, element.explicatifAnswer, e.currentTarget);
        setTimeout(() => {
            currentIndex++;
            if(currentIndex < questions.length) {
                viewquestion();
            }else {
                showResultInline();


            }
        }, 2000);
    };
    indexButton++;
});

}