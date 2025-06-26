class MaxHeap {
    constructor () {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]; 
    }

    insert(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.size() - 1;

        while(this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;

        while(this.getLeftChildIndex(index) < this.size()) {
            let largerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            if(rightChildIndex < this.size() && this.heap[rightChildIndex] > this.heap[largerChildIndex]) {
                largerChildIndex = rightChildIndex;
            }

            if(this.heap[index] >= this.heap[largerChildIndex]) {
                break;
            }

            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    }

    extractMax() {
        if(this.isEmpty()) {
            return null;
        }

        if(this.size() === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return max
    }
}

/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */
var pickGifts = function(gifts, k) {
    const maxHeap = new MaxHeap();
    let result = 0;

    for(const gift of gifts) {
        maxHeap.insert(gift);
    }

    for(let i=0; i<k; i++) {
        const maxValue = maxHeap.extractMax();

        if (maxValue === 0) {
            maxHeap.insert(0);
            continue;
        }

        maxHeap.insert(Math.floor(Math.sqrt(maxValue)));
    }

    while(!maxHeap.isEmpty()) {
        result += maxHeap.extractMax();
    }

    return result;
};