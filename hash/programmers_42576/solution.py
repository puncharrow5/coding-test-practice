def solution(participant, completion):
    hashTable = {}
    
    for p in participant:
        hashTable[p] = hashTable.get(p, 0) + 1
        
    for c in completion:
        hashTable[c] -= 1
    
    for name, count in hashTable.items():
        if count:
            return name