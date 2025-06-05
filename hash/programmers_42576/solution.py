def solution(participant, completion):
    hash_table = {}
    
    for p in participant:
        hash_table[p] = hash_table.get(p, 0) + 1
        
    for c in completion:
        hash_table[c] -= 1
    
    for name, count in hash_table.items():
        if count:
            return name