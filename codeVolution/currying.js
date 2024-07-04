function sum(a, b, c) {
  console.log(a + b + c);
}
function curry(fn) {
  return (a) => {
    return (b) => {
      return (c) => {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
curriedSum(1)(2)(3);

// transforming fun(a,b,c) --> fun(a)(b)(c)
