class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        mapping = {
            "(":")",
            "{":"}",
            "[":"]"
        }

        for char in s:
            if mapping.get(char):
                stack.append(mapping[char])
            else:
                if not stack or stack.pop() != char:
                    return False

        return not stack