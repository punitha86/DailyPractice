class Stack {
  constructor(...items){
    this._items = []

    if(items.length>0)
      items.forEach(item => this._items.push(item) )

  }

  push(...items){
    //push item to the stack
     items.forEach(item => this._items.push(item) )
     return this._items;

  }

  pop(count=0){
    //pull out the topmost item (last item) from stack
    if(count===0)
      return this._items.pop()
     else
       return this._items.splice( -count, count )
  }

  peek(){
    // see what's the last item in stack
    return this._items[this._items.length-1]
  }

  size(){
   //no. of items in stack
   return this._items.length
 }

 isEmpty(){
   // return whether the stack is empty or not
   return this._items.length==0
 }

 toArray(){
   return this._items;
 }
}

let my_stack = new Stack(1,24,4);
// [1, 24, 4]
my_stack.push(23)
//[1, 24, 4, 23]
my_stack.push(1,2,342);
//[1, 24, 4, 23, 1, 2, 342]
my_stack.pop();
//[1, 24, 4, 23, 1, 2]
my_stack.pop(3)
//[1, 24, 4]
my_stack.isEmpty()
// false
my_stack.size();

////////////Queue Implementation/////////////////////////
///////////////////////////////////////////////////////////
// class Queue{
//  constructor(...items){
//    //initialize the items in queue
//    this._items = []
//    // enqueuing the items passed to the constructor
//    this.enqueue(...items)
//  }
//
//   enqueue(...items){
//     //push items into the queue
//     items.forEach( item => this._items.push(item) )
//     return this._items;
//   }
//
//   dequeue(count=1){
//     //pull out the first item from the queue
//     this._items.splice(0,count);
//     return this._items;
//   }
//
//   peek(){
//     //peek at the first item from the queue
//     return this._items[0]
//   }
//
//   size(){
//     //get the length of queue
//     return this._items.length
//   }
//
//   isEmpty(){
//     //find whether the queue is empty or no
//     return this._items.length===0
//   }
// }
//
// let my_queue = new Queue(1,24,4);
// // [1, 24, 4]
//
// console.log(my_queue.enqueue(23));//[1, 24, 4, 23]
// my_queue.enqueue(1,2,342);
// //[1, 24, 4, 23, 1, 2, 342]
// my_queue.dequeue();
// //[24, 4, 23, 1, 2, 342]
// my_queue.dequeue(3)
// //[1, 2, 342]
// my_queue.isEmpty()
// // false
// my_queue.size();
// //3
// ////////////////////////////////////////

class QueueTwoStacks {
constructor() {
  this.inStack = [];
  this.outStack = [];
}

enqueue(item) {
  this.inStack.push(item);
}

dequeue() {
  if (this.outStack.length === 0) {

    // Move items from inStack to outStack, reversing order
    while (this.inStack.length > 0) {
      const newestInStackItem = this.inStack.pop();
      this.outStack.push(newestInStackItem);
    }

    // If outStack is still empty, raise an error
    if (this.outStack.length === 0) {
      throw new Error("Can't dequeue from empty queue!");
    }
  }
  return this.outStack.pop();
}
}
