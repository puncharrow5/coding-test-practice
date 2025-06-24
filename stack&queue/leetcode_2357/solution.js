/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count = 0;

    const numSet = new Set();

    for (const num of nums) {
        if (num !== 0) {
            numSet.add(num);
        }
    }

    return numSet.size;
};