/**
 * initialize your data structure here.
 */

  class Stack {
  constructor() {

    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {

    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Returns the last item without removing it
  top() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}


var MinStack = function() {
    this.items=[];
    this.stack = new Stack();
    this.minStack= new Stack();
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.minStack.top() === null || x<= this.minStack.top()){
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const item = this.stack.pop();
    if (item === this.minStack.top()) {
      this.minStack.pop();
    }
    return item;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  this.items[this.items.length - 1];
      if (!this.items.length) {
      return null;
    }
    console.log(this.items[this.items.length - 1]);
    return this.items[this.items.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.top();
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
  var obj = new MinStack()
  obj.push(-1)
  obj.pop()
  var param_3 = obj.top()
  var param_4 = obj.getMin()
  console.log(param_4);
