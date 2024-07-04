// normal functions are used instead of arrow to bind to "this" keyword

//implicit binding rule --> if a function is invoked using "." then "this" keyword will take the object which
// is to the left of the "."

const obj = {
  name: "pulkit",
  sayMyName: function () {
    console.log(`My name is ${this.name}`);
  },
};

obj.sayMyName();

//explicit binding --> "this" keyword will take the value of the object named under call()

globalThis.name = "globalThis default binding";
function sayMyName() {
  console.log(`My name is ${this.name}`);
}
//call is the inbuilt method for every function.
sayMyName.call(obj);

// new binding ------->

function Person(name) {
  // this = {} ("this" object with empty object value is automatically be created whenever we call person with "new")
  this.name = name;
}

const p1 = new Person("pulkit");
const p2 = new Person("ayush");
console.log(p1.name, p2.name);

//default binding --> if none of the above rules are satisfied, the browser will take to the global scope.
sayMyName();

// new > explicit > implicit > default
