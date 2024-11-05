// author: monique willard
// created: 11.1.24
//  Javascipt/jQuery script uses buttons to modify page
// requirements: jQuery must be loaded for scipt to work

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Make special</button>");

// add a click listener to challenge button
$("#button-challenge").click(function(){
    $("#challenge").toggleClass("special");
});
$("#button-challenge").css({
    "color": "#e26d5c",
    "font-family": "monstserrat",
    "border-color": "#472d30",
    "border": "1px solid",
    "background-color": "#ffe1a8",
});
    

// add button to problems section
$("#problems").append("<button id='button-problems'>Make special</button>");
$("#button-problems").css({
    "color": "#e26d5c",
    "font-family": "monstserrat",
    "border-color": "#472d30",
    "border": "1px solid",
    "background-color": "#ffe1a8",
});
    
    
  

var moved = false;

$("#button-problems").click(function(){
    if(!moved){
        $("#problems").animate({left: '250px'});
    } else {
        $("#problems").animate({left: '10px'});
    }
   
    moved = !moved;
  }); 

// add button to results section
$(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideToggle("slow");
    });
  });
