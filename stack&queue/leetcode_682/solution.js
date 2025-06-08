/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function(operations) {
    const stack = [];

    for(let i=0; i<operations.length; i++) {
        const operation = operations[i];

        switch(operation) {
            case 'D':
                stack.push(stack[stack.length - 1] * 2);
                break;

            case 'C':
                stack.pop();
                break;

            case '+':
                stack.push(stack[stack.length - 1] + stack[stack.length - 2]);
                break;
            
            default:
                stack.push(Number(operation))
        }
    }

    return stack.reduce((a, b) => (a + b), 0);
};