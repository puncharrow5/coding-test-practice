from typing import List

class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        num_set = set()

        for num in nums:
            if num != 0:
                num_set.add(num)
            
        return len(num_set)