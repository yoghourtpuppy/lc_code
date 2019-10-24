// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/reverse-linked-list

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
var reverseListIt = function(head) {
  if (!head) {
    return null;
  }

  while(head.next) {
    head.next.previous = head;
    head = head.next;
  }

  var newHead = head;

  while(head.previous) {
    head.next = head.previous;
    head = head.previous;
  }

  head.next = null;
  return newHead;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 1 -> 2 -> 3 -> 4-> 5 -> null
 *
 */
var reverseList = function(head) {
  var res;
  var _reverseList = function(p) {
      if (p.next === null) {
        res = p;
      } else {
        _reverseList(p.next);
        p.next.next = p;
        p.next = null;
      }
  };
  _reverseList(head);
  return res;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var start = new ListNode('0');
var temp = start;
for (let i = 1; i <= 5; i++) {
  if (i === 5) {
    temp.next = null;
  }
  var node  = new ListNode(i);
  temp.next = node;
  temp = node;
}

var newHead = reverseList(start);

while (newHead !== null) {
  console.log(newHead.val+' -> ');
  newHead = newHead.next;
}

