function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    
    while(bridge.length) {
        bridge.shift();
        time ++;
        
        if(truck_weights.length){
            let bridge_weight = bridge.reduce((a, b) => a + b);
            
            if(bridge_weight + truck_weights[0] <= weight){
                bridge.push(truck_weights.shift());
            } else {
                bridge.push(0);
            }
        }
    }
    
    return time;    
}