/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let result = 0;

    nums.sort((a, b) => a - b);

    for (let i=0; i<nums.length/2; i++) {
        result += nums[2*i]
    }

    return result;
};