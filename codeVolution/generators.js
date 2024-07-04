function* generatorFunction() {
  yield "Hello";
  yield "world";
}

const generatorObj = generatorFunction();
for (const word of generatorObj) {
  console.log(word);
}
