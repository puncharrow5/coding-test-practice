class Solution:
    def largestInteger(self, num: int) -> int:
        digits = [int(d) for d in str(num)]

        odd_digits = sorted([d for d in digits if d % 2 == 1], reverse=True)
        even_digits = sorted([d for d in digits if d % 2 == 0], reverse=True)
        result = []

        odd_index = 0
        even_index = 0

        for d in digits:
            if d % 2 == 0:
                result.append(even_digits[even_index])
                even_index += 1
            else:
                result.append(odd_digits[odd_index])
                odd_index += 1

        return int("".join(map(str, result)))