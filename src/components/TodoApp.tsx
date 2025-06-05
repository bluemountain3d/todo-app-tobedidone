import { useState } from "react";
import { Todo } from "../models/Todo";
import { TodoList } from "./TodoList";
import { getItem, setItem } from "../utils/localStorage";
import { AddTodo } from "./AddTodo";
import { SearchBox } from "./SearchBox";
import { SortOption } from "./SortOption";
import { CompletedVisibility } from "./CompletedVisibility";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [showCompleted, setShowCompleted] = useState(false);
  const [sortOption, setsortOption] = useState("default");

  const filteredTodos = todos
    .filter(todo => showCompleted || !todo.completed)
    .filter(todo => todo.title.toLowerCase().includes(searchTerm.trim().toLowerCase()))
    .sort((a, b) => {
      switch (sortOption) {
        case "title-asc":
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        case "title-desc":
          return b.title.toLowerCase().localeCompare(a.title.toLowerCase());
        case "date-newest":
          return b.createdAt.getTime() - a.createdAt.getTime();
        case "date-oldest":
          return a.createdAt.getTime() - b.createdAt.getTime();
        default:
          return 0;
      }
    });
    
  const toggleTodo = (todoId: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo
    );
    setTodos(updatedTodos);
    setItem("todos", updatedTodos);
  };

  const addTodo = (newTodo: Todo) => {
    if (newTodo.title && newTodo.text) {
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setItem("todos", updatedTodos);
    }
    else {
      alert("Du måste skriva en titel och en beskrivning!");
    }
  };

  const removeTodo = (todoId: number) => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);
    setTodos(updatedTodos);
    setItem("todos", updatedTodos);
  };

  return (
    <>
      <section className="grid grid-cols-1 gap-y-4">
        <SearchBox searchTerm={ searchTerm } onSearch={ setSearchTerm } />
        <div className="flex gap-x-4">
          <SortOption 
            sortOption={ sortOption } 
            onSortChange={ setsortOption }
          />
          <CompletedVisibility 
            showCompleted={ showCompleted } 
            onShowCompleted={ setShowCompleted }
          />
        </div>
        <AddTodo createTodo={ addTodo } />
      </section>
      <TodoList 
        todos={ filteredTodos }
        onRemoveTodo={ removeTodo }
        onToggleTodo={ toggleTodo }
      />
    </>
  );
};