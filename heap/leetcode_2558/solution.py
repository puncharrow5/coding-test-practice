from typing import List
import heapq
import math

class Solution:
    def pickGifts(self, gifts: List[int], k: int) -> int:
        max_heap = []
        result = 0

        for gift in gifts:
            heapq.heappush(max_heap, -gift)
        
        for _ in range(k):
            max_value = -heapq.heappop(max_heap)

            if max_value == 0:
                heapq.heappush(max_heap, 0)
                continue

            heapq.heappush(max_heap, -math.floor(math.sqrt(max_value)))

        while len(max_heap):
            gift = heapq.heappop(max_heap)
            result += -gift

        return result