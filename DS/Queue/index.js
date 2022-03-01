import ImplimentsArray from "../GeneralMethods";
export default class Queue {
  #arr = [];
  constructor(newArr) {
    this.#arr = Array.isArray(newArr) ? newArr : [];
  }

  enqueue(item) {
    this.#arr.push(item);
  }
  dequeue() {
    return this.#arr.length ? this.#arr.shift() : -1;
  }
  peek() {
    return this.#arr[this.#arr.length - 1];
  }
  front() {
    return this.#arr[0];
  }
  rear() {
    return this.peek();
  }
  isEmpty() {
    return ImplimentsArray.isEmpty(this.#arr);
  }
  size() {
    return ImplimentsArray.size(this.#arr);
  }
  eraseAll() {
    this.#arr = ImplimentsArray.eraseAll(this.#arr);
  }
}
