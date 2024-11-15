/* 
   lab12.js- this will take a name and sort it into a specific category
   Requirements: Jquery must be loaded for this script to work

   Author: Monique Willard
   Date: November 2024
*/

// Takes the length of the persons name and assigns them to a category

function sortingName(str) {
    len = str.length;
    mod = len % 5;
    if (mod == 0) {
        return "fruit"
    }
    else if (mod == 1) {
        return "vegetable"
    }
    else if (mod == 2){
        return "grain"
    }
    else if (mod == 3){
        return "protein"
    }
    else if (mod == 4) {
        return "dairy"
    }
}

var myButton= document.getElementById("button");
myButton.addEventListener("click", function(){
    var name = document.getElementById("input").value;
    var aisle = sortingName(name);
    var description = getDescription(aisle);
    newText = "<p> You are found in the " + aisle + " aisle at the grocery store!" + "</p>";
    newText += "<p>" + description + "</p>";
    document.getElementById("output").innerHTML = newText;

});

// adding description for each category

function getDescription(category) {
    switch (category) {
        case "fruit":
            return "Fruits are sweet and juicy!";
        case "vegetable":
            return "Vegetables are healthy and green!";
        case "grain":
            return "Grains provide energy and fiber!";
        case "protein":
            return "Proteins build muscles and strength!";
        case "dairy":
            return "Dairy products are creamy and delicious!";
        }
    }

// set tabs 

function openPage(pageName,elmnt,color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();