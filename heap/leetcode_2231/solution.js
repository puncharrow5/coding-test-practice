/**
 * @param {number} num
 * @return {number}
 */
var largestInteger = function(num) {
    const digits = Array.from(String(num), Number);

    const oddDigits = [];
    const evenDigits = [];
    const result = [];
    
    for(const digit of digits) {
        if (digit % 2 === 0){
            evenDigits.push(digit)
        } else {
            oddDigits.push(digit)
        }
    }

    oddDigits.sort((a, b) => b - a);
    evenDigits.sort((a, b) => b - a);

    let oddIndex = 0;
    let evenIndex = 0;


    for (let i = 0; i < digits.length; i++) {
        if (digits[i] % 2 === 0) {
            result[i] = evenDigits[evenIndex++];
        } else {
            result[i] = oddDigits[oddIndex++];
        }
    }

    return parseInt(result.join(''));
};