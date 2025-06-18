class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        max_heap = [];

        for stone in stones:
            heapq.heappush(max_heap, -stone)

        while len(max_heap) > 1:
            first_stone = -heapq.heappop(max_heap)
            second_stone = -heapq.heappop(max_heap)

            if first_stone == second_stone:
                continue
            else:
                heapq.heappush(max_heap, -(first_stone - second_stone))
            
        if not max_heap:
            return 0
        else:
            return -max_heap[0]
