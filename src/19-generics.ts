// ****** GENERICS ******


// Example 1
// Generics allow us to create reusable components that can work with a variety of types rather than a single one.
const input = document.querySelector<HTMLInputElement>(".input")
console.log(input?.value)


// Example 2
// Generics allow us to create reusable components that can work with a variety of types rather than a single one.
function getSecond<ArrayType>(array: ArrayType[]) {
    return array[1];
}

const a = [1, 2, 3];
const b = ["a", "b", "c"];
const retA = getSecond(a);
const retB = getSecond(b);



// Example 3
// Set is a collection of unique values and it can be used with generics
const ab = new Set();

// Example 4
// Map is a collection of key value pairs and it can be used with generics
const ac = new Map<string, string>(
    [
        ["name", "Jestin"],
        ["age", "38"]
    ]
);

// Example 5
// What Tdata does is that it allows us to pass in a type to the APIResponse type
// and data will be of that type
// isError will always be a boolean
type APIResponse<Tdata> = {
    data: Tdata,
    isError: boolean
}

// Here we are passing in an object type to the APIResponse type
// so data will be an object of type name and string
type UserResponse = APIResponse<{ name: string, age: number }>



// Here status is optional in the blogResponse generic type
type blogResponse<Tdata = { status: number }> = {
    data: Tdata,
    isError: boolean
}

// using extends here with Tdata means that Tdata has to be an object type with a status property
// so if we pass in an object type without a status property, it will throw an error
type APIResponse2<Tdata extends object = { status: number }> = {
    data: Tdata,
    isError: boolean
}

// Nested Generics
type APIResponse3<Tdata> = {
    data: Tdata,
    isError: boolean
}

const ad: APIResponse<object> = {
    data: {},
    isError: false
}

const ae: UserResponse = {
    data: {
        name: "Jestin",
        age: 38
    },
    isError: false

}


const af: blogResponse = {
    data: {
        status: 200

    },
    isError: false

}

const ag: APIResponse2 = {
    data: {
        status: 200
    },
    isError: false
}


// This is a case of nested generics
// Here we are passing in an array type to the APIResponse3 type
const ah: APIResponse3<Array<number>> = {
    data: [1, 2, 3],
    isError: false
}


// Example 6

// This means that the key will always be string eg keyOne
// but the value can be any type eg 1, 2, true
function arrToObject<T>(array: [string, T][]) {
const obj:{
    [key: string]: T
} = {};
array.forEach(([key, value]) => {
    obj[key] = value;
});
return obj;
}

// here we gave it a type of string and number or boolean. this is a tuple.
const arr: [string, number | boolean][] = [
    ["keyOne", 1],
    ["keyTwo", 2],
    ["keyThree", true]
]

const obj = arrToObject(arr);