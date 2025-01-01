// ****** TYPING VARIABLES AS FUNCTIONS  ******

function sumWithCallback(a: number, b: number, cb: (sum: number) => void) {
  cb(a + b);
}

sumWithCallback(1, 2, (sum) => {
  console.log(sum);
});

// Not sure what this is
type PrintNameFunc = (name: string) => number;

function f(name: string) {
  return 2;
}
