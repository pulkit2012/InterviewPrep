const str = "pulkit";
for (const char of str) {
  console.log(char);
}
// this above function is iterable
//how to create your own iterable

const obj = {
  [Symbol.iterator]: function () {
    let step = 0;
    const iterator = {
      next: function () {
        step++;
        if (step == 1) {
          return { value: "hello", done: false };
        } else if (step == 2) {
          return { value: "world", done: false };
        }
        return { value: undefined, done: true };
      },
    };
    return iterator;
  },
};

for (const word of obj) {
  console.log(word);
}
