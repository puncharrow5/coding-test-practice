import math

class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        col_set = [set() for _ in range(9)]
        row_set = [set() for _ in range(9)]
        box_set = [set() for _ in range(9)]

        for i in range(9):
            for j in range(9):
                cell = board[i][j]
                box_index = (i // 3) * 3 + (j // 3)

                if cell == '.':
                    continue

                if cell in row_set[i]:
                    return False
                else:
                    row_set[i].add(cell)

                if cell in col_set[j]:
                    return False
                else:
                    col_set[j].add(cell)

                if cell in box_set[box_index]:
                    return False
                else:
                    box_set[box_index].add(cell)

        return True