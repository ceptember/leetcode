/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var detectCycle = function(head) {
    
    let arr = []
    let node = head;

    while (node){
        if (arr.includes(node)){
            return node
        }
        arr.push(node)
        node = node.next
    }

    return null; 

};

//accepted 