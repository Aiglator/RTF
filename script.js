//Script pour questionnaire interactif avec validation des reponses et affichage des résultats
//timer avec compte à rebours

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
