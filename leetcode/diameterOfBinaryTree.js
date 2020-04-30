var max;
const calculateNodes = (node) => {

    if(node===null){
        return 0;
    }
    let left = calculateNodes(node.left);
    let right = calculateNodes(node.right);

    max = Math.max(max,left+right);

    return Math.max(left,right)+1;

}
var diameterOfBinaryTree = function(root) {
    max = 0;
    if(!root || (root.left==null && root.right ==null))
            return 0;
        calculateNodes(root);
        return max;
};
