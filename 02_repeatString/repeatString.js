const repeatString = function(string, num) {
    let wordToRepeat = string;
    if(num !== 0 && num > 0){
        for(i = 1; i < num; i++) {
            wordToRepeat += string;
        }
        return (wordToRepeat)
    }
    else if(num < 0){
        return ("ERROR");
    }
    else{
        return '';
    }
};

// Do not edit below this line
module.exports = repeatString;