/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    let result = null
    function traverse(node){
            if ( (p.val <= node.val && node.val <= q.val) || (p.val >= node.val && node.val >= q.val) ){
                console.log(node.val + "!")
                result = node
                return
            }

            if (node.left ){
                traverse(node.left)
   
            }
            if (node.right){
                traverse(node.right)
            }
    }
    traverse(root)
    return result
};

//Accepted
