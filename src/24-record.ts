// ****** RECORD ******

type Person = {
   name: string
   age: number
}

// type PeopleGroupedByName = {
//    [index: string]: Person[]
// }

//  What this means is that we are creating a type called PeopleGroupedByName
//  And it creates a type that has a string as the key and an array of Person as the value
type PeopleGroupedByName = Record<string, Person[]>; // This is a Record type