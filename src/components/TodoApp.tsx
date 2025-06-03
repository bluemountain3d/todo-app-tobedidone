import { useState } from "react";
import { Todo } from "../models/Todo";
import { TodoList } from "./TodoList";
import { getItem } from "../utils/LocalStorage";

export const TodoApp = () => {

  const initialTodos = [
    new Todo("Handla mat", "Köp mjölk, bröd och äpplen"),
    new Todo("Träna", "30 min löpning i parken"),
    new Todo("Städa", "Dammsuga vardagsrummet"),
    new Todo("Plugga", "Läs kapitel 3 i TypeScript-boken"),
    new Todo("Söka LIA", "Kolla upp företag från listan")
  ]

  const [todos, setTodos] = useState<Todo[]>(() => {
    // Get from Local Storage 
    const item = getItem("todos") as Todo[] | undefined;

    // Recreate the objects from local storage
    // 1. Create new objects using Todo Class (with correct title and text)
    // 2. Overwrite the auto-generated values (id, completed, createdAt) with stored values
    if (item && Array.isArray(item)) {
      return item.map(todoData =>
        Object.assign(new Todo(todoData.title, todoData.text), {
          id: todoData.id,
          completed: todoData.completed,
          createdAt: new Date(todoData.createdAt)
        })
      );
    }

    // Else use pre defined list of todos
    return initialTodos;
  });

  return (
    <>
      <h1>ToBeDiDone - Todo App</h1>
      <section>
        ... Filtreringsfunktionalitet kommer här ...
      </section>
      <TodoList todos={ todos }/>
    </>
  );
};