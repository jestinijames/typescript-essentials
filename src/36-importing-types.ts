// ****** IMPORTING TYPES ******

import { addDays } from "date-fns";

// Importing types from other files is a common practice in TypeScript.
// You can import types using import statements.
//
// Example:
//
// // types.ts
// export type Person = {
//     name: string
// }
//
// // index.ts
// import type { Person } from "./types"
// if you import just the type modern bundlers like webpack will remove the import statement from the final bundle
//
// const person: Person = {
//     name: "Alice"
// }
//

// You can also import types from external libraries.
// For example, you can import types from the date-fns library.
//
// Example:
//
// import { addDays } from "date-fns"
//
// const today = new Date()
// const tomorrow = addDays(today, 1)
// console.log(tomorrow)
//
// In this example, we import the addDays function from the date-fns library.
// We use the addDays function to add one day to the current date.
// We then log the result to the console.
//