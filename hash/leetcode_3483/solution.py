from collections import Counter

class Solution:
    def totalNumbers(self, digits: List[int]) -> int:
        unique_numbers = set()
        counts = Counter(digits)

        for i in range(1, 10):
            if counts[i] == 0:
                continue
            
            counts[i] -= 1

            for j in range(10):
                if counts[j] == 0:
                    continue

                counts[j] -= 1

                for k in range(0, 10, 2):
                    if counts[k] == 0:
                        continue

                    num = i * 100 + j * 10 + k
                    unique_numbers.add(num)

                counts[j] += 1
            counts[i] += 1
        
        return len(unique_numbers)