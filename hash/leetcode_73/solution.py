class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        row_group = set()
        col_group = set()
        
        row_len = len(matrix)
        col_len = len(matrix[0])

        for i in range(row_len):
            for j in range(col_len):
                if matrix[i][j] == 0:
                    row_group.add(i)
                    col_group.add(j)

        for row in row_group:
            matrix[row] = [0] * col_len
        
        for col in col_group:
            for i in range(row_len):
                matrix[i][col] = 0