const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbersArray) {
  if(numbersArray.length !== 0){
     let res = numbersArray.reduce((accumulator, currentValue ) => {
      return accumulator + currentValue;
    }, 0);
    return res;
  }
  else{
    return 0;
  }
};

const multiply = function(numbersArray) {
    let resp = numbersArray.reduce((accumulator, currentValue ) => {
     return accumulator * currentValue;
   }, 1);
   return resp;
};

const power = function(num, powerNum) {
	return num ** powerNum;
};

const factorial = function(num) {
  if(num != 0){
    let acc = 1;
    for(let i = 1; i <= num; i++){
      acc *= i;
    }
    return acc;
  }
  else{
    return 1;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
