const Node = require("./Node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      currentNode.nextNode = newNode;
    }
  }

  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode !== null) {
      count++;
      currentNode = currentNode.nextNode;
    }
    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    if (this.head === null) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  at(index) {
    if (index < 0) {
      return null;
    }
    let currentIndex = 0;
    let currentNode = this.head;
    while (currentNode !== null && currentIndex < index) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }
    return currentNode;
  }

  pop() {
    if (this.head === null) {
      return null;
    } else if (this.head.nextNode === null) {
      const removedNode = this.head;
      this.head = null;
      return removedNode;
    } else {
      let currentNode = this.head;
      while (currentNode.nextNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      const removedNode = currentNode.nextNode;
      currentNode.nextNode = null;
      return removedNode;
    }
  }

  contains(value) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.nextNode;
    }
    return false;
  }

  find(value) {
    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      if (currentNode.value === value) {
        return currentIndex; // Return index if value is found
      }
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    return null; // Return null if value is not found
  }

  toString() {
    let result = "";
    let currentNode = this.head;

    while (currentNode !== null) {
      result += ` ${currentNode.value} --> `;
      currentNode = currentNode.nextNode;
    }
    result += null;
    return result;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      throw new Error("Index out of bounds");
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    newNode.nextNode = currentNode.nextNode;
    currentNode.nextNode = newNode;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      // Remove the head
      this.head = this.head.nextNode;
      return;
    }

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex < index - 1) {
      currentNode = currentNode.nextNode;
      currentIndex++;
    }

    // currentNode is the node before the one we want to remove
    if (currentNode.nextNode !== null) {
      currentNode.nextNode = currentNode.nextNode.nextNode;
    }
  }
}

module.exports = LinkedList;
