class Solution:
    def validPalindrome(self, s: str) -> bool:
        left = 0
        right = len(s) - 1

        def is_palindrome(s_sub: str, left_index: int, right_index: int) -> bool:
            while left_index < right_index:
                if s_sub[left_index] != s_sub[right_index]:
                    return False  
                left_index += 1   
                right_index -= 1 
            return True      


        while left < right:
            if s[left] != s[right]:
                return is_palindrome(s, left + 1, right) or is_palindrome(s, left, right - 1)
            
            left += 1
            right -= 1

        return True