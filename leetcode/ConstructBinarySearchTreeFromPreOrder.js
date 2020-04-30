

    function bstFromPreorder(preorder) {
        let res = new TreeNode(preorder[0]);
        if(preorder.length == 1){
            return res;
        }
        for(let i = 1; i < preorder.length; i++){
            setNode(res,preorder[i]);
        }
        return res;
    }

    function setNode(node, val){
        if(node.val < val){
            if(node.right == null){
                node.right = new TreeNode(val);
            }else{
              setNode(node.right,val);
            }
        }else {
             if(node.left == null){
                node.left = new TreeNode(val);
            }else{
              setNode(node.left,val);
            }
        }
    }

  //func bstFromPreorder(preorder []int) *TreeNode {
  //    v := preorder[0]
      //node := &TreeNode{v, nil, nil}
  //     index, left := bstFromPreorderRec(preorder, 1, node)
  //     node.Left = left
  //     _, right := bstFromPreorderRec(preorder, index, nil)
  //     node.Right = right
  //     return node
  // }
  // func bstFromPreorderRec(
  //         preorder []int,
  //         start int,
  //         ancestor *TreeNode) (int, *TreeNode) {
  //     if start >= len(preorder) {
  //        return start, nil
  //     }
      // v := preorder[start]
      // if ancestor != nil && v > ancestor.Val {
      //     return start, nil
      // }
      // node := &TreeNode{v, nil, nil}
      index, left := bstFromPreorderRec(preorder, start + 1, node)
      node.Left = left
      next, right := bstFromPreorderRec(preorder, index, ancestor)
      node.Right = right
      return next, node
  }
