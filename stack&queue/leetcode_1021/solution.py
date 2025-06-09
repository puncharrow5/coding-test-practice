class Solution:
    def removeOuterParentheses(self, s: str) -> str:
        stack = []
        balance = 0

        for char in s:
            if char == '(':
                if balance > 0:
                    stack.append(char)
                
                balance += 1
            else:
                balance -= 1
                
                if balance > 0:
                    stack.append(char)
            
        return ''.join(stack)
        