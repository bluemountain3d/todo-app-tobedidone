import type { TodoItem } from "../types/TodoItem";

type TodoPresentationProps = {
  todo: TodoItem;
}

export const TodoPresentation = ({todo}: TodoPresentationProps) => {
  return (
    <article key={todo.id}>
      <h2>{ todo.title }</h2>
      <p>{ todo.text }</p>
      <div>
        <label htmlFor="completed">Klarmarkerad</label>
        <input type="checkbox" name="completed" id="completed" checked={todo.completed}/>
      </div>
      <span>Skapad: { todo.createdAt.toLocaleDateString() }</span>
      <button type="button">Ta bort</button>
    </article>
  );
};