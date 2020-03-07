class ListNode {
  constructor (val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const linkedList = () => {
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
  return start;
}
