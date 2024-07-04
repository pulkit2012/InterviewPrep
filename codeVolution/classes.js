class Person {
  constructor(fName, lName) {
    this.firName = fName;
    this.lasName = lName;
  }
  sayMyName() {
    console.log(this.firName + " " + this.lasName);
  }
}

class SuperHero extends Person {
  constructor(fName, lName) {
    super(fName, lName);
  }
  fightCrime() {
    console.log("fighting crime");
  }
}

const p1 = new Person("pulkit", "var");
const s1 = new SuperHero("pulkit", "varrrr");
s1.fightCrime();
s1.sayMyName();
p1.sayMyName();
