
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
    }

}

function viewquestion(){


//affiche les questions une par une en mode aléatoire {
    const questions = [
        {
            question: "Quelle est la capitale de la France ?",
            choices: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
            {
        question: "En quelle année a eu lieu la Révolution française ?",
        choices: ["1789", "1914", "1848", "1815"],
        answer: "1789"
    },
    {
        question: "Quel est l'élément chimique représenté par le symbole O ?",
        choices: ["Or", "Oxygène", "Osmium", "Oxalate"],
        answer: "Oxygène"
    },
    {
        question: "Combien font 12 × 9 ?",
        choices: ["98", "108", "112", "120"],
        answer: "108"
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        choices: ["Atlantique", "Pacifique", "Indien", "Arctique"],
        answer: "Pacifique"
    },
    {
        question: "Qui a peint la Joconde ?",
        choices: ["Picasso", "Michel-Ange", "Van Gogh", "Léonard de Vinci"],
        answer: "Léonard de Vinci"
    },
    {
        question: "Quelle planète est surnommée la planète rouge ?",
        choices: ["Jupiter", "Venus", "Mars", "Mercure"],
        answer: "Mars"
    },
    {
        question: "Quel est le langage utilisé pour structurer les pages Web ?",
        choices: ["JavaScript", "HTML", "CSS", "Python"],
        answer: "HTML"
    },
    {
        question: "Combien de continents existe-t-il ?",
        choices: ["5", "6", "7", "8"],
        answer: "7"
    },
    {
        question: "Quel animal est le plus rapide du monde ?",
        choices: ["Guépard", "Faucon pèlerin", "Gazelle", "Autruche"],
        answer: "Faucon pèlerin"
    },
    {
        question: "Quelle est la langue la plus parlée au monde ?",
        choices: ["Anglais", "Espagnol", "Chinois mandarin", "Hindi"],
        answer: "Chinois mandarin"
    },
    {
        question: "Quel est le plus grand pays du monde en superficie ?",
        choices: ["Chine", "États-Unis", "Canada", "Russie"],
        answer: "Russie"
    },
    {
        question: "Combien de zéros y a-t-il dans le nombre 1 milliard ?",
        choices: ["6", "7", "8", "9"],
        answer: "9"
    },
    {
        question: "Quel est l’organe principal du système nerveux ?",
        choices: ["Le cœur", "Le foie", "Le cerveau", "Les poumons"],
        answer: "Le cerveau"
    },
    {
        question: "Quel pays a inventé les Jeux Olympiques ?",
        choices: ["Italie", "Grèce", "France", "Égypte"],
        answer: "Grèce"
    },
    {
        question: "Qui est l’auteur d'Harry Potter ?",
        choices: ["J.R.R. Tolkien", "J.K. Rowling", "Rick Riordan", "Stephen King"],
        answer: "J.K. Rowling"
    },
    {
        question: "Quelle est la devise de l’euro ?",
        choices: ["EUR", "EURO", "E$", "€"],
        answer: "€"
    },
    {
        question: "Quel est le plus grand mammifère terrestre ?",
        choices: ["Girafe", "Éléphant d’Afrique", "Baleine bleue", "Rhinocéros"],
        answer: "Éléphant d’Afrique"
    },
    {
        question: "Que mesure-t-on avec un thermomètre ?",
        choices: ["La vitesse", "La température", "La pression", "L'altitude"],
        answer: "La température"
    },
    {
        question: "Quelle ville est surnommée la ville lumière ?",
        choices: ["New York", "Londres", "Paris", "Tokyo"],
        answer: "Paris"
    }
    ];
    questions.forEach(element => {
        console.log(element.question);
        element.choices.forEach(choice => {
            console.log(" - " + choice);
        });
        
    });



}
viewquestion();
