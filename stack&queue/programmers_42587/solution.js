function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({ priority, index }));
    let count = 0;
    
    while(queue.length){
        const currentProcess = queue.shift();
        const hasHigherPriority = queue.some(process => process.priority > currentProcess.priority);
                  
        if(hasHigherPriority){
            queue.push(currentProcess)
        } else {
            count ++;
            
            if (currentProcess.index === location){
                return count
            }
        }
    }

    return count;
}