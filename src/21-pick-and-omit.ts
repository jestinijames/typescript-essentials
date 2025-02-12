// ****** PICK AND OMIT ******


type Todo = {
    id: string
    name: string
    completed: boolean
    status: string
}

// type NewTodo  = {
//     name: string
//     completed: boolean  
// }

//type NewTodo = Pick<Todo, 'name' | 'completed'| 'status'>;


// It's better to omit the id field from the Todo type than to pick the fields we need
// This is because if we add more fields to the Todo type, we will have to come back here to update the NewTodo type
type NewTodo = Omit<Todo, 'id'>;

function saveTodo(todo:NewTodo): Todo{
    return {
        ...todo,
        id: crypto.randomUUID()
    }
}

function renderTodo(todo: Todo){
    const div = document.createElement('div');
    div.id = todo.id;
    // do the rest
}

