import type { TodoItem } from "../types/TodoItem";

type TodoPresentationProps = {
  todo: TodoItem;
  onRemove: (todoId: number) => void;
}

export const TodoPresentation = ({todo, onRemove}: TodoPresentationProps) => {
  return (
    <article key={todo.id}>
      <h2>{ todo.title }</h2>
      <p>{ todo.text }</p>
      <div>
        <label htmlFor="completed">Klarmarkerad</label>
        <input 
          type="checkbox" 
          name="completed" 
          id="completed" 
          checked={todo.completed}
        />
      </div>
      <span>Skapad: { todo.createdAt.toLocaleString() }</span>
      <button type="button" onClick={() => onRemove(todo.id)}>Ta bort</button>
    </article>
  );
};