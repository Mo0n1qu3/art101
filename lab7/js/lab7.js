// index.js - Lab 6
// Author: monique willard
// Date: 10.28.24

function sortUserName(){
    var userName = window.prompt("Hello there, Please let me know your name so I can fix it");
    console.log("userName =", userName);
    var nameArray = userName.split('');
    console.log("namArray=", nameArray);
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    return nameSorted;
}

document.writeln("Here's your new name, all fixed up: ",
    sortUserName(), "</br>");
