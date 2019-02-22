$(document).ready(initializeApp);

function initializeApp() {
    $(".card").click(card_clicked);
}

var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
var match_counter = 0;

function card_clicked() {
    console.log('Enter Card Click');
    $(this).find('.back').hide();
    if (first_card_clicked === null) {
        first_card_clicked = $(this);
        return;
    } else {
        second_card_clicked = $(this);
        if (first_card_clicked === second_card_clicked) {
            match_counter++;
            first_card_clicked = null;
            second_card_clicked = null;
            if (match_counter === total_possible_matches) {
                console.log("You've got it!");
            } else {
                return;
            }
        } else {
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