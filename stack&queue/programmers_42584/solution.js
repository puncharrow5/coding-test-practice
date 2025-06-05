function solution(prices) {
    const priceLength = prices.length;
    const answer = Array(priceLength).fill(0); 
    const stack = []; 

    for (let i = 0; i < priceLength; i++) {
        while (stack.length && prices[stack[stack.length - 1]] > prices[i]) {
            const topIndex = stack.pop(); 
            answer[topIndex] = i - topIndex; 
        }
        
        stack.push(i);
    }

    while (stack.length) {
        const topIndex = stack.pop();
        answer[topIndex] = (priceLength - 1) - topIndex; 
    }

    return answer;
}