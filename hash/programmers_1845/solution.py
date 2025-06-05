def solution(nums):
    hash_table = {}
    pick_count = len(nums) / 2
    
    for n in nums:
        hash_table[n] = hash_table.get(n, 0) + 1
    
    return min(pick_count, len(hash_table))