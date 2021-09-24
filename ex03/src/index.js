function rangeOfNumbers(startN, endN) {
    if (startN === endN) {
        return [startN];

    } else {
        var counter = rangeOfNumbers(startN, endN - 1);
        counter.push(endN);
        return counter;
    }
}
        
console.log(rangeOfNumbers(1,7));

module.exports = rangeOfNumbers;