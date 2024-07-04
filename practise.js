const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounce = document.getElementById("debounce");
const throttle = document.getElementById("throttle");

const debounceFun = (cb, delay = 3000) => {
  let restartSetTimeout;
  return (...args) => {
    clearTimeout(restartSetTimeout);
    restartSetTimeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const updateDebounceText = debounceFun((text) => {
  debounce.textContent = text;
});

const throttleFun = (cb, delay = 3000) => {
  let shouldWait = false;
  let waitingArgs;
  const helper = () => {
    console.log("hi");
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(helper, delay);
    }
  };
  return (...args) => {
    console.log(args, "---");
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;

    setTimeout(helper, delay);
  };
};

const fun = (cb) => {
  let varx = false;
  return (...args) => {
    setTimeout(() => {
      cb(...args);
    }, 3000);
  };
};

const fun2 = fun((text) => {
  console.log(text);
});

const updateThrottleText = throttleFun((text) => {
  throttle.textContent = text;
});

input.addEventListener("input", (e) => {
  defaultText.textContent = e.target.value;
  updateDebounceText(e.target.value);
  updateThrottleText(e.target.value);
  fun2(e.target.value);
});
