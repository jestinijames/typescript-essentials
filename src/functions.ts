// ****** DEFINING FUNCTIONS ******

function printName(name: string, age: number) {
  console.log(name, age);
}

// To explicity mention the return type, we put a colon after the function call
function sum(a: number, b: number):number {
  return a + b;
}

const c = sum(1, 2);

function printPerson(person: {name:string}) {
    console.log(person.name);
}

// If we pass anything else in this function call like age it will fail
// because we have defined the type in the function.
// but observe the below scenario
printPerson({name: "Jestin"})


// if we assign an object to the value and pass the object as it is
// you will notice printPerson does not display any errors
// this is because ts basically looks in this case if structural requirements are met
// and no code breaking issues are there
// This means that ts is structural based
const person = {name: "Preeti", age:32};
printPerson(person);
 