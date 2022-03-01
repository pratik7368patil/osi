export default class LinkedList {
  #node = {
    data: null,
    next: null,
  };
  #size = 0;
  constructor(data) {
    this.#node.data = data;
  }
  createNode(data) {
    return {
      data: data ? data : null,
      next: null,
    };
  }
  add(data) {
    const newNode = this.createNode(data);
    let temp = this.#node.next;
    while (temp) {
      temp = temp.next;
    }
    temp = newNode;
    this.#size += 1;
  }
  removeFirst() {
    this.#node = this.#node.next;
    this.#size -= 1;
  }
  size() {
    return this.#size;
  }
  clear() {
    this.#node = this.createNode();
  }
}
