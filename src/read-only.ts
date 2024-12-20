// ****** READONLY ******


type Person = {
    readonly id: number;
    name: string;
    age: number
}

const person:Person = {
    id: 1,
    name: "Jestin",
    age:  38
}

// Now you cant do person.id = 2;


type NumberArray = readonly number[];

const nums: NumberArray = [1,2,3];
// Now you cant do nums.push(4) or nums[4] =4;
// This array cannot be modified.