const button = document.getElementById("button");

const flattenArray = (arr) => {
  const flat = [];
  function flattener(currArr) {
    let i = 0;
    while (i < currArr.length) {
      if (Array.isArray(currArr[i])) {
        flattener(currArr[i]);
      } else {
        flat.push(currArr[i]);
      }
      i++;
    }
  }
  flattener(arr);
  console.log(flat);
};

const flattener = (obj, parent, flat = {}) => {
  for (let key in obj) {
    let propName = parent ? parent + "_" + key : key;
    if (typeof obj[key] == "object") {
      flattener(obj[key], propName, flat);
    } else {
      flat[propName] = obj[key];
    }
  }
  return flat;
};

button.addEventListener("click", () => {
  const arr = [1, [2, 3], [4, [5, [7]]]];
  flattenArray(arr);
  const obj = {
    name: "test",
    address: {
      personal: "abc",
      office: {
        building: "random",
        street: "some street",
      },
    },
  };
  const flat = flattener(obj);
  console.log(flat);
});
