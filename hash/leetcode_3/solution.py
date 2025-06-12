class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        alphabet_set = set([])
        left = 0
        peak = 0

        for right in range(len(s)):
            while s[right] in alphabet_set:
                alphabet_set.remove(s[left])
                left += 1

            alphabet_set.add(s[right])
            
            peak = max(peak, right - left + 1)

        return peak