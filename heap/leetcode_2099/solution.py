from typing import List
import heapq

class Solution:
    def maxSubsequence(self, nums: List[int], k: int) -> List[int]:
        top_k = heapq.nlargest(k, enumerate(nums), key=lambda x: x[1])

        top_k.sort(key=lambda x: x[0])

        return [val for idx, val in top_k]