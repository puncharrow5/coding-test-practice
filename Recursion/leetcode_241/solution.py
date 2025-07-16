from typing import List

class Solution:
    def diffWaysToCompute(self, expression: str) -> List[int]:
        self.memo = {}

        def compute(sub_expression: str) -> list[int]:
            if sub_expression in self.memo:
                return self.memo[sub_expression]

            result = []
            is_number = True

            for i, char in enumerate(sub_expression):
                if char in ['+', '-', '*']:
                    is_number = False

                    left_result = compute(sub_expression[:i])
                    right_result = compute(sub_expression[i+1:])

                    for left_val in left_result:
                        for right_val in right_result:
                            if char == '+':
                                result.append(left_val + right_val)
                            elif char == '-':
                                result.append(left_val - right_val)
                            else:
                                result.append(left_val * right_val)
            
            if is_number:
                result.append(int(sub_expression))

            self.memo[sub_expression] = result
            return result
        
        return compute(expression)