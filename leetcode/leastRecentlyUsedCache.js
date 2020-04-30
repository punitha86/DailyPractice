//
// class Node {
//   constructor(key, value, next = null, prev = null) {
//     this.key = key;
//     this.value = value;
//     this.next = next;
//     this.prev = prev;
//   }
// }
//
// class LRU {
//   //set default limit of 10 if limit is not passed.
//   constructor(limit = 10) {
//     this.size = 0;
//     this.limit = limit;
//     this.head = null;
//     this.tail = null;
//     this.cache = {};
//   }
//
//   // Write Node to head of LinkedList
//   // update cache with Node key and Node reference
//   write(key, value){
//     this.ensureLimit();
//
//     if(!this.head){
//       this.head = this.tail = new Node(key, value);
//     }else{
//       const node = new Node(key, value, this.head);
//       this.head.prev = node;
//       this.head = node;
//     }
//
//     //Update the cache map
//     this.cache[key] = this.head;
//     this.size++;
//   }
//
//   // Read from cache map and make that node as new Head of LinkedList
//   read(key){
//     if(this.cache[key]){
//       const value = this.cache[key].value;
//
//       // node removed from it's position and cache
//       this.remove(key)
//       // write node again to the head of LinkedList to make it most recently used
//       this.write(key, value);
//
//       return value;
//     }
//
//     console.log(`Item not available in cache for key ${key}`);
//   }
//
//   ensureLimit(){
//     if(this.size === this.limit){
//       this.remove(this.tail.key)
//     }
//   }
//
//   remove(key){
//     const node = this.cache[key];
//
//     if(node.prev !== null){
//       node.prev.next = node.next;
//     }else{
//       this.head = node.next;
//     }
//
//     if(node.next !== null){
//       node.next.prev = node.prev;
//     }else{
//       this.tail = node.prev
//     }
//
//     delete this.cache[key];
//     this.size--;
//   }
//
//   // clear() {
//   //   this.head = null;
//   //   this.tail = null;
//   //   this.size = 0;
//   //   this.cache = {};
//   // }
//   //
//   // // Invokes the callback function with every node of the chain and the index of the node.
//   // forEach(fn) {
//   //   let node = this.head;
//   //   let counter = 0;
//   //   while (node) {
//   //     fn(node, counter);
//   //     node = node.next;
//   //     counter++;
//   //   }
//   // }
//   //
//   // // To iterate over LRU with a 'for...of' loop
//   // *[Symbol.iterator]() {
//   //   let node = this.head;
//   //   while (node) {
//   //     yield node;
//   //     node = node.next;
//   //   }
//   // }
// }


///////////O(1) SOLUTION////////////////////////////////////////////
///////////O(1) SOLUTION////////////////////////////////////////////
///////////O(1) SOLUTION////////////////////////////////////////////
///////////O(1) SOLUTION////////////////////////////////////////////
///////////O(1) SOLUTION////////////////////////////////////////////

var Node = function(key, value) {
    this.key = key;
    this.val = value;
    this.prev = this.next = null;
}
/**
 * DoublyLinkedList Class
 * @constructor initilize head & tail
 * @action insertHead
 * @action removeNode
 * @action moveToHead
 * @action removeTail
 */
var DoublyLinkedList = function() {
    this.head = new Node;
    this.tail = new Node;
    this.head.next = this.tail;
    this.tail.prev = this.head;
}

/**
 * Insert a new node right after head
 * @param {Node} node
 */
DoublyLinkedList.prototype.insertHead = function(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
}

/**
 * Remove a node from the linked list
 * @param {Node} node
 */
DoublyLinkedList.prototype.removeNode = function(node) {
    // console.log("trying to remove node:", node.key)
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
}

/**
 * Move a node to the head
 * @param {Node} node
 */
DoublyLinkedList.prototype.moveToHead = function(node){
    this.removeNode(node);
    this.insertHead(node);
}

/**
 * Remove the tail element and return its key
 * @return {String}
 */
DoublyLinkedList.prototype.removeTail = function() {
    let tail = this.tail.prev;
    this.removeNode(tail);
    return tail.key;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.currentSize = 0;
    this.hash = new Map();
    this.dll = new DoublyLinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.hash.get(key);
    if (!node) return -1;
    this.dll.moveToHead(node);
    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.hash.get(key);
    if (node==null) { // new node
        let newNode = new Node(key, value);
        this.hash.set(key, newNode);
        this.dll.insertHead(newNode);
        this.currentSize++;
        if (this.currentSize > this.capacity) {
            let tailKey = this.dll.removeTail();
            this.hash.delete(tailKey);
            this.currentSize--;
        }
    } else { // existed node, update its value and move to head;
        node.val = value;
        this.dll.moveToHead(node);
    }
};
///O(N) Solution////////////////
///O(N) Solution////////////////

///O(N) Solution////////////////

///O(N) Solution////////////////

///O(N) Solution////////////////
// 
// var LRUCache = function(capacity) {
//     this.cache = new Map(); // <key, [value, frequence]>
//     this.capacity = capacity;
//     this.frequence = [];
// };
//
// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     if (this.cache.has(key)) {
//         let index = this.frequence.indexOf(key);
//         this.frequence.splice(index, 1);
//         this.frequence.push(key);
//         return this.cache.get(key);
//     }
//     return -1;
// };
//
// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     if (this.cache.has(key)) {
//         const index = this.frequence.indexOf(key);
//         this.frequence.splice(index, 1);
//     } else if (this.cache.size === this.capacity) {
//         const k = this.frequence.shift();
//         this.cache.delete(k);
//     }
//     this.cache.set(key, value);
//     this.frequence.push(key);
// };
