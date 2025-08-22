class PriorityQueue {
    heap =[];  
    
    getSize() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    heapifyUp(i) {
        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[i].priority < this.heap[parent].priority) {
                this.swap(i, parent);
                i = parent;
            } else {
                break;
            }
        }
    }

    insert(item, priority) {
        this.heap.push({item, priority});
        this.heapifyUp(this.heap.length - 1);
    }

    peak() {
        return this.heap[0];
    }

    heapifyDown(i) {
        while (true) {
            let smallest = i;
            let left = i * 2 + 1;
            let right = i * 2 + 2;

            if (left < this.heap.length && this.heap[left].priority < this.heap[smallest].priority) {
                smallest = left;
            }

            if (right < this.heap.length && this.heap[right].priority < this.heap[smallest].priority) {
                smallest = right;
            }

            if (i !== smallest) {
                this.swap(i, smallest);
                i = smallest;
            } else {
                break;
            }
        }
    }

    shift() {
        if (this.heap.length === 0) return null;

        this.swap(0, this.heap.length - 1);
        let min = this.heap.pop();
        this.heapifyDown(0);
        return min;

    }
}

export default PriorityQueue;