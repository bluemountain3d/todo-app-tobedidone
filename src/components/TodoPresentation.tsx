import type { TodoItem } from "../types/TodoItem";

type TodoPresentationProps = {
  todo: TodoItem;
  onRemove: (todoId: number) => void;
  onToggle: (todoId: number) => void;
}

export const TodoPresentation = ({todo, onRemove, onToggle}: TodoPresentationProps) => {
  return (
    <article 
      key={ todo.id } 
      className={ `
        p-4 border-1 rounded-lg grid grid-cols-1 gap-y-2 bg-gray-700
        ${todo.completed ? 'completed' : ''} 
      `}
    >
      <div className="flex flex-row items-center gap-x-3 pb-3 border-b-2 border-gray-600">
        <label htmlFor="completed" className="sr-only">Klarmarkerad</label>
        <input 
          type="checkbox" 
          name="completed" 
          id="completed" 
          className="cursor-pointer w-6 h-6 flex-shrink-0 text-blue-600 bg-gray-700 hover:bg-gray-600 border-gray-600 rounded-sm focus:outline-none focus:ring-2   focus:ring-blue-500 transition-colors"
          checked={ todo.completed }
          onChange={ () => onToggle(todo.id) }
        />
        <h2 className="text-2xl leading-6 flex-1 text-gray-100 font-bold">{ todo.title }</h2>
        
      </div>
      
      <p className="p-2 text-gray-200 text-lg">{ todo.text }</p>
      
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-400">
          Skapad: { todo.createdAt.toLocaleString() }
        </span>
        <button 
          type="button"
          className="cursor-pointer w-8 h-8 text-3xl leading-8 grid place-content-center flex-shrink-0 rounded-md text-gray-400 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors" 
          onClick={ () => onRemove(todo.id) }
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </article>
  );
};
