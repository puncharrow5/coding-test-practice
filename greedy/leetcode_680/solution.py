class Solution:
    def validPalindrome(self, s: str) -> bool:
        left_index = 0
        right_index = len(s) - 1
        
        def is_palindrome(string: str, left: int, right: int) -> bool:
            while left < right:
                if string[left] != string[right]:
                    return False
                
                left += 1
                right -= 1
            
            return True

        while left_index < right_index:
            if s[left_index] != s[right_index]:
                return is_palindrome(s, left_index + 1, right_index) or is_palindrome(s, left_index, right_index - 1)

            left_index += 1
            right_index -= 1

        return True