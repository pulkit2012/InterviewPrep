const fRes = (arg) => {
  console.log("mubarak ho", arg);
};
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(
      "hey I am argument that is automatically passed to function in .then()"
    );
  }, 5000);
});

const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej("dil tut gya");
  }, 5000);
});

promise.then(fRes);
promise2.catch(fRes);

//Promise.all([promise1,promise2,promise3]).then((val) => {successCbFun})
// promise all method takes all promises as an array, and return a single promise that resolves whole array
// It rejects immediatly if any of the input promises rejected, with first rejection message

//Promise.allSettled() waits for all input promises to complete (syntax is same as Promise.all()), returns after all promises got completed even if one or more gets rejected

//Promise.race() method returns a promise as soon as one of the input promises fulfills or rejects , with the value or reason from that promise
