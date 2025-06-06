function solution(clothes) {
    const hashTable = {}
    let answer = 1;
    
    clothes.forEach(cloth => {
        const [name, category] = cloth;
        
        if(hashTable.hasOwnProperty(category)){
            hashTable[category] ++;
        } else {
            hashTable[category] = 1;
        }
    })
    
    for(const key in hashTable) {
        answer *= (hashTable[key] + 1);
    }
    
    return answer - 1;
}