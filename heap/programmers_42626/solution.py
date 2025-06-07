import heapq

def solution(scoville, K):
    heapq.heapify(scoville);
    
    count = 0
    
    while scoville[0] < K and len(scoville) >= 2:
        first_scoville = heapq.heappop(scoville)
        second_scoville = heapq.heappop(scoville)
        
        mixed_scoville = first_scoville + (second_scoville * 2)
        
        heapq.heappush(scoville, mixed_scoville)
        
        count += 1
    
    if scoville[0] >= K:
        return count
    else:
        return -1