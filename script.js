
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

let currentIndex = 0;
let indexButton = 0;

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        explicatifAnswer: "Paris est la capitale de la France et son centre politique, culturel et économique."
    },
    {
        question: "En quelle année a eu lieu la Révolution française ?",
        choices: ["1789", "1914", "1848", "1815"],
        answer: "1789",
        explicatifAnswer: "La Révolution française a commencé en 1789 avec la prise de la Bastille."
    },
    {
        question: "Quel est l'élément chimique représenté par le symbole O ?",
        choices: ["Or", "Oxygène", "Osmium", "Oxalate"],
        answer: "Oxygène",
        explicatifAnswer: "Le symbole chimique O représente l'oxygène, élément essentiel présent dans l'air."
    },
    {
        question: "Combien font 12 × 9 ?",
        choices: ["98", "108", "112", "120"],
        answer: "108",
        explicatifAnswer: "12 × 9 = 108 car 12 × 10 = 120, puis 120 - 12 = 108."
    },
    {
        question: "Quel est le plus grand océan du monde ?",
        choices: ["Atlantique", "Pacifique", "Indien", "Arctique"],
        answer: "Pacifique",
        explicatifAnswer: "L'océan Pacifique est le plus grand, couvrant plus de 165 millions de km²."
    },
    {
        question: "Qui a peint la Joconde ?",
        choices: ["Picasso", "Michel-Ange", "Van Gogh", "Léonard de Vinci"],
        answer: "Léonard de Vinci",
        explicatifAnswer: "La Joconde a été peinte au XVIᵉ siècle par Léonard de Vinci, artiste de la Renaissance."
    },
    {
        question: "Quelle planète est surnommée la planète rouge ?",
        choices: ["Jupiter", "Venus", "Mars", "Mercure"],
        answer: "Mars",
        explicatifAnswer: "Mars est appelée la planète rouge à cause de sa forte teneur en oxyde de fer."
    },
    {
        question: "Quel est le langage utilisé pour structurer les pages Web ?",
        choices: ["JavaScript", "HTML", "CSS", "Python"],
        answer: "HTML",
        explicatifAnswer: "HTML est un langage de balisage utilisé pour structurer le contenu des pages Web."
    },
    {
        question: "Combien de continents existe-t-il ?",
        choices: ["5", "6", "7", "8"],
        answer: "7",
        explicatifAnswer: "Le nombre officiellement retenu est 7 : Afrique, Amérique, Antarctique, Asie, Europe, Océanie."
    },
    {
        question: "Quel animal est le plus rapide du monde ?",
        choices: ["Guépard", "Faucon pèlerin", "Gazelle", "Autruche"],
        answer: "Faucon pèlerin",
        explicatifAnswer: "Le faucon pèlerin peut atteindre plus de 390 km/h en piqué."
    },
    {
        question: "Quelle est la langue la plus parlée au monde ?",
        choices: ["Anglais", "Espagnol", "Chinois mandarin", "Hindi"],
        answer: "Chinois mandarin",
        explicatifAnswer: "Le mandarin est la langue maternelle la plus parlée avec plus de 900 millions de locuteurs."
    },
    {
        question: "Quel est le plus grand pays du monde en superficie ?",
        choices: ["Chine", "États-Unis", "Canada", "Russie"],
        answer: "Russie",
        explicatifAnswer: "La Russie couvre plus de 17 millions de km²."
    },
    {
        question: "Combien de zéros y a-t-il dans le nombre 1 milliard ?",
        choices: ["6", "7", "8", "9"],
        answer: "9",
        explicatifAnswer: "1 milliard s'écrit 1 000 000 000, soit 9 zéros."
    },
    {
        question: "Quel est l'organe principal du système nerveux ?",
        choices: ["Le cœur", "Le foie", "Le cerveau", "Les poumons"],
        answer: "Le cerveau",
        explicatifAnswer: "Le cerveau contrôle l'ensemble du système nerveux, du mouvement à la mémoire."
    },
    {
        question: "Quel pays a inventé les Jeux Olympiques ?",
        choices: ["Italie", "Grèce", "France", "Égypte"],
        answer: "Grèce",
        explicatifAnswer: "Les Jeux Olympiques sont nés en Grèce antique à Olympie en 776 av. J.-C."
    },
    {
        question: "Qui est l'auteur d'Harry Potter ?",
        choices: ["J.R.R. Tolkien", "J.K. Rowling", "Rick Riordan", "Stephen King"],
        answer: "J.K. Rowling",
        explicatifAnswer: "J.K. Rowling est l'auteure britannique de la saga Harry Potter, publiée dès 1997."
    },
    {
        question: "Quelle est la devise de l'euro ?",
        choices: ["EUR", "EURO", "E$", "€"],
        answer: "€",
        explicatifAnswer: "Le symbole officiel de la monnaie européenne est €."
    },
    {
        question: "Quel est le plus grand mammifère terrestre ?",
        choices: ["Girafe", "Éléphant d'Afrique", "Baleine bleue", "Rhinocéros"],
        answer: "Éléphant d'Afrique",
        explicatifAnswer: "L'éléphant d'Afrique peut atteindre 7 tonnes et 4 mètres de hauteur."
    },
    {
        question: "Que mesure-t-on avec un thermomètre ?",
        choices: ["La vitesse", "La température", "La pression", "L'altitude"],
        answer: "La température",
        explicatifAnswer: "Un thermomètre sert à mesurer la température en °C ou °F."
    },
    {
        question: "Quelle ville est surnommée la ville lumière ?",
        choices: ["New York", "Londres", "Paris", "Tokyo"],
        answer: "Paris",
        explicatifAnswer: "Paris est appelée ville lumière pour son rôle historique dans les arts et les sciences."
    }
];

function viewquestion(){


//affiche les questions une par une en mode aléatoire {
    questions.forEach(element => {
        console.log(element.question);
        element.choices.forEach(choice => {
            console.log(" - " + choice);
        });
    });

}
viewquestion();
