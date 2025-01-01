// ****** AS CONST AND ENUMS ******

const nums = ["1", "2", "3", "4", "5"] as const;


const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert", "Master"] as const;


//what this means is that go through every index of the array and get the type of that index. That is why we use number property 
type Person = {
  skillLevel: (typeof SKILL_LEVELS)[number];
};

  
SKILL_LEVELS.forEach((skillLevel) => {
  console.log(skillLevel);
});


// Another example
// by marking it as const, we are telling typescript that this object cannot be changed
const person = {
  name: "Jestin",
  age: 38,
  skillLevel: "Master",
  address: {
    street: "123 Main St",
  }
} as const


// so person.address.zipCode will throw an error
// or person.age = 2 will throw an error