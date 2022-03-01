import ImplimentsArray from "../GeneralMethods";

export default class Stack {
  #arr = [];
  constructor(newArr) {
    this.#arr = Array.isArray(newArr) ? newArr : [];
  }
  push(item) {
    this.#arr.push(item);
  }
  pop() {
    return this.#arr.length ? this.#arr.pop() : -1;
  }
  peek() {
    return this.#arr[this.#arr.length - 1];
  }
  isEmpty() {
    return ImplimentsArray.isEmpty(this.#arr);
  }
  size() {
    return ImplimentsArray.size(this.#arr);
  }
  eraseAll() {
    ImplimentsArray.eraseAll(this.#arr);
  }
}
