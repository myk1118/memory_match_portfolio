$(document).ready(initializeApp);

function initializeApp() {
    $(".card").click(card_clicked);
    games_played++;
}

var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;

var matches = 0;
var attempts = 0;
var accuracy = 0;
var games_played = 0;

function card_clicked() {
    // console.log('Card Clicked');
    $(this).find('.back').hide();
    if (first_card_clicked === null) {
        first_card_clicked = $(this);
        // display_stats();
        return;
    } else {
        second_card_clicked = $(this);
        attempts++;
        var firstCardImage = $(first_card_clicked).find('.front').children().attr('src');
        var secondCardImage = $(second_card_clicked).find('.front').children().attr('src');
        if (firstCardImage === secondCardImage) {
            matches++;
            first_card_clicked = null;
            second_card_clicked = null;
            if (matches === total_possible_matches) {
                display_stats();
                alert("You matched all the cards!");
                // console.log("You've got it!");
            } else {
                display_stats();
                return;
            }
        } else {
            display_stats();
            setTimeout(resetCard, 2000);
        }
    }
}

function resetCard() {
    $(first_card_clicked).find('.back').show();
    $(second_card_clicked).find('.back').show();
    first_card_clicked = null;
    second_card_clicked = null;
}

function display_stats() {
    console.log("Display stats function called");
    $(".games_played .value").text(games_played);
    $(".attempts .value").text(attempts);
    $(".matches .value").text(matches);
    if (attempts === 0) {
        accuracy = 0 + "%";
    } else {
        accuracy = (Math.floor((matches / attempts) * 100)) + "%";
    }
    $(".accuracy .value").text(accuracy);
}

function reset_stats() {
    console.log("Reset stats function called");
    accuracy = 0;
    matches = 0;
    attempts = 0;
    display_stats();
}

function clickReset() {
        games_played++;
        reset_stats();
        display_stats();
        $(".card").find('.back').show()
}

/*
var images = [
    'memory_match_images/photo-1522547902298-51566e4fb383.jpeg',
    'memory_match_images/photo-1522547902298-51566e4fb383.jpeg',
    'memory_match_images/photo-1517918558653-3a2c5ab393a2.jpeg',
    'memory_match_images/photo-1517918558653-3a2c5ab393a2.jpeg',
    'memory_match_images/photo-1503331660992-3ae6954629a1.jpeg',
    'memory_match_images/photo-1503331660992-3ae6954629a1.jpeg',
    'memory_match_images/photo-1533104816931-20fa691ff6ca.jpeg',
    'memory_match_images/photo-1533104816931-20fa691ff6ca.jpeg',
    'memory_match_images/photo-1507272931001-fc06c17e4f43.jpeg',
    'memory_match_images/photo-1507272931001-fc06c17e4f43.jpeg',
    'memory_match_images/photo-1524063221847-15c7329095d8.jpeg',
    'memory_match_images/photo-1524063221847-15c7329095d8.jpeg',
    'memory_match_images/photo-1529835678853-bb80f825ae1c.jpeg',
    'memory_match_images/photo-1529835678853-bb80f825ae1c.jpeg',
    'memory_match_images/photo-1525987464705-29a16800bfc9.jpeg',
    'memory_match_images/photo-1525987464705-29a16800bfc9.jpeg',
    'memory_match_images/photo-1520190282873-afe1285c9a2a.jpeg',
    'memory_match_images/photo-1520190282873-afe1285c9a2a.jpeg'
];

function shuffle(array) {
    for (var arrayIndex = images.length - 1; arrayIndex > 0; arrayIndex--) {
        var randomIndex = Math.floor(Math.random() * arrayIndex);
        var tempItem = array[randomIndex];
        array[randomIndex] = array[arrayIndex];
        array[arrayIndex] = tempItem;
    }
    return array;
}

var newArray = shuffle(images);
//console.log(newArray);

function frontCard(randomArray) {
    for (i = 0; i < randomArray.length; i++) {
        $(".front").append(randomArray[i]);
    }
}

frontCard(newArray);
*/