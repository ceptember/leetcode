/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

 var preorder = function(root) {
   
    let arr = []

    function traverse(node){
        if (node){
            arr.push(node.val)
        
            if (node.children){
                node.children.forEach( x => traverse(x))
            }
        }
    }


    traverse(root);
    return arr; 

};
