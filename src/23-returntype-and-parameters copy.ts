// ****** RETURNTYPE AND PARAMETERS ******

function checkLength(a:string, b:number) {
   return a.length <b;
}



//  This means you get the return type of the function which is boolean
type ReturnOfLengthCheck = ReturnType<typeof checkLength>;

// This means you get the parameters of the function which is a string and a number
type Params = Parameters<typeof checkLength>;

type Func = () => void;
type ReturnofFunc = ReturnType<Func>;