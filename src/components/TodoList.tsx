import { useContext } from 'react';
import { TodoItem } from './TodoItem';
import { TodoContext } from '../store/todo-context';

export const TodoList = () => {
  const { todos } = useContext(TodoContext);

  return (
    <div className='to-do-list'>
      <h2>TODO LIST</h2>
      <ul>
        {todos.map(({ id, text }, index) => (
          <TodoItem id={id} text={text} index={index} />
        ))}
      </ul>
    </div>
  );
};
