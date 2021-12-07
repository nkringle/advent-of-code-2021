const measurements = [];

let increase = 0;
measurements.reduce((prev, cur ) => {
    if (prev) {
        if (prev > cur) {
            console.log('prev ' + prev + ' is greater than cur ' + cur + ' (decreased)');
        } else if (cur > prev) {
            console.log('prev ' + prev + ' is less than cur ' + cur + ' (increased)');
            increases = increases + 1;
        } else {
            console.log('no change');
        }
    }
    return cur;
})


console.log('total increases is ' + increases);
