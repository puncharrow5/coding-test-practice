from typing import List

class Solution:
    def numberGame(self, nums: List[int]) -> List[int]:
        if not nums:
            return None

        result = []

        nums.sort()

        while nums:
            first_num = nums.pop(0)
            second_num = nums.pop(0) if nums else None

            result.append(second_num)
            result.append(first_num)

        return result