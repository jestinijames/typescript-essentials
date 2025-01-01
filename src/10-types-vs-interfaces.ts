// ****** TYPES VS INTERFACES BASIC ******

// Types will be camel cased and first letter of each word will be all caps
// types are more flexible as you can assign a number or another primitive other than an object
type PersonType = {
  name: string;
  age: number;
  isProgrammer?: boolean;
  children?: string[];
  address?: {
    street: string;
  };
};

// Interface of the same above
// Interfaces can only be used as an object
interface PersonInterface {
  name: string;
  age: number;
  isProgrammer?: boolean;
  children?: string[];
  address?: {
    street: string;
  };
}

const person: PersonType = {
  name: "Jestin",
  age: 38,
  children: ["Nahaara"],
};

const person2: PersonType = {
  name: "Preeti",
  age: 32,
  isProgrammer: false,
  children: ["Nahaara"],
};
