class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        stack_s = []
        stack_t = []

        for char in s:
            if char == '#':
                if stack_s:
                    stack_s.pop()
            else:
                stack_s.append(char)

        for char in t:
            if char == '#':
                if stack_t:
                    stack_t.pop()
            else:
                stack_t.append(char)
        
        stringify_s = ''.join(stack_s)
        stringify_t = ''.join(stack_t)
        
        if stringify_s == stringify_t: return True
        
        return False