// ****** KEYOF ******

type Person = {
  name: string;
  age: number;
  email: string;
};

// `keyof Person` creates a union of "name" | "age" | "email"
type PersonKeys = keyof Person;

const person: Person = {
    name: "Jestin James",
    age: 38,
    email: "jestin.i.james@gmail.com",
  };
  
  // Function definition
  function getProperty(key: keyof Person, obj: Person) {
    return obj[key];
  }
  
  // Using `getProperty`
  const personName = getProperty("name", person); // Valid
  console.log(personName); // Output: Jestin James
  
  const personEmail = getProperty("email", person); // Valid
  console.log(personEmail); // Output: jestin.i.james@gmail.com
