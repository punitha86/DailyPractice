const parentIndex = (index) => (index - 1) >> 1;
const childrenIndices = (index) => [index * 2 + 1, index * 2 + 2];
class Heap {
    constructor(initial, compare = (a, b) => a > b) {
        this.compare = compare;
        this.heap = [];
        initial.forEach(item => this.push(item));
    }
    push(val) {
        const node = { val, index: this.heap.length };
        this.heap.push(node);
        this.shiftUp(this.heap.length - 1);
        return node;
    }
    top() {
        return this.heap.length ? this.heap[0].val : null;
    }
    pop() {
        const top = this.top();
        if (this.size()) {
            const { val } = this.heap.pop();
            if (this.size()) {
                this.heap[0] = { val, index: 0 };
                this.shiftDown(0);
            }
        }
        return top;
    }
    allNodes() {
        return this.heap;
    }
    size() {
        return this.heap.length;
    }
    remove(node) {
        if (this.heap.length - 1 === node.index) {
            this.heap.pop();
        }
        else {
            const last = this.heap.pop();
            this.heap[node.index] = last;
            last.index = node.index;
            const index = node.index;
            if (index !== 0 && this.compare(this.heap[index].val, this.heap[parentIndex(index)].val)) {
                this.shiftUp(index);
            }
            else {
                this.shiftDown(index);
            }
        }
    }
    shiftUp(index) {
        while (true) {
            if (index === 0) {
                break;
            }
            const parent = parentIndex(index);
            if (this.compare(this.heap[index].val, this.heap[parent].val)) {
                [this.heap[index].index, this.heap[parent].index] = [parent, index];
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
                index = parent;
            }
            else {
                break;
            }
        }
    }
    shiftDown(index) {
        while (true) {
            const [l, r] = childrenIndices(index);
            const [compL, compR] = [
                l < this.heap.length && this.compare(this.heap[l].val, this.heap[index].val),
                r < this.heap.length && this.compare(this.heap[r].val, this.heap[index].val),
            ];
            let next = compL ? l : null;
            if (compR && (!compL || this.compare(this.heap[r].val, this.heap[l].val))) {
                next = r;
            }
            if (next === null) {
                break;
            }
            [this.heap[index].index, this.heap[next].index] = [next, index];
            [this.heap[index], this.heap[next]] = [this.heap[next], this.heap[index]];
            index = next;
        }
    }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const heap = new Heap(stones);
    while(heap.size() >1) {
        const [a, b] = [heap.pop(), heap.pop()];
        if (a !== b) {
            heap.push(a-b);
        }
    }
    return heap.size() ? heap.pop() : 0;
};
