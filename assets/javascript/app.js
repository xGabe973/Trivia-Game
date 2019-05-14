// Some variables
var correct = 0;
var wrong = 0;
var unanswered = 0;
var intervalId; //holds the intervalID
var number = 34; //Set counter to countdown from 34.



$(document).ready(function(){

    $("#button-start").click(timer); //supposed to make the timer start when clicked!
   
// this is supposed to make the timer start and the button go away     
function timer() {
    console.log('==================================')
    $("#button-start").fadeOut(500);
    clearInterval(intervalId);  
    intervalId = setInterval(decrement, 1000);
    decrement();
}

// decrement function (to countDOWN (not like a stopwatch))
function decrement() {
    number--;
    $("#timer").html("<h2>" + number + " seconds left" + "</h2>"); //Display number on page

    if (number === 0) { //Once number hits zero, run stop 
        stop();
        console.log("Time's Up!");
    } //end if
} //end decrement

    function stop() {
        clearInterval(intervalId);
    } //end stop

});
