def solution(prices):
    price_length = len(prices)
    answer = [0] * price_length
    stack = [] 

    for i in range(price_length):
        while stack and prices[stack[-1]] > prices[i]:
            top_index = stack.pop()
            answer[top_index] = i - top_index
        
        stack.append(i)

    while stack:
        top_index = stack.pop()
        answer[top_index] = (price_length - 1) - top_index
            
    return answer