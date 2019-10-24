// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

//  

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Follow up:

// Can you solve it using O(1) (i.e. constant) memory?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/linked-list-cycle
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    while(fast) {
      slow = slow.next;
      fast = fast.next ? fast.next.next : null;

      if (fast && slow && fast === slow) {
        return true;
      }
    }
    return false;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var start = new ListNode('0');
var temp = start;
for (let i = 1; i < 5; i++) {
  var node  = new ListNode(i);
  temp.next = node;
  temp = node;
}
temp.next = null;

const has = hasCycle(start);
const string = has ? 'true' : 'false';
console.log(string);