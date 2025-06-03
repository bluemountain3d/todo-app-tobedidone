import { Todo } from "../models/Todo";
import { TodoPresentation } from "./TodoPresentation";

type TodoListProps = {
  todos: Todo[];
  onRemoveTodo: (todoId: number) => void;
}

export const TodoList = ({todos, onRemoveTodo}: TodoListProps) => {
  return (
    <section>
      {todos.map((todo) => (
        <TodoPresentation
          key={todo.id}
          todo={todo}
          onRemove={onRemoveTodo}
        />
      ))}      
    </section>
  );
};