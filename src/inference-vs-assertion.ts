// ****** ASSIGNING TYPES AND TYPE INFERENCE ******


// Types should be written in lowecase

let a: number = 4 //This is type assertion

let b = "Jestin" //This is type inference

// This is called a literal type - that is c can only literally be a number 4.
// so it will show up a literal type instead of generic type
const c = 4

// ts does not do type inference when we assign it to undefined or null
let d = undefined;
d=null;