class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0

        num_set = set(nums)
        longest_sequence = 0

        for num in num_set:
            if (num - 1) not in num_set:
                current_num = num
                sequence_length = 1

                while current_num + 1 in num_set:
                    current_num += 1
                    sequence_length += 1

                longest_sequence = max(longest_sequence, sequence_length)

        return longest_sequence