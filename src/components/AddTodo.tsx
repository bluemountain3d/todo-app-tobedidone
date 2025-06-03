import { useState, type ChangeEvent, type FormEvent } from "react";
import { Todo } from "../models/Todo";
import { getItem, setItem } from "../utils/localStorage";

type AddTodosProps = {
  createTodo: (todo: Todo) => void;
}

export const AddTodo = ({createTodo}: AddTodosProps) => {

  const [todo, setTodo] = useState<Todo>(
    new Todo("","")
  );

  const [open, setOpen] = useState(() => {
    const item = getItem("addTodoFormOpen") as boolean | undefined;
    return item || false;
  });

  const handleToggle= (e: React.SyntheticEvent<HTMLDetailsElement>) => {
    const isOpen = e.currentTarget.open;
    setOpen(isOpen);
    setItem("addTodoFormOpen", isOpen);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setTodo({...todo, [e.target.id]: e.target.value});
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTodo(todo);
    setTodo(new Todo("",""));
  };

  return (
    <details
      open={open}
      onToggle={handleToggle}
    >
      <summary>Lägg till ny Todo</summary>
      <div>
        <form onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="title">Titel</label>
            <input type="text" name="title" id="title" onChange={ handleChange } />
          </div>
          <div>
            <label htmlFor="text">Beskrivning</label>
            <textarea name="text" id="text" onChange={ handleChange }></textarea>
          </div>
          <button>Lägg till Todo</button>
        </form>
      </div>
    </details>
  );
};