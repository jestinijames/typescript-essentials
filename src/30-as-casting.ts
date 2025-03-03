// ****** AS CASTING ******


type Todo = {
    userId:number;
    id:number;
    title:string;
    completed:boolean
}

function func(data:unknown) {
    
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => data.json()).then(data => {
        // We can use the as keyword to cast the data to the type we want
     return data as Todo
    }).then(todo => {
        console.log(todo)
    })
}