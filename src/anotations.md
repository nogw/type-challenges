``` typescript
// Constructs a type with all properties of Type set to optional.
// This utility will return a type that represents all subsets of a given type.
// Like - title?: string;

interface Todo {
  title: string;
  description: string;
}

const updateTodo = (todo: Todo, fieldsToUpdate: Partial<Todo>) => {
  return { ...todo, ...fieldsToUpdate };
};

const TodoA = {
  title: "a",
  description: "c",
};

const TodoB = updateTodo(TodoA, {
  description: "b",
});

console.log(TodoA);
console.log(TodoB);
```