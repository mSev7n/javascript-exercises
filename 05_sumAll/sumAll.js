const sumAll = function(int1, int2) {

    let sum = 0;
    for (i = int1; i <= int2; i++)
    {
        sum += i;
    }

    return sum
};

console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;

