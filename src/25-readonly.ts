// ****** READONLY ******

type Todo = {
   title: string
   completed: boolean
}

// This makes finalTodo a readonly type of the Todo type
type FinalTodo = Readonly<Todo>;

// NOTE: It is similar to as const but readonly can be used on typescript 
// whereas as const can only be used in javascript