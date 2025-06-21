class Solution:
    def kWeakestRows(self, mat: List[List[int]], k: int) -> List[int]:
        rows_strength = []
        
        def count_soldiers(row: List[int]) -> int:

            low, high = 0, len(row)

            while low < high:
                mid = (low + high) // 2
                if row[mid] == 1:
                    low = mid + 1
                else:
                    high = mid
            return low

        for i, row in enumerate(mat):
            count = count_soldiers(row)
            rows_strength.append([count, i]) 

        rows_strength.sort()

        result = []

        for i in range(k):
            result.append(rows_strength[i][1])

        return result