//main function to remove from array
const removeFromArray = function(array, ...args) {
    return array.filter(val => shouldKeepValue(val, args))
  }
 
  //function to pass into filter() call back since filter 
  //automatically takes one argument and we migth need
  
  function shouldKeepValue(val, args) {
   return !args.includes(val);
  }
     

// Do not edit below this line
module.exports = removeFromArray;
