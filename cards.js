const cardsAPI_newDeck = `http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`;
let lastCard;
let currentDeckId;
function init(){
    axios.get(cardsAPI_newDeck).then(data => {
        currentDeckId = data.data.deck_id;
        // console.log(currentDeckId);
    });
}

window.onload = init;

const button = document.getElementById('next-card-button');
button.onclick = drawCard;

const cardImage = document.getElementById('cardImage');

async function drawCard(e){
    drawCardURL = `http://deckofcardsapi.com/api/deck/${currentDeckId}/draw/?count=1`;

    // axios.get(drawCardURL).then(data => {
    //     lastCard = data.data.cards[0];
    //     console.log(`You drew a ${lastCard.value} of ${lastCard.suit}`);
    //     cardImage.src = lastCard.image;
    // });

    // axios.get(drawCardURL).then(data => {
    //     lastCard = data.data.cards[0];
    //     console.log(`You drew a ${lastCard.value} of ${lastCard.suit}`);
    //     cardImage.src = lastCard.image;
    // });

    const card = await axios.get(drawCardURL);
    lastCard = card.data.cards[0];
    console.log(`You drew a ${lastCard.value} of ${lastCard.suit}`);
    cardImage.src = lastCard.image;


}

