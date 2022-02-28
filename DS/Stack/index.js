export default function Stack() {
  const arr = [];

  return {
    push(item) {
      arr.push(item);
    },
    pop() {
      return arr.length ? arr.pop() : -1;
    },
    peek() {
      return arr[arr.length - 1];
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
