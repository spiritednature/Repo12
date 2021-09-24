function sumFibonacci(num) {
    var fibSequence = [0, 1];
    var sumOdd = 1;
    var counter = iterateUp(counter)

    function iterateUp(counter) {
        return fibSequence[fibSequence.length - 2] +
        fibSequence[fibSequence.length - 1]
    }

    function isOdd(counter) { return counter % 2 != 0 }

    while (counter <= num) {
    fibSequence.push(counter);
        if (isOdd(counter)) { sumOdd += counter; } 
    counter = iterateUp(counter);
    }

    return sumOdd;
}

console.log(sumFibonacci(20));

module.exports = sumFibonacci;