
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
peek() {
  if (!this.items.length) {
    return null;
  }
  return this.items[this.items.length - 1];
}
}




class MaxStack {
constructor() {

  // Initialize an empty stack

  this.stack= new Stack();
  this.maxesStack= new Stack();
}

// Push a new item onto the stack
push(item) {
  this.stack.push(item);
  if(this.maxesStack.peek()===null || this.maxesStack.peek()<item){
    this.maxesStack.push(item);
  }
}

// Remove and return the last item
pop() {

  // If the stack is empty, return null
  // (It would also be reasonable to throw an exception)
  if (!this.stack.length) {
    return null;
  }
  if(this.stack.pop() === this.maxesStack.peek()){
    this.maxesStack.pop();
  }
  return this.stack.pop();
}

// Returns the last item without removing it
peek() {
  if (!this.items.length) {
    return null;
  }
  return this.items[this.items.length - 1];
}


}
}
