/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (nums.length === 0) {
        return 0;
    }

    const numSet = new Set(nums);
    let longestSequence = 0;

    for (const num of numSet) {
        if(!numSet.has(num - 1)) {
            let currentNum = num;
            let squenceLength = 1;

            while (numSet.has(currentNum + 1)) {
                currentNum ++;
                squenceLength ++;
            }

            longestSequence = Math.max(squenceLength, longestSequence)
        }
    }

    return longestSequence;
};