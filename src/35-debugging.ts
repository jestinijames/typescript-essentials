// ****** DEBUGGING ******


type Options = {
    debug: boolean
    format: {
        tabs: boolean
        tabwidth: number
    }
}

function printNumber(num:number, options?:Options){
    if(options && options.debug){
        console.log("Debugging")
    }
    console.log(num)
}

printNumber(5)

// 1. Console.log()
// The most common way to debug is to use console.log().

// Example:
// function func(todo: Todo2) {
//     console.log(todo.title)
//     if(isPriority(todo.description)){
//         console.log(todo.description)
//     } else {
//         console.log("Invalid Priority")
//     }
// }


// 2. Debugger
// You can use the debugger statement to pause the execution of the code.
// You can then use the browser's developer tools to inspect the variables and step through the code.

// Example:
// function func(todo: Todo2) {
//     console.log(todo.title)
//     debugger
//     if(isPriority(todo.description)){
//         console.log(todo.description)
//     } else {
//         console.log("Invalid Priority")
//     }

// 3. Breakpoints
// You can set breakpoints in the browser's developer tools.
// This allows you to pause the execution of the code at a specific line.
// You can then inspect the variables and step through the code.


// 4. TypeScript Playground
// You can use the TypeScript Playground to debug your code.


// Using ts-ignore ts-expect-error
// You can use ts-ignore or ts-expect-error to ignore TypeScript errors.
// This can be useful when you want to quickly test your code without fixing all the errors.


