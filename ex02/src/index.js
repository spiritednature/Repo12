function myCounter(n) {
    if (n < 1) {
        return[];
    } else {
        var countArray = myCounter(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}

console.log(myCounter(10));

module.exports = myCounter;