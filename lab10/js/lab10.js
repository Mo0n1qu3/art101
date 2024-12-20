/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div

   Requirements: jQuery must be loaded for this script to work.

   Author: Monique Willard
   Date: 2024
*/

function generateRandomText(){
    const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const min = 3;
    const max = 100;
    const ranLen = Math.floor(Math.random() * (max - min +1))+ min;
    // get a random starting ondex to slice the Lorem Ipsum text
    const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
    // generate the random Lorem Ipsum-like text
    return text.slice(randStart, randStart + randLen);
}

// click listener for button
$("#make-convo").click(function(){
    // get new fake dialogue
    const newText = generateRandomText();
    
    // append a new div for output div
    $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

