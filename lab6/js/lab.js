// index.js - Lab 6
// Author: monique willard
// Date: 10.24.24

// define varibles 

myTransport = ["Tbird", "bus","uber","train"];

myMainRide = {
  make: "ford",
  model: "thunderbird",
  color: "silver",
  year: "1996",
  age: function() {
    return 2024 - this.year;
  }
}

// output 
document.writeln("Ways I get around town", myTransport, "</br>");
document.writeln("My main ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>" );