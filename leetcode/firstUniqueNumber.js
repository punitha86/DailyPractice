/**
 * @param {number[]} nums
 */
class Queue{
 constructor(...items){
   //initialize the items in queue
   this._items = []
   // enqueuing the items passed to the constructor
   this.enqueue(...items)
 }

  enqueue(...items){
    //push items into the queue
    items.forEach( item => this._items.push(item) )
    return this._items;
  }

  dequeue(count=1){
    //pull out the first item from the queue
    this._items.splice(0,count);
    return this._items;
  }

  peek(){
    //peek at the first item from the queue
    return this._items[0]
  }

  size(){
    //get the length of queue
    return this._items.length
  }

  isEmpty(){
    //find whether the queue is empty or no
    return this._items.length===0
  }
}
  var map = new Map();
  var myqueue = new Queue();
var FirstUnique = function(nums) {

            for(let i=0;i< nums.length;i++)
            {
                if (map[nums[i]] == undefined) {
                map[nums[i]] = 0;
                }
                map[nums[i]]++;
                myqueue.enqueue(nums[i]);
            }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
            while(!myqueue.isEmpty() && map[myqueue.peek()]>1)
            myqueue.dequeue();

        if(myqueue.size()==0)
            return -1;
        return myqueue.peek();
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
      if (map[value] === undefined) {
                map[value] = 0;
            }
            map[value]+=1;
        if(map[value]==1)
            myqueue.enqueue(value);
    console.log(map)
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
