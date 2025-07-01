from typing import List

class Solution:
    def findContentChildren(self, g: List[int], s: List[int]) -> int:
        greed_index = 0
        cookie_index = 0

        g.sort()
        s.sort()

        while greed_index < len(g) and cookie_index < len(s):
            if s[cookie_index] >= g[greed_index]:
                greed_index += 1
                cookie_index += 1
            else:
                cookie_index += 1
        
        return greed_index