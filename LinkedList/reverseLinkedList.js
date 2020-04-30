const reverseList = (headNode)=>{
  let currentNode=headNode;
  let prevNode=null;
  let nextNode= null;

  while(currentNode){
    nextNode = currentNode.next;
    currentNode.next = prevNode;
//moving to right
    prevNode = currentNode;
    currentNode = nextNode;
  }
  return prevNode;
}
