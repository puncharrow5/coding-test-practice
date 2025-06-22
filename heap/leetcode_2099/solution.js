/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    const indexedNums = nums.map((num, index) => [num, index]);

    indexedNums.sort((a, b) => b[0] - a[0]);

    const topK = indexedNums.slice(0, k).sort((a, b) => a[1] - b[1]);
    const result = topK.map(pair => pair[0]);

    return result;
};