// ****** NEVER TYPE ******

type Todo = {
    title: string;
    priority: "high" | "normal" | "low";
    isComplete: boolean;
    description?: string;
    dueDate: Date | string | number;
}



function priorityCheck(todo:Todo) {
    switch (todo.priority) {
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
            // This is a never type because the switch statement is exhaustive and it will never gets to this point
            const exhaustiveCheck: never = todo.priority;
            return exhaustiveCheck;
            break;
    }
}