function outer() {
  let counter = 0;
  function inner() {
    counter++;
    console.log(counter);
  }
  return inner;
}

const inf = outer();
inf();
inf();

//in closures not only function's defination is returned but also its scope is returned, that's we are able to preserve the value of counter in above example
