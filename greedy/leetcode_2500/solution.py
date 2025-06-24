from typing import List

class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        result = 0

        m = len(grid)
        n = len(grid[0])

        for i in range(m):
            grid[i].sort(reverse=True)

        for j in range(n):
            max_value = 0

            for i in range(m):
                max_value = max(max_value, grid[i][j])

            result += max_value

        return result