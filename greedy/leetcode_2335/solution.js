/**
 * @param {number[]} amount
 * @return {number}
 */
var fillCups = function(amount) {
    let seconds = 0;

    while(amount[0] + amount[1] + amount[2] > 0) {
        amount.sort((a, b) => b - a);
        
        amount[0]--;
        amount[1] = amount[1] > 0 ? amount[1] - 1 : 0;
        
        seconds++;
    }
    return seconds;
};