// ****** ARRAY TYPES ******


const a = [1,2,3];
a.push(4);

let b: number[] = [];
b = [4,5,6];

// You can force a type as a explicit literal type
const d: [1,2,3] = [1,2,3]; // Now you cant push anything into d like d.push(4);


const e: Date[] = [new Date()];

