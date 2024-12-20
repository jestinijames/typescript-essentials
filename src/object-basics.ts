// ****** OBJECT BASICS ******


// Adding a ? means it is an optional type
// This is how you assign a type to an object
const person: { name: string; age: number; isProgrammer?: boolean } = {
  name: "Jestin",
  age: 38,
};


person.isProgrammer = true;