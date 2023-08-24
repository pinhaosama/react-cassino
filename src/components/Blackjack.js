const { useContext } = require("react");

let scoreInHand;
let deck = [];
let cardsInHandP = [];
let cardsInHandD = [];

async function gameDefault() {
    await getDeck();
    document.querySelector('#coinCounter').innerHTML = await getCoin();

    // Player Default
    cardsInHandP = [];
    document.querySelector("#score-inhand").innerHTML = 0;
    document.querySelector("#drawn-card").innerHTML = null;

    // Player 1st card
    setTimeout(() => {
        drawCard(
            deck,
            "#drawn-card",
            "#score-inhand",
            cardsInHandP
        );
        // Player 2nd card
        setTimeout(() => {
            drawCard(
                deck,
                "#drawn-card",
                "#score-inhand",
                cardsInHandP
            );
        }, 500);
    }, 500);

    // Dealer default
    cardsInHandD = [];
    document.querySelector("#score-inhand-dealer").innerHTML = 0;
    document.querySelector("#drawn-card-dealer").innerHTML = null;

    // Dealer 1st card
    setTimeout(() => {
        drawCard(
            deck,
            "#drawn-card-dealer",
            "#score-inhand-dealer",
            cardsInHandD
        );
    }, 500);
    return cardsInHandP;
};

async function getDeck() {
    await fetch("http://localhost:3000/blackjack", {
        method: "GET",
        headers: { task: "blackjack" },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            deck = data;
        });
};

function drawCard(deck, cardElement, scoreElement, cardsInHand) {
    document.querySelector(cardElement).append(renderCard(deck[0]));
    cardsInHand.push(deck[0]);

    scoreInHand = parseInt(document.querySelector(scoreElement).innerHTML);
    let drawnValue = deck[0].Value;
    if (isNaN(parseInt(drawnValue))) {
        if (drawnValue === "A") {
            scoreInHand += 11;
        } else {
            scoreInHand += 10;
        }
    } else {
        scoreInHand += parseInt(drawnValue);
    }

    // for (let i = 0; i < cardsInHand.length; i++) {
    //     document.querySelector("#drawn-card").append(renderCard(cardsInHand[i]));
    // }
    document.querySelector(scoreElement).innerHTML = scoreInHand;

    if (scoreInHand > 21) {
        document.querySelector("#card-draw").disabled = true;
        document.querySelector("#stand").disabled = true;
        const bust = document.createElement("p");
        bust.innerHTML = "BUST!"
        document.querySelector(scoreElement).append(bust);
    }
    deck.shift();
};

function renderCard(oneCard) {
    let card = document.createElement("div");
    let value = document.createElement("div");
    let suit = document.createElement("div");
    card.className = "card";
    value.className = "value";
    suit.className = "suit " + oneCard.Suit;

    value.innerHTML = oneCard.Value;
    card.appendChild(value);
    card.appendChild(suit);

    return card;
};

function drawCardP() {
    drawCard(deck, '#drawn-card', '#score-inhand', cardsInHandP);
}

async function stand() {
    let scoreP = parseInt(document.querySelector('#score-inhand').innerHTML);
    let scoreD = parseInt(document.querySelector('#score-inhand-dealer').innerHTML);
    while (scoreD < 17) {
        drawCard(deck, '#drawn-card-dealer', '#score-inhand-dealer', cardsInHandP);
        scoreD = parseInt(document.querySelector('#score-inhand-dealer').innerHTML);
    }

    await fetch("http://localhost:3000/blackjack", {
        method: "POST",
        headers: { "task": "coin" },
        data:{ TEST: "TESTTEXT" }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {

        });

    const result = document.createElement("p");

    if (document.querySelector('#score-inhand-dealer').innerHTML.includes('BUST')) {
        result.innerHTML = 'You win!';
        document.querySelector('#score-inhand').append(result);
        return;
    } if (scoreD < scoreP) {
        result.innerHTML = 'You win!';
        document.querySelector('#score-inhand').append(result);
        return;
    } if (scoreD === scoreP) {
        result.innerHTML = 'Push!';
        document.querySelector('#score-inhand').append(result);
        return;
    } else {
        result.innerHTML = 'You lost!';
        document.querySelector('#score-inhand').append(result);
        return;
    }
}

async function getCoin() {
    let userCoin;
    await fetch("http://localhost:3000/blackjack", {
        method: "GET",
        headers: { task: "coin" },
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            userCoin = data.coin;
        });
    return userCoin;
}

module.exports = {
    gameDefault,
    getDeck,
    drawCard,
    renderCard,
    drawCardP,
    stand
}