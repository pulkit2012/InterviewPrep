const input = document.querySelector("input");
const defaultText = document.getElementById("default");
const debounce = document.getElementById("debounce");
const throttle = document.getElementById("throttle");

const debounceFun = (cb, delay = 1000) => {
  let timeOut;
  return (...args) => {
    clearTimeout(timeOut);
    timeOut = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

// const throtleFun = (cb, delay = 1000) => {
//   let waitingArgs;
//   let shouldWait = false;
//   return (...args) => {
//     if (shouldWait) {
//       waitingArgs = args;
//       return;
//     }
//     cb(...args);

//     shouldWait = true;
//     setTimeout(() => {
//       if (waitingArgs == null) {
//         shouldWait = false;
//       }
//       else{
//         cb(...waitingArgs)
//         waitingArgs = null
//       }
//     }, delay);
//   };
// };

const updateDebounceText = debounceFun((text) => {
  debounce.textContent = text;
});

// const updateThrottleText = throtleFun((text) => {
//   throttle.textContent = text;
// });

input.addEventListener("input", (e) => {
  defaultText.textContent = input.value;
  updateDebounceText(e.target.value);
  //updateThrottleText(e.target.value);
});
