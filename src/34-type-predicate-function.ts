// ****** TYPE PREDICATE FUNCTION ******


type Person = {
    name: string
}

type Todo = {
    title:string
}

// function print(obj: Person | Todo){
//    if("name" in obj){
//        console.log(obj.name)
//        return
//    }
//     console.log(obj.title)
// }

function print(obj: Person | Todo){
    if(isPerson(obj)){
        console.log(obj.name)
        return
    }
     console.log(obj.title)
 }


//  What this means is that the function isPerson is a type predicate function.
//  It returns a boolean value and it is used to tell TypeScript that the obj is a Person.
//  This is a way to tell TypeScript that the obj is a Person and the return value will always be true
function isPerson(obj: Person | Todo) : obj is Person   {
    return "name" in obj
}


// Another Example - Real world example
// Explanation
// We have an array of priorities which are "low", "medium", and "high".
// We have a type Todo2 which has a title and description.
// We have a type Priority which is a union of the priorities.
// We have a function func which takes a Todo2 as an argument.
// The function prints the title of the todo.
// If the description of the todo is a valid priority, it prints the description.
// If the description is not a valid priority, it prints "Invalid Priority".
// We have a type predicate function isPriority which checks if the description is a valid priority.
// The function returns true if the description is a valid priority.
// The function returns false if the description is not a valid priority.

const PRIORITIES = ["low", "medium", "high"]  as const
type Todo2 = {
    title: string
    description: string
}


type Priority = (typeof PRIORITIES)[number] // "low" | "medium" | "high"
function func(todo: Todo2) {
    console.log(todo.title)
    if(isPriority(todo.description)){
        console.log(todo.description)
    }
    else {
        console.log("Invalid Priority")
    }
}

function isPriority(description:string): description is Priority {
    return PRIORITIES.includes(description as Priority)
}