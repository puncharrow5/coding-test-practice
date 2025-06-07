class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    
    getParent(i) {
        return this.heap[this.getParentIndex(i)];
    }
    
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    
    getLeftChild(i) {
        if (this.hasLeftChild(i)) {
            return this.heap[this.getLeftChildIndex(i)];
        }
    }
    
    getRightChildIndex(i) {
        return 2 * i + 2;
    }
    
    getRightChild(i) {
        if (this.hasRightChild(i)) {
            return this.heap[this.getRightChildIndex(i)];
        }
    }
    
    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }
    
    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length;
    }
    
    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length;
    }
    
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }
    
    peak() {
        if(this.heap.length === 0) return 0;
        return this.heap[0];
    }
    
    size() {
        return this.heap.length;
    }
    
    heapifyUp() {
        let index = this.heap.length - 1;
        
        while (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }
    
    heapifyDown() {
        let index = 0;
        
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            
            if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            
            index = smallerChildIndex;
        }
    }
    
    insert(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
    
    extractMin() {
        if(this.heap.length === 0) return null;
        if(this.heap.length === 1) return this.heap.pop();
        
        const item = this.heap[0];
        
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        
        return item;
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap(); 
    let count = 0;
    
    for (const s of scoville) {
        minHeap.insert(s);
    }
    
    while (minHeap.peak() < K && minHeap.size() >= 2) {
        const firstScoville = minHeap.extractMin();
        const secondScoville = minHeap.extractMin();
        
        const mixedScoville = firstScoville + (secondScoville * 2);
        
        minHeap.insert(mixedScoville);
        
        count ++;
    }
    
    if(minHeap.peak() >= K) {
        return count;
    } else {
        return -1;
    }
    
}