// ****** VOID TYPE ******


// It means it is not returing anything
function printName(name: string, age: number):void {
    console.log(name, age);
  }

// you want to return underfined you need to mention that in type as well  
function printUndefined(name: string):undefined {
    return undefined;
  }


  const person = printName("jestin", 38);

