function solution(participant, completion) {
    const participantMap = new Map()
    
    for (const p of participant) {
        participantMap.set(p, (participantMap.get(p) || 0) + 1)
    }
    
    for (const c of completion) {
        participantMap.set(c, participantMap.get(c) - 1);
    }
    
    for (const [name, count] of participantMap) {
        if(count) {
            return name
        }
    }
}