// ****** TYPEOF ******

const person = {
  name: "Jestin",
  age: 38,
  isProgrammer: true,
};

const people: (typeof person)[] = [];

people.push(person);
people.push({ name: "Preeti", age: 32, isProgrammer: false });

// Another example using function typeOf

function sayHi(name: string) {
  console.log(name);
}

type FuncType = typeof sayHi; //this will give a typeof (name:string)=> void
