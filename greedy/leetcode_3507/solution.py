from typing import List

class Solution:
    def minimumPairRemoval(self, nums: List[int]) -> int:
        count = 0;

        def isSorted(arr):
            for i in range(1, len(arr)):
                if arr[i] < arr[i - 1]:
                    return False        
            return True

        while not isSorted(nums):
            min_sum = float('inf')
            min_index = -1

            for i in range(len(nums) - 1):
                sum = nums[i] + nums[i+1]

                if sum < min_sum:
                    min_sum = sum
                    min_index = i
                
            nums[min_index:min_index + 2] = [min_sum]
            count += 1

        return count
        
        