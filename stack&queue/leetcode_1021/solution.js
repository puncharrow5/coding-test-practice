/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    const stack = [];
    let balance = 0;

    for(const char of s) {
        if (char === '(') {
            if(balance > 0) {
                stack.push(char);
            }
            
            balance ++;
        } else {
            balance --;
            
            if(balance > 0) {
                stack.push(char);
            }
        }
    }

    return stack.join('')
};