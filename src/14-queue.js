const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  /* constructor() {
    this.first = null;
    this.size = 0;
  }

  get size() {
    return this.size;
  }

  enqueue(element) {
    const listNode = new ListNode(element);
    if (this.first !== null) {
      this.first = listNode;
    } else {
      while (this.first.next) {
        this.first = this.first.next;
      }
      this.first.next = listNode;
    }
    this.size += 1;
    return listNode;
  }

  dequeue() {
    return this.queue.shift();
  } */
}

module.exports = Queue;
