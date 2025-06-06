def solution(clothes):
    hash_table = {}
    answer = 1
    
    for name, category in clothes:
        if category in hash_table:
            hash_table[category] += 1
        else:
            hash_table[category] = 1
    
    for key in hash_table:
        answer *= (hash_table[key] + 1)
    
    return answer - 1