// Ways to create objects in JS

// Object literal
const objectLiteral = {
  key1: 'val1',
  key2: 'val2'
};

// adding a new key after the object was already created
objectLiteral.key3 = 'val3';

console.log(objectLiteral);

// Factory function
function HumanFactory(firstName, lastName, height) {
  return {
    firstName: firstName,
    lastName: lastName,
    // shorthand: can omit the colon when param name is same as key name
    height,
    fullName: function () {
      console.log(`${this.firstName} ${this.lastName}`);
    }
  }
}

const humanFromFactory = HumanFactory("Neil", "M", "5'9");

// console.log(humanFromFactory);
// humanFromFactory.fullName();

// Constructor function
// class keyword is syntactical sugar for this way of creating objects
function HumanConstructor(firstName, lastName, height) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.height = height;

  // fullName will be copied to every instance (more memory used)
  // this.fullName = function () {
  //   console.log(`${this.firstName} ${this.lastName} FROM INSTANCE`);
  // }
}

// adding method via .prototype will not make a copy of it on every instance
HumanConstructor.prototype.fullName = function() {
  console.log(`${this.firstName} ${this.lastName} FROM PROTOTYPE`);  
}

const humanFromConstructorFn = new HumanConstructor("Isaac", "G for gangsta", "5'8");
// humanFromConstructorFn.fullName();

class Human {
  constructor (firstName, lastName, height) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    // copied to every instance, uses extra memory
    // this.fullName = function () { 
    //   console.log(`${this.firstName} ${this.lastName} FROM INSTANCE`)
    // }
  }
  // added to the prototype because it's outside the constructor
  fullName() {
    console.log(`${this.firstName} ${this.lastName} FROM PROTOTYPE`);
  }
}

const humanFromClass = new Human("fn", "ln", "height");
humanFromClass.fullName();