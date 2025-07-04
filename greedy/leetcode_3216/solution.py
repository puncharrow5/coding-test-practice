class Solution:
    def getSmallestString(self, s: str) -> str:
        result = s
        arr = list(s)

        def check_same_parity(num_1: str, num_2:str) -> bool:
            return int(num_1) % 2 == int(num_2) % 2

        for i in range(len(arr) - 1):
            is_same_parity = check_same_parity(arr[i], arr[i+1])

            if is_same_parity and arr[i] > arr[i+1]:
                current_arr = arr[:]

                current_arr[i] = arr[i+1]
                current_arr[i+1] = arr[i]

                current_string = "".join(current_arr)

                if current_string < result:
                    result = current_string

        return result
