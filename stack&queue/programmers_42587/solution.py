def solution(priorities, location):
    queue = [(index, priority) for index, priority in enumerate(priorities)]
    count = 0
    
    while(queue):
        current_process = queue.pop(0)
        has_higher_priority = any(current_process[1] < process[1] for process in queue)
        
        if has_higher_priority:
            queue.append(current_process)
        else:
            count += 1
            
            if current_process[0] == location:
                return count

    return count