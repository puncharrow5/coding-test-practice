class Solution:
    def calPoints(self, operations: List[str]) -> int:
        stack = []

        for i in range(len(operations)):
            operation = operations[i]
        
            if operation == 'D':
                stack.append(stack[-1] * 2)
            elif operation == 'C':
                stack.pop()
            elif operation == '+':
                stack.append(stack[-1] + stack[-2])
            else:
                stack.append(int(operation))
        
        return sum(stack)