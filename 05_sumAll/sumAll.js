const sumAll = function(int1, int2) {

    //variable to hold sum
    let sum = 0;

    //to check if first number is less than second
    if(int1 < int2){
        for (i = int1; i <= int2; i++)
            {
                sum += i;
            
            }
    }
    
    //to check if first number is larger than second number
    else {
        for (i = int1; i >= int2; i--)
        {
            sum += i;
        }
    }

    //return sum
    return sum
};

console.log(sumAll(4,1));

// Do not edit below this line
module.exports = sumAll;

