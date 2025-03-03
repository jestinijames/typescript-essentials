// ****** BASIC TYPE GUARDS ******

type Todo = {
    title: string;
    priority: "high" | "normal" | "low";
    isComplete: boolean;
    description?: string;
    dueDate: Date | string | number;
}

function extendTodo(todo:Todo) {
    // This is a type guard that checks if the dueDate is a string
    if (typeof todo.dueDate === "string") {
        todo.dueDate = new Date(todo.dueDate)
    }
    else if(todo.dueDate instanceof Date) {
        // Type guard automatically knows that dueDate is a Date object
        console.log(todo.dueDate.getDate())
    }
    else {
        todo.dueDate = new Date(todo.dueDate)
    }
    return todo
}

function priorityCheck(todo:Todo) {
    switch (todo.priority) {
        // Typescript guard automatically knows that todo.priority is a "high" | "normal" | "low"
        case "high":
            console.log("This is a high priority task")
            break;
        case "normal":
            console.log("This is a normal priority task")
            break;
        case "low":
            console.log("This is a low priority task")
            break;
        default:
            break;
    }
}