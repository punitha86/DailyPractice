const binaryValidator = (tree) =>{

  let nodeBoundStack = [];
  nodeBoundStack.push({
    node:treeroot,
    lowerBound:Number.NEGATIVE_INFINITY,
    upperBound:Number.POSITIVE_INFINITY

  })
//depth first traversal
while(nodeBoundStack.length){
  const {node,lowerBound,upperBound}=nodeBoundStack.pop();

  // If this node is invalid, we return false right away
     if (node.value <= lowerBound || node.value >= upperBound) {
       return false;
     }
console.log(node.left);
     if (node.left) {

       // This node must be less than the current node
       nodeAndBoundsStack.push({
         node: node.left,
         lowerBound,
         upperBound: node.value,
       });
     }

     if (node.right) {

       // This node must be greater than the current node
       nodeAndBoundsStack.push({
         node: node.right,
         lowerBound: node.value,
         upperBound,
       });
     }
   }

   // If none of the nodes were invalid, return true
   // (At this point we have checked all nodes)
   return true;
 }

}



}
