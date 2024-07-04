function person(fName, lName) {
  this.firName = fName;
  this.lasName = lName;
}

const p1 = new person("Pulkit", "Varshney");
const p2 = new person("Pulkiti", "Varshnei");

//Every fun have this property prototype
person.prototype.getFullName = function () {
  console.log(this.firName + " " + this.lasName);
};

p1.getFullName();
p2.getFullName();

//prototypal inheritance
function SuperHero(fName, lName) {
  //this = {}
  person.call(this, fName, lName);
  this.isSuperhero = true;
}

SuperHero.prototype = Object.create(person.prototype);
SuperHero.prototype.fightCrime = function () {
  console.log("fighting crime");
};
SuperHero.prototype.constructor = SuperHero;
const s1 = new SuperHero("super", "man");
s1.getFullName();
s1.fightCrime();
