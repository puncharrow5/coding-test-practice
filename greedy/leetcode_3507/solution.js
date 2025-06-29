/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumPairRemoval = function(nums) {
    let count = 0;

    const isSorted = (arr) => {
        for(let i=1; i<arr.length; i++) {
            if(arr[i] < arr[i-1]) return false;
        }

        return true;
    }

    while(!isSorted(nums)) {
        let minSum = Infinity;
        let minIndex = -1;

        for(let i=0; i<nums.length - 1; i++) {
            const sum = nums[i] + nums[i+1];

            if(sum < minSum) {
                minSum = sum;
                minIndex = i;
            }
        }

        nums.splice(minIndex, 2, minSum);
        count++;
    }

    return count;
};