/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let map = {};
    let result = 0;
    let hasOdd = false;

    for(const char of s) {
        map[char] = (map[char] ?? 0) + 1;
    }

    for(const value of Object.values(map)) {
        if (value % 2 === 0) {
            result += value;
        } else {
            result += value - 1;
            hasOdd = true;
        }
    }

    if(hasOdd) {
        result ++;
    }

    return result;
};