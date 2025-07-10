class Solution:
    def lastRemaining(self, n: int) -> int:
        if n == 1:
            return 1

        def solve(remain: int, head: int, step: int, isLeftToRight: bool) -> int:
            if remain == 1:
                return head

            if isLeftToRight or remain % 2 == 1:
                head += step

            return solve(remain // 2, head, step * 2, not isLeftToRight)

        return solve(n, 1, 1, True)