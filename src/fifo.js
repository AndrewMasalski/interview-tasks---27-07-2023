/*
Implement FIFO queue using stacks.
Optional task - implement peek() method.
*/

class QueueUsingStacks {
  // Your implementation
  constructor() {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }

  enqueue(item) {}

  dequeue() {}

  size() {}
}

// Example usage:
const queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

queue.enqueue(4);
console.log(`queue size: ${queue.size()}`); // Output: 2

console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: 4
console.log(`queue size: ${queue.size()}`); // Output: 0
