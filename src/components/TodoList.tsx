import { Todo } from "../models/Todo";
import { TodoPresentation } from "./TodoPresentation";

type TodoListProps = {
  todos: Todo[];
}

export const TodoList = ({todos}: TodoListProps) => {
  return (
    <section>
      {todos.map((todo) => (
        <TodoPresentation
          key={todo.id}
          todo={todo}
        />
      ))}      
    </section>
  );
};