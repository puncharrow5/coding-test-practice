from typing import List

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        result = 0

        nums.sort()

        for i in range(len(nums)//2):
            result += nums[2 * i]

        return result