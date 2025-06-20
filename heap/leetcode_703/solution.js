class MinHeap {
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
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    insert(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.size() - 1;

        while (this.getParentIndex(index) >= 0 && this.heap[this.getParentIndex(index)] > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    extractMin() {
        if(this.isEmpty()) {
            return null;
        } else if(this.size() === 1){
            return this.heap.pop();
        }

        const min = this.heap[0];
          
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyDown() {
        let index = 0;

        while (this.getLeftChildIndex(index) < this.size()) {
            let leftChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);
            let smallerChildIndex = leftChildIndex;

            if (rightChildIndex < this.size() && this.heap[rightChildIndex] < this.heap[leftChildIndex]) {
                smallerChildIndex = rightChildIndex;
            } 
            
            if (this.heap[index] <= this.heap[smallerChildIndex]) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    peek() {
        return this.isEmpty() ? null : this.heap[0];
    }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.minHeap = new MinHeap(); 

    for (const num of nums) {
        this.add(num);
    }
};

/** * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.minHeap.insert(val);

    if (this.minHeap.size() > this.k) {
        this.minHeap.extractMin();
    }

    return this.minHeap.peek();
};