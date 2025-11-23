# RTF - Quiz Interactif

Application de quiz interactif avec système de timer, affichage dynamique des questions et intégration Educentre pour l'envoi des résultats.

## Description

RTF est une application web de questionnaire à choix multiples (QCM) développée en JavaScript vanilla. Elle permet aux utilisateurs de répondre à une série de questions chronométrées, de visualiser leur progression en temps réel et d'envoyer leurs résultats à la plateforme Educentre.

## Fonctionnalités

- **Questionnaire dynamique** : Chargement des questions depuis un fichier JSON
- **Timer par question** : Compte à rebours de 30 secondes pour chaque question
- **Barre de progression** : Visualisation de l'avancement dans le quiz
- **Feedback instantané** : Affichage immédiat de la correction avec explications
- **Calcul du score** : Comptabilisation automatique des bonnes réponses
- **Intégration Educentre** : Envoi sécurisé des résultats vers la plateforme d'apprentissage
- **Interface responsive** : Design adaptatif utilisant Bootstrap 5

## Technologies utilisées

- HTML5
- JavaScript (ES6+)
- Bootstrap 5.3.3
- Educentre Bridge API
- JSON pour le stockage des questions

## Structure du projet

```
RTF/
├── index.html          # Page principale de l'application
├── script.js           # Logique du quiz et gestion des réponses
├── minuteur.js         # Gestion du timer
├── questions.json      # Base de données des questions
└── README.md           # Documentation du projet
```
## Visuualisation
lien: https://aiglator.github.io/RTF/

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/Aiglator/RTF.git
cd RTF
```

2. Ouvrez le fichier `index.html` dans votre navigateur web ou utilisez un serveur local (XAMPP, Live Server, etc.)

Pour XAMPP :
- Placez le dossier dans `c:\xampp\htdocs\eemi\javascript\RTF\`
- Accédez à `http://localhost/eemi/javascript/RTF/`

## Utilisation

### Démarrage du quiz

1. Ouvrez l'application dans votre navigateur
2. Le quiz démarre automatiquement avec la première question
3. Un timer de 30 secondes s'affiche pour chaque question

### Répondre aux questions

1. Lisez la question affichée à l'écran
2. Cliquez sur l'une des 4 réponses proposées (A, B, C ou D)
3. Un feedback s'affiche immédiatement :
   - Bouton vert : bonne réponse
   - Bouton rouge : mauvaise réponse avec explication
4. La question suivante s'affiche automatiquement après 2 secondes

### Fin du quiz

1. Une fois toutes les questions répondues, un popup de résultat s'affiche
2. Entrez votre nom et prénom
3. Cliquez sur "Envoyer le score" pour transmettre vos résultats à Educentre
4. Un message de confirmation s'affiche

## Format des questions

Les questions sont stockées dans [questions.json](questions.json) au format suivant :

```json
{
  "question": "Votre question ici ?",
  "choices": ["Réponse A", "Réponse B", "Réponse C", "Réponse D"],
  "answer": "Réponse correcte",
  "explicatifAnswer": "Explication de la bonne réponse"
}
```

### Ajouter de nouvelles questions

1. Ouvrez [questions.json](questions.json)
2. Ajoutez un nouvel objet JSON en respectant le format ci-dessus
3. Les questions seront automatiquement chargées au prochain lancement

## Fichiers principaux

### [index.html](index.html)

Page HTML principale contenant :
- Structure du quiz
- Zone d'affichage des questions
- 4 boutons de réponse
- Barre de progression
- Timer
- Popup de résultats

### [script.js](script.js)

Logique principale de l'application :
- `checkAnswer()` : Vérifie si la réponse est correcte
- `fetchjsonQuestions()` : Charge les questions depuis le fichier JSON
- `viewquestion()` : Affiche la question courante
- `changeNumberOfQuestions()` : Met à jour le compteur de questions
- `bluechangequestion()` : Met à jour la barre de progression
- `sendScoreToEducentre()` : Envoie le score à Educentre
- `showResultInline()` : Affiche le popup de résultats

### [minuteur.js](minuteur.js)

Gestion du timer :
- `startTimer()` : Démarre/redémarre le timer à 30 secondes
- `updateTimerDisplay()` : Met à jour l'affichage du temps restant
- Passage automatique à la question suivante si le temps expire

## Intégration Educentre

L'application utilise l'API Educentre Bridge pour :
- Envoyer le score normalisé (entre 0 et 1)
- Sauvegarder les données de l'étudiant (nom, score, date)
- Assurer la traçabilité des résultats

### Exemple d'utilisation

```javascript
const edac = new EducentreActivity();
const normalisedScore = score / questions.length;

edac.sendScore(normalisedScore, (response) => {
  console.log('Score envoyé avec succès');
});
```

## Configuration

### Modifier le temps par question

Dans [minuteur.js](minuteur.js#L8), changez la valeur de `timeLeft` :

```javascript
timeLeft = 30; // Temps en secondes
```

### Modifier l'intervalle de mise à jour du timer

Dans [minuteur.js](minuteur.js#L24), changez la valeur de `setInterval` :

```javascript
}, 2000); // Temps en millisecondes (2000ms = 2 secondes)
```





## Branches Git

- `main` : Branche principale stable
- `Rayan` : Branche de développement active
- `backend` : Développement backend
- `score` : Fonctionnalités de scoring
- `code-de-fabrice` : Contributions de Fabrice

## Historique des commits récents

- `2f4b5b7` : Ajustement et connexions à Educentre pour l'envoi des résultats
- `641d763` : Ajout du système de score
- `83d585f` : Ajout de la barre de progression dynamique
- `e634111` : Ajout du décompte de questions
- `36e44b1` : Amélioration de la clarté du code

## Améliorations futures possibles

- Ajouter un mode révision pour revoir les questions ratées
- Implémenter des catégories de questions
- Ajouter un système de sauvegarde locale (localStorage)
- Créer un tableau de bord avec historique des scores
- Ajouter des animations de transition
- Implémenter un mode sombre
- Ajouter des statistiques détaillées par catégorie

## Licence

Projet développé dans le cadre d'une formation à l'EEMI.

## Support

Pour toute question ou problème, veuillez ouvrir une issue sur le repository GitHub.

## Collaborateurs

### Contributors

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/Aiglator">
          <img src="https://github.com/Aiglator.png" width="100px;" alt="Aiglator"/>
          <br />
          <sub><b>Aiglator</b></sub>
          <br />
          <sub>Rayan Chattaoui</sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Vtom7">
          <img src="https://github.com/Vtom7.png" width="100px;" alt="Vtom7"/>
          <br />
          <sub><b>Vtom7</b></sub>
        </a>
      </td>
      <td align="center">
        <a href="https://github.com/Fabrice-Etienne">
          <img src="https://github.com/Fabrice-Etienne.png" width="100px;" alt="Fabrice-Etienne"/>
          <br />
          <sub><b>Fabrice-Etienne</b></sub>
          <br />
          <sub>Fabrice Code</sub>
        </a>
      </td>
    </tr>
  </table>
</div>

