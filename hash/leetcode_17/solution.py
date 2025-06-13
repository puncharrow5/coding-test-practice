class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
            if not digits:
                return []

            map =  ['','','abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz' ]
            result = []

            def backtrack(index, value):
                if index == len(digits):
                    result.append(value)
                    return

                letters = map[int(digits[index])]
                
                for char in letters:
                    backtrack(index + 1, value + char)

            backtrack(0, "")

            return result