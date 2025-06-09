/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let peak = 0;
    let balance = 0;

    for(const char of s) {
        if(char === '(') {
            balance ++;

            if(balance > peak) {
                peak ++;
            }
        } else if(char === ')') {
            balance --;
        }
    }

    return peak;
};