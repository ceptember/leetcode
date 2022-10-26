/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    
    let node = head; 
    let array = []
    while (node){
        array.push(node.val)
        node = node.next; 
    }

    let reversed = null 
    for (let i = 0; i<array.length; i++){
        reversed = {
            val: array[i],
            next: reversed
        }
    }

    return reversed; 

};

//Accepted 