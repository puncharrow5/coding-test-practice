def solution(s):
    balance = 0
    
    for i in range(len(s)):
        if(s[i] == '('):
            balance += 1
        else:
            balance -= 1
            
        if(balance < 0):
            return False

    return balance == 0