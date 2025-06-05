function solution(nums) {
    const numsMap = new Map()
    
    const pickCount = nums.length / 2;
    
    for (const n of nums) {
        numsMap.set(n, (numsMap.get(n) || 0) + 1);
    }
    
    return Math.min(pickCount, numsMap.size);
}