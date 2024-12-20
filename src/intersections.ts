// ****** INTERSECTIONS ******

// just like you can union two types with |
// you can intersect two types using &

type Person = {
  name: string;
  age: number;
};

type Todo = {
  complete?: boolean;
};

type PersonWithID = Person &
  Todo & {
    id: string;
  };

const person: PersonWithID = {
  id: "JIJ",
  name: "Jestin",
  age: 38,
};

// How do we do with interfaces?

interface Person1 {
  name: string;
  age: number;
}

interface Todo1 {
  complete?: boolean;
}

interface PersonWithID1 extends Person1, Todo1 {
  id: string;
}

const person1: PersonWithID1 = {
  id: "PJ",
  name: "Preeti",
  age: 32,
};

// You cant use union with multiple primitives
// for examplete PersonWithId cannot be an object and a number
// or you cant combine two objects having the same variable but as two different datatypes
