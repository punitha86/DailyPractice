function kthToLastNode(k, head) {

let leftNode = head;
let rightNode = head;

// Move rightNode to the kth node
for (let i = 0; i < k - 1; i++) {
  rightNode = rightNode.next;
}

// Starting with leftNode on the head,
// move leftNode and rightNode down the list,
// maintaining a distance of k between them,
// until rightNode hits the end of the list
while (rightNode.next) {
  leftNode = leftNode.next;
  rightNode = rightNode.next;
}

// Since leftNode is k nodes behind rightNode,
// leftNode is now the kth to last node!
return leftNode;
}
//////////////////////////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

/////////////Method2
//////////////////////////////////////////////

//////////////////////////////////////////////
//////////////////////////////////////////////
function kthToLastNode(k, head) {

if (k < 1) {
  throw new Error(`Impossible to find less than first to last node: ${k}`);
}

// STEP 1: get the length of the list
// Start at 1, not 0
// else we'd fail to count the head node!
let listLength = 1;
let currentNode = head;

// Traverse the whole list,
// counting all the nodes
while (currentNode.next) {
  currentNode = currentNode.next;
  listLength += 1;
}

// If k is greater than the length of the list, there can't
// be a kth-to-last node, so we'll return an error!
if (k > listLength) {
  throw new Error(`k is larger than the length of the linked list: ${k}`);
}

// STEP 2: walk to the target node
// Calculate how far to go, from the head,
// to get to the kth to last node
const howFarToGo = listLength - k;

currentNode = head;
for (let i = 0; i < howFarToGo; i++) {
  currentNode = currentNode.next;
}

return currentNode;
}
