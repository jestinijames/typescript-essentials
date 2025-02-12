// ****** PARTIAL AND REQUIRED ******

type Todo = {
     title?: string
     completed: boolean
     address?: {
        street?: string
     }
}

// This is a partial type of the Todo type which means that all the fields in the Todo type are optional
type FormTodo = Partial<Todo>;


// What this means is that the title field is required while the rest of the fields are optional
type SpecificForm = Required<Pick<Todo, 'title'>> & Omit<Todo, 'title'>;


// What this means is that the title field is required while the rest of the fields are optional
// Let's break it down a bit
// We are picking the title field from the Todo type and making it required
// We are then picking the rest of the fields from the Todo type and making them optional
// We are then merging the two types together
// This is a way to make some fields required and others optional
type RequiredPick<T, K extends keyof T> = Required<Pick<T, K>> & T;


// This is a partial type of the Todo type which means that all the fields in the Todo type are optional
// breaking it down
// We are picking the title field from the Todo type and making it optional
// We are then picking the rest of the fields from the Todo type and making them optional
// We are then merging the two types together
type PartialPick<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K> 

// NOTE: Required properties always override optional properties