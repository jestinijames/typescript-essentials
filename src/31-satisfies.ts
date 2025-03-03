// ****** SATISFIES ******

type Todo = {
    title: string;
    isComplete: boolean;
    dueDate: Date | string;
}

const todo = {
    title: "Pick up",
    dueDate: new Date(),
    isComplete: false
} satisfies Todo

todo.dueDate.setDate(4) // This is allowed because dueDate can be a string or a Date object


// So basically satisfies means my todo object which has a specific date value of dueDate satisfies the Todo type