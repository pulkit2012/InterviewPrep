//sequential execution
function fun1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 5000);
  });
}

function fun2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dello");
    }, 1000);
  });
}

async function executor() {
  const val1 = await fun1();
  console.log(val1);
  const val2 = await fun2();
  console.log(val2);
}

// executor();

//concurrent execution
async function concurrentExecutor() {
  const val1 = fun1();
  const val2 = fun2();
  console.log(await val1);
  console.log(await val2);
}

// concurrentExecutor();

//parallel execution

function parallelExecutor() {
  Promise.all([
    (async () => console.log(await fun1()))(),
    (async () => console.log(await fun2()))(),
  ]);
}

parallelExecutor();
