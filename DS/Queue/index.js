export default function Queue() {
  const arr = [];

  return {
    enqueue(item) {
      arr.push(item);
    },
    dequeue() {
      return arr.length ? arr.shift() : -1;
    },
    peek() {
      return arr[arr.length - 1];
    },
    front() {
      return arr[0];
    },
    rear() {
      return this.peek();
    },
    isEmpty() {
      return arr.length === 0;
    },
    size() {
      return arr.length;
    },
    eraseAll() {
      arr = [];
    },
  };
}
