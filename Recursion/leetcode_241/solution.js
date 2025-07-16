/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
    const memo = new Map();

    function compute(subExpression) {
        if (memo.has(subExpression)) {
            return memo.get(subExpression);
        }

        const result = [];
        let isNumber = true;

        for (let i=0; i<subExpression.length; i++) {
            const char = subExpression[i];

            if (char === '+' || char === '-' || char === '*') {
                isNumber = false;
                
                const leftResult = compute(subExpression.substring(0, i));
                const rightResult = compute(subExpression.substring(i + 1));

                for (const leftVal of leftResult) {
                    for (const rightVal of rightResult) {
                        if (char === '+') {
                            result.push(leftVal + rightVal);
                        } else if (char === '-') {
                            result.push(leftVal - rightVal);
                        } else {
                            result.push(leftVal * rightVal);
                        }
                    }
                }
            }
        }

        if (isNumber) {
            result.push(Number(subExpression));
        }

        memo.set(subExpression, result);
        return result;
    }

    return compute(expression);
};