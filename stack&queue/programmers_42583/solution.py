def solution(bridge_length, weight, truck_weights):
    time = 0
    bridge = [0] * bridge_length
    
    while bridge:
        bridge.pop(0)
        time += 1
        
        if truck_weights:
            bridge_weight = sum(bridge)
            
            if(bridge_weight + truck_weights[0] <= weight):
                bridge.append(truck_weights.pop(0))
            else:
                bridge.append(0)
        
    return time