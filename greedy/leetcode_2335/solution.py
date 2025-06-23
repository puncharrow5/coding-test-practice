from typing import List

class Solution:
    def fillCups(self, amount: List[int]) -> int:
        seconds = 0

        while amount[0] + amount[1] + amount[2] > 0:
            amount.sort(reverse = True)

            amount[0] -= 1

            if amount[1] > 0:
                amount[1] -= 1
            else:
                amount[1] = 0
            
            seconds += 1

        return seconds
        