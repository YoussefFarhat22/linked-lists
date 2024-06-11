const LinkedList = require("./LinkedList");

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);
list.append(40);

// console.log(list.toString());

// console.log(list.toString());

// console.log(list.size());
// console.log(list.pop());

// console.log(list.contains(10));
// console.log(list.find(20));

// console.log(list.insertAt(25, 2));
console.log(list.removeAt(2));
console.log(list.toString());
