class Solution:
    def maxDepth(self, s: str) -> int:
        peak = 0
        balance = 0

        for char in s:
            if char == '(':
                balance += 1

                if balance > peak:
                    peak += 1

            elif char == ')':
                balance -= 1

        return peak 