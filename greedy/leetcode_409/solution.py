class Solution:
    def longestPalindrome(self, s: str) -> int:
        map = {}
        result = 0
        has_odd = False

        for char in s:
            map[char] = map.get(char, 0) + 1

        for value in map.values():
            if value % 2 == 0:
                result += value
            else:
                result += value - 1
                has_odd = True

        if has_odd:
            result += 1
        
        return result
        