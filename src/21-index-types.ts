// ****** INDEX TYPES ******

type Person = {
  name: string;
  skillLevel: "Beginner" | "Intermediate" | "Expert" | "Master";
};

const person: Person = { name: "Jestin", skillLevel: "Master" };

printSkillLevel(person.skillLevel);


// We can also use index types to get the type of a property
// Here by assigning the type of skillLevel to a variable we can use ut as a type
// This is called Index Types
function printSkillLevel(skilLevel: Person["skillLevel"]) {
  console.log(skilLevel);
}



// We can also use index types to get the type of a property
// since peopleGroupedBySkillLevel is of this type, it has to have values for each skill type
// using index types we are creating an object that has keys of the skill levels and values of the people with that skill level
type PeopleGroupedBySkillLevel = {
  [index in Person["skillLevel"]]: Person[];
}

const peopleGroupedBySkillLevel: PeopleGroupedBySkillLevel = {
  Beginner: [{
    name: "John",
    skillLevel: "Beginner",
  }],
  Intermediate: [
    {
      name: "Doe",
      skillLevel: "Intermediate",
    },
  ],
  Expert: [
    {
      name: "Jane",
      skillLevel: "Expert",
    },
  ],
  Master: [
    {
      name: "Jestin",
      skillLevel: "Master",
    },
  ],
};


// We can also use index types to get the type of a property
// Here we are getting the type of the keys of the object which is either string or number
const user = {
  name: "Jestin",
  age: 38
}

type User = (typeof user)[keyof typeof user];


