import { useTodoStore } from '../Stores/todoStore';
import { Todo } from './Todo';

export const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} />
      ))}
    </>
  );
};
