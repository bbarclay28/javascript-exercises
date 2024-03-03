const reverseString = function(word) {
let splitString = word.split("")
let reverse = splitString.reverse()
let join = reverse.join("")
return join
};

// Do not edit below this line
module.exports = reverseString;
