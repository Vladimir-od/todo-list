import { useContext } from 'react';
import { TodoContext } from '../store/todo-context';

interface TodoItemProps {
  id: number;
  text: string;
  index: number;
}

export const TodoItem = ({ id, text, index }: TodoItemProps) => {
  const { deleteTodo, moveTodoDown, moveTodoUp } = useContext(TodoContext);

  return (
    <li key={id}>
      <span className='text'>{text}</span>
      <button className='delete-button' onClick={() => deleteTodo(id)}>
        DELETE
      </button>
      <button className='move-button' onClick={() => moveTodoUp(index)}>
        UP
      </button>
      <button className='move-button' onClick={() => moveTodoDown(index)}>
        DOWN
      </button>
    </li>
  );
};
