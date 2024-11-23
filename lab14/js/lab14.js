// author: monique willard
// created: 11.15.24
//  Javascipt/jQuery script uses buttons to modify page
// requirements: jQuery must be loaded for scipt to work

// Loop through numbers 1 to 200, listing them as you go
// If the number is a multiple of 3, if should print "Fizz!"
// If the number is a multiple of 5, it should print "Buzz!"
// If the number is a multiple of 7, it should print "Boom!"
// If the number is a multiple of more than one 3, 5 or 7, it should combine Fizz, Buzz, and Boom.

function fizzBuzz() {

  var oneLongString = "";

  for (var i = 1; i <= 200; i++) {
      var str = "";
      
      if (i % 3 === 0) str += "Fizz";
      if (i % 5 === 0) str += "Buzz";
      if (i % 7 === 0) str += "Boom";

      
     
      if (str == "") {
          oneLongString += "<br>" + i;
  
        } else {
          oneLongString += "<br>" + i + ": " + str;
        }
  }

  $("#output").html(oneLongString);
}


(function() {
  var oldLog = console.log;
  console.log = function(message) {
      oldLog.apply(console, arguments);
      var outputDiv = document.getElementById('output');
      if (outputDiv) {
          outputDiv.innerHTML += message + '<br>';
      }
  };
})();

fizzBuzz(); 


// creating tabs with content
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


