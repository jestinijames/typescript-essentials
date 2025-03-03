// ****** FUNCTION OVERLOADS ******

// These are the function signatures
function sum(nums:number[]): number;
function sum(a: number, b: number): number;


// This is the implmentation of function overload
// The first function signature is for an array of numbers
// The second function signature is for two numbers

function sum(a: number | number[], b?: number) {
  if (Array.isArray(a)) {
    return a.reduce((acc, val) => acc + val, 0);
  }
 if(b!=null){
    return a + b;
     }
    }

const s1 = sum([1,2]);
const s2 = sum(1,2);
