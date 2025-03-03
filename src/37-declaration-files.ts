// ****** DECLARATION FILES ******

import { times} from 'lodash';

times(4, () => console.log("Hello World"))

// Declaration files are files that contain type information for JavaScript code.
// They have a .d.ts extension.
// Declaration files are used to provide type information for libraries that are written in JavaScript.
// You can use declaration files to add type information to existing JavaScript libraries.
// Declaration files are used by TypeScript to provide type information for JavaScript code.
// You can create declaration files for your own JavaScript code.
// You can use declaration files to add type information to your JavaScript code.
// You can use declaration files to provide type information for third-party libraries.
// You can use declaration files to provide type information for global variables.
// You can use declaration files to provide type information for modules.

// Example: lodash.d.ts
// declare module "lodash" {
//     export function times(n: number, callback: () => void): void
// }
// In this example, we declare a module "lodash".
// We export a function times that takes a number n and a callback function.
// The callback function does not return anything.
// The function times does not return anything.
// You can use the function times in your TypeScript code.
// You can use the function times in your JavaScript code.