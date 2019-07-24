$(document).ready(initializeApp);

var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var can_click_card = true;
var images = [
    'images/abril-bridge.png',
    'images/arc-de-triomphe.png',
    'images/eiffel-tower-1.png',
    'images/istanbul.png',
    'images/moscow.png',
    'images/palace2.png',
    'images/shrine2.png',
    'images/statue-of-liberty1.png',
    'images/torii-gate2.png'
];
var fullImages = images.concat(images);
var matches = 0;
var attempts = 0;
var accuracy = 0;
var gamesPlayed = 0;
var gameHasBeenPlayed = false;

function initializeApp() {
    shuffleCards(fullImages);
    displayCards();
    $(".card").click(card_clicked);
    displayStats();
}

function shuffleCards(fullImages) {
    for (var cardIndex = fullImages.length - 1; cardIndex >= 0; cardIndex--) {
        var randomNum = Math.floor(Math.random() * (cardIndex + 1));
        var imageToSwap = fullImages[randomNum];
        fullImages[randomNum] = fullImages[cardIndex];
        fullImages[cardIndex] = imageToSwap;
    }
}

function displayCards() {
    for (var index = 0; index < fullImages.length; index++) {
        var newCardContainer = $('<div>').addClass('cardContainer');
        var newCard = $('<div>').addClass('card');
        var frontCard = $('<div>').addClass('front');
        var frontImageFile = $('<img>').attr('src', fullImages[index]);
        var backCard = $('<div>').addClass('back');
        var backImageFile = $('<img>').attr('src', 'images/plane.png');
        frontCard.append(frontImageFile);
        backCard.append(backImageFile);
        newCard.append(frontCard);
        newCard.append(backCard);
        newCardContainer.append(newCard);
        $('.gameArea').append(newCardContainer);
    }
}

function card_clicked() {
    if (can_click_card === false || $(this).hasClass("revealed")) {
        return;
    }
    // $(this).find('.back').hide();
    if (first_card_clicked === null) {
        first_card_clicked = $(this);
        first_card_clicked.addClass("revealed");
        gameHasBeenPlayed = true;
        return;
    } else {
        second_card_clicked = $(this);
        second_card_clicked.addClass("revealed");
        attempts++;
        var firstCardImage = $(first_card_clicked).find('.front').children().attr('src');
        var secondCardImage = $(second_card_clicked).find('.front').children().attr('src');
        if (firstCardImage === secondCardImage) {
            matches++;
            first_card_clicked = null;
            second_card_clicked = null;
            if (matches === total_possible_matches) {
                displayStats();
                $(".modal").modal("show");
            } else {
                displayStats();
                return;
            }
        } else {
            can_click_card = false;
            displayStats();
            setTimeout(resetCard, 1000);
        }
    }
}

function resetCard() {
    // $(first_card_clicked).find('.back').show();
    // $(second_card_clicked).find('.back').show();
    first_card_clicked.removeClass('revealed');
    second_card_clicked.removeClass('revealed');
    first_card_clicked = null;
    second_card_clicked = null;
    can_click_card = true;
}

function displayStats() {
    $(".gamesPlayed .value").text(gamesPlayed);
    $(".attempts .value").text(attempts);
    $(".matches .value").text(matches);
    if (attempts === 0) {
        accuracy = 0 + "%";
    } else {
        accuracy = ((matches / attempts) * 100).toFixed(2) + "%";
    }
    $(".accuracy .value").text(accuracy);
}

function resetStats() {
    accuracy = 0;
    matches = 0;
    attempts = 0;
    displayStats();
}

function resetGame() {
    if (gameHasBeenPlayed) {
        gamesPlayed++;
        $(".gameArea").empty();
        shuffleCards(fullImages);
        displayCards();
        $(".card").click(card_clicked);
        resetStats();
        first_card_clicked = null;
        gameHasBeenPlayed = false;
    }
}
