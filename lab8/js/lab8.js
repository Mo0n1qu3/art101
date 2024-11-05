// author: Monique Willard
// creeated: 10.30.24

var newArray = [3,9,16,4];

function subTwo(x) {
    var results = x - 2;
    return results;

}

newArray.map(function subTwo(x){
    var results = x - 2;
    return results;

});

var mapResults = newArray.map(function subTwo(x) {
    var results = x - 2;
    return results;

});


var mapResults = "Your map results here";
$("#output").html(mapResults);



