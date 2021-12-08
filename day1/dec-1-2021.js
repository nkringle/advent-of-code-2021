const fs = require('fs');

const actualMeasurements = fs.readFileSync('input.txt', 'utf8').split('\n').map((row) => parseInt(row.trim()));

const exampleMeasure = [
    199,
    200,
    208,
    210,
    200,
    207,
    240,
    269,
    260,
    263,
];

function countIncreases(array) {
    let increases = 0;
    array.reduce((prev, cur) => {
        if (prev) {
            if (prev > cur) {
                console.log('new value ' + cur + ' is less than previous ' + prev + ' (decreased)');
            } else if (cur > prev) {
                console.log('new value ' + cur + ' is greater than previous ' + prev + ' (increased)');
                increases = increases + 1;
            } else {
                console.log('new value ' + cur + ' is the same as previous ' + prev + ' (no change)');
            }
        } else {
            console.log('starting value doesnt count ' + cur);
        }
        return cur;
    });
    return increases;
}

// part 1
// console.log('total increases ' + countIncreases(actualMeasurements));

// part 2

function getThreeNumSums(inputArray) {
    return [...Array(inputArray.length - 2).keys()]
        .map((index) => {
            return inputArray.slice(index, index + 3).reduce((prev, cur) => prev + cur, 0)
        });
}


let answer = countIncreases(getThreeNumSums(actualMeasurements));

if (answer <= 1524) {
    throw new Error(answer + ' is too small!')
}

console.log(answer);