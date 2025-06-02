import math

def solution(progresses, speeds):
    answer = []
    
    days = [math.ceil((100 - a) / b) for a, b in zip(progresses, speeds)]

    maxDay = days[0]
    count = 1
    
    for i in range(1, len(days)):
        if days[i] <= maxDay:
            count += 1
        else:
            answer.append(count)
            maxDay = days[i]
            count = 1

    answer.append(count)
            
    return answer