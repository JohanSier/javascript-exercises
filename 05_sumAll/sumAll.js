const sumAll = function(initial, final) {
    let sum = 0
    while (typeof initial !== 'number' || typeof final !== 'number') {
        return 'ERROR'
    }
    if(initial > 0 && initial < final){
        for (i = initial; i <= final; i++) {
            sum += i
        }
    }
    else if (final > 0 && initial > final){
        for (i = initial; i >= final; i--) {
            sum += i
        }
    }
    else{
        return 'ERROR'
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
