import { useState, ChangeEvent, useContext } from 'react';
import { TodoContext } from '../store/todo-context';

export const NewTodo = () => {
  const [newTodoText, setNewTodoText] = useState<string>('');
  const { addTodo } = useContext(TodoContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  };
  return (
    <div className='new-todo'>
      <h2>ADD NEW TODO</h2>
      <input type='text' placeholder='Enter a todo' value={newTodoText} onChange={handleInputChange} />
      <button className='add-button' onClick={() => addTodo(newTodoText, setNewTodoText)}>
        ADD
      </button>
    </div>
  );
};
