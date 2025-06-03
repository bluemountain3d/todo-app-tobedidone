import { useState } from "react";
import { Todo } from "../models/Todo";
import { TodoList } from "./TodoList";

export const TodoApp = () => {

  const initialTodos = [
    new Todo("Handla mat", "Köp mjölk, bröd och äpplen"),
    new Todo("Träna", "30 min löpning i parken"),
    new Todo("Städa", "Dammsuga vardagsrummet"),
    new Todo("Plugga", "Läs kapitel 3 i TypeScript-boken"),
    new Todo("Söka LIA", "Kolla upp företag från listan")
  ]

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

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