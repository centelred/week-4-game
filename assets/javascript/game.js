//generate the random number
var number = Math.floor((Math.random() * 100) + 25);
console.log(number);
//generate the value of crystals
var crystal1 = Math.floor((Math.random() * 12) + 1);
var crystal2 = Math.floor((Math.random() * 12) + 1);
var crystal3 = Math.floor((Math.random() * 12) + 1);
var crystal4 = Math.floor((Math.random() * 12) + 1);
//set initial values to 0.
var guessTotal = 0;
var wins = 0;
var losses = 0;
//display the mystery number.
$("#random").html(number);
//click event for each crystal.
$(".crystal1").click(function() {
    update(crystal1)
});
$(".crystal2").click(function() {
    update(crystal2)
});
$(".crystal3").click(function() {
    update(crystal3)
});
$(".crystal4").click(function() {
    update(crystal4)
});

//the reset function upon win or loss
function reset() {
    //generate new number.
    number = Math.floor((Math.random() * 100) + 25);
    //display the number
    $("#random").html(number);
    //create new values for each crystal.
    crystal1 = Math.floor((Math.random() * 12) + 1);
    crystal2 = Math.floor((Math.random() * 12) + 1);
    crystal3 = Math.floor((Math.random() * 12) + 1);
    crystal4 = Math.floor((Math.random() * 12) + 1);
    //reset guess to 0.
    guessTotal = 0;
    //display the guess total
    $("#number").html(guessTotal);
};
//update total guess.  ((This needs fixed later.))
function update(blue) {
    //increase the total guess by value of chosen crystal.
    guessTotal += blue;
    //remove old total replace with new.
    $("#number").empty();
    $("#number").append(guessTotal);
    //check for win/loss
    if (guessTotal > number) {
        //add a loss
        losses++;
        //display loss
        $("#losses").html(losses);
        //call the reset function.
        reset();
    } else if (guessTotal == number) {
        //add a win
        wins++;
        //display the wins
        $("#wins").html(wins);
        //call reset
        reset();

    }
};
