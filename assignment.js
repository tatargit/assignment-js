//feetToMile

function feetToMile (feet){
    var mile = feet/5280;
    return mile;
}
var outcome = feetToMile(5280);
console.log("Total Mile :" , outcome , "Mile");



//woodCalculator

function woodCalculator(chair, table, bed) {
        var chair = chair * 1;
        var table = table * 3;
        var bed = bed * 5;
        var sum = chair + table + bed;
        return sum;
    }
    var outcome = woodCalculator(8, 4, 3)
console.log('Total Wood :', outcome, 'CFT')



//brickCalculator

function brickCalculator(floor) {
    if (floor >= 1 && floor <= 10) {
        var brick = floor * 15 * 1000;
        return brick;
    }
    else if (floor >= 11 && floor <= 20) {
        var brick = (10 * 15 * 1000) + ((floor - 10) * 12 * 1000);
        return brick;
    }
    else if (floor >= 20) {
        var brick = (10 * 15 * 1000) + (10 * 12 * 1000) + ((floor - 20) * 10 * 1000);
        return brick;
    }
    
}
var outcome = brickCalculator(50);
console.log('Total Bricks :', outcome , "PCS");



//tinyFriend

function tinyFriend(names) {
    if (names === undefined || names.length == 0) {    
    }
    else {
        var shortest = names[0];
        for (var i = 0; i < names.length; i++) {
            var closeName = names[i];
            if (closeName.length < shortest.length) {
                shortest = closeName;
            }
        }
        return shortest;
    }
}
var outcome = tinyFriend(['Shohag', 'Mohib', 'Riju', 'Wareshul']);
console.log('Tiny name :', outcome , " is shorter");