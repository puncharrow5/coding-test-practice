class MaxHeap {
    constructor() {
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

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
    }

    insert(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.size() - 1;

        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown() {
        let index = 0;

        while (this.getLeftChildIndex(index) < this.size()) {
            let largerChildIndex = this.getLeftChildIndex(index);

            const rightChildIndex = this.getRightChildIndex(index);

            if (rightChildIndex < this.size() && this.heap[rightChildIndex] > this.heap[largerChildIndex]) {
                largerChildIndex = rightChildIndex;
            }

            if (this.heap[index] >= this.heap[largerChildIndex]) {
                break;
            }

            this.swap(index, largerChildIndex); 
            index = largerChildIndex; 
        }   
    }

    extractMax() {
        if (this.isEmpty()) {
            return null;
        } else if (this.size() === 1) {
            return this.heap.pop();
        }

        const max = this.heap[0];

        this.heap[0] = this.heap.pop();
        this.heapifyDown();

        return max;
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const maxHeap = new MaxHeap();

    for (const stone of stones) {
        maxHeap.insert(stone);
    }

    while (maxHeap.size() > 1) {
        const firstStone = maxHeap.extractMax();
        const secondStone = maxHeap.extractMax();

        if (firstStone !== secondStone) {
            maxHeap.insert(firstStone - secondStone);
        }
    }

    return maxHeap.isEmpty() ? 0 : maxHeap.peek();
};