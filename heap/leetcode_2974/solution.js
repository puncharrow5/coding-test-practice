/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    if(!nums.length) {
        return null;
    }

    let result = [];

    nums.sort((a, b) => a - b);

    while(nums.length) {
        const firstNum = nums.shift();
        const secondNum = nums.shift();

        result.push(secondNum);
        result.push(firstNum);
    }

    return result;
};