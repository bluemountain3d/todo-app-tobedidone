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
      className="border border-gray-600 rounded-lg bg-gray-700"
      open={open}
      onToggle={handleToggle}
    >
      <summary className="cursor-pointer p-2 font-semibold text-gray-100 hover:bg-gray-600 rounded-t-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
        Lägg till ny Todo
      </summary>
      <div className="p-4">
        <form onSubmit={ handleSubmit } className="grid grid-cols-1 gap-y-3">
          <div>
            <label htmlFor="title" className="sr-only">Titel</label>
            <input 
              type="text" 
              name="title" 
              id="title" 
              className="w-full px-4 py-2 rounded-lg text-gray-100 bg-gray-600 border border-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Vad ska göras?"
              value={todo.title} 
              onChange={ handleChange } 
            />
          </div>
          <div>
            <label htmlFor="text" className="sr-only">Beskrivning</label>
            <textarea 
              name="text" 
              id="text" 
              className="w-full px-4 py-2 rounded-lg text-gray-100 bg-gray-600 border border-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
              placeholder="Lägg till detaljer eller beskrivning..."
              value={todo.text} 
              onChange={ handleChange }>
            </textarea>
          </div>
          <button className="cursor-pointer px-4 py-2 flex items-center justify-center gap-x-2 rounded-lg text-gray-100 bg-gray-600 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true>
              <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875ZM12.75 12a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V18a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V12Z" clipRule="evenodd" />
              <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
            </svg>
            Lägg till Todo
          </button>
        </form>
      </div>
    </details>
  );
};