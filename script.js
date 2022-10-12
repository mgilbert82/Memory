let gameBoard = new Array(5);
let allCards = document.querySelectorAll(".card");
let countCurrentClick = 0;
let dataImageShowed ;

allCards.forEach(card => {
    card.addEventListener("click", function() {
        playGame(card);
    });
})

function playGame(card) {
    countCurrentClick++;

    if(countCurrentClick == 1) {
        //premier click, je cache les images trouvées avant
        allCards.forEach(card => {
            if(card.classList.contains("finded")) {
                //C'est une carte trouvée
            } else {
                //Carte non trouvée
                card.classList.add("hidden");

            }
        });
        //J4affiche la carte que je viens de cliquer
        card.classList.remove("hidden");
        //je stocke la réponse derrière la carte
        dataImageShowed = card.dataset.image;
        //Et je la retourne
        card.classList.remove("hidden");

        } else if(countCurrentClick == 2) {
            //Deuxième click, je  vérifier si l'image a été trouvée
            card.classList.remove("hidden");
            
            if(dataImageShowed == card.dataset.image) {
                allCards.forEach(card => {
                    if(card.classList.contains("hidden")) {
                        //C'est une carte cachée
                    } else {
                        card.classList.add("finded");
                    }
                });
        }
        countCurrentClick = 0;
        dataImageShowed = "";
    }
}