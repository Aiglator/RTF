
//Script pour questionnaire interactif avec validation des reponses et affichage des résultats
//timer avec compte à rebours
// AUthor: Rayan et Thomas CheckAnswer peer to peer programming
function checkAnswer(userAnswer,correctAnswer,explanation,buttonElement) {
    const feedbackDiv = document.querySelector("#feedback");
    if(userAnswer===correctAnswer) {
        buttonElement.classList.remove("btn-outline-primary");
        buttonElement.classList.add("btn-success");
        feedbackDiv.innerHTML = "";
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


function viewquestion(){

const button = document.querySelectorAll("button[data-value]");
const element = questions[currentIndex];
document.querySelector("h3").textContent = element.question;
document.querySelector("#feedback").innerHTML = "";
indexButton = 0;
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
            }
        }, 2000);
    };
    indexButton++;
});

}
viewquestion();

