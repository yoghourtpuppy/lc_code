// Queue class
class Queue {
  // Array is used to implement a Queue
  constructor() {
    this.items = [];
  }

  // Functions to be implemented
  enqueue(element) {
    // adding element to the queue
    this.items.push(element);
  }
  // dequeue function
  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty())
      return "Underflow";
    return this.items.shift();
  }

  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty())
      return "No elements in Queue";
    return this.items[0];
  }

  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }
}

// function to generate binary numbers
function generatePrintBinary(n) {
  // Create an empty queue of strings
  var q = new Queue();

  // Enqueue the first binary number
  q.enqueue("1");

  // This loops is like BFS of a tree with 1 as root
  // 0 as left child and 1 as right child and so on
  while (n-- > 0) {
    // print the front of queue
    var s1 = q.front();
    q.dequeue();
    console.log(s1);

    // Store s1 before changing it
    var s2 = s1;

    // Append "0" to s1 and enqueue it
    q.enqueue(s1 + "0");

    // Append "1" to s2 and enqueue it. Note that s2 contains
    // the previous front
    q.enqueue(s2 + "1");
  }
}

console.log(generatePrintBinary(6));