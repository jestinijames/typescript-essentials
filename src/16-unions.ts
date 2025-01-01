// ****** UNIONS ******

let id: string | number | boolean = 7;
id = "7";
id = true;

type Person = {
  id: number | string;
  isProgrammer?: boolean;
};

// We can even use a union of asserted strings in typescript
// Then we can only use those
type Todo = {
  name: string;
  status: "Complete" | "Incomplete" | "Draft";
};

const todo: Todo = { name: "Wash Dishes", status: "Incomplete" };


// If we want to unionize two types then we can do that with Person and Todo

type TodoPerson = Todo | Person;


// IMPORTANT: You cant union a type and an interface

