// ****** DESTRUCTURED AND REST PARAMETERS ******

type Options = { debugMode?: boolean; indentLevel?: number };

// function printStuff(name, {debug=false} = {}) {
// console.log(name, debugMode)
// }

// This is destructuring parameters ts
function printStuff(
  name: string,
  { debugMode = false, indentLevel }: Options = {}
) {
  console.log(name, debugMode, indentLevel);
}

printStuff("Jestin", { debugMode: true });
printStuff("Jestin", { indentLevel: 5 });



// This is the rest operators in ts and how to set types
function sum(...numbers: number[]) {
  return numbers.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
