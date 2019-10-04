function addAll(array) {
    //use Math.max to look at index of both element and return the largest
    var max = Math.max(array[0], array[1]);
    // return the smallest
    var min = Math.min(array[0], array[1]);

    var total = 0;
    //initialize min and test of largest value and update
    for (var i = min; i <= max; i++) {
        total += i;
    }
    return total;
}

addAll([1,5]); //15 = 1+2+3+4+5