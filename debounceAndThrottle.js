const button = document.getElementById("button");
const pressed = document.getElementById("pressed");
const triggered = document.getElementById("triggered");
const throttled = document.getElementById("throttled");

let pressedCount = 0;
let triggeredCount = 0;
let throttledCount = 0;

function debounce(cb, delay = 1000) {
  let timeOutId;
  return (...args) => {
    clearTimeout(timeOutId);
    timeOutId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function throttle(cb, delay = 1000) {
  let shouldWait = false;
  let waitingArgs;
  const timeOutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeOutFunc, delay);
    }
  };
  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    cb(...args);
    shouldWait = true;

    setTimeout(timeOutFunc, delay);
  };
}

const updateTriggeredText = debounce(() => {
  triggered.textContent = ++triggeredCount;
});

const updateThrottledText = throttle(() => {
  throttled.textContent = ++throttledCount;
});

button.addEventListener("click", () => {
  pressed.textContent = ++pressedCount;
  updateTriggeredText();
  updateThrottledText();
});
