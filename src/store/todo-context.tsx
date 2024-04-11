import { PropsWithChildren, createContext, useState } from 'react';
import { Todo } from '../todo-model';

interface TodoContextObj {
  todos: Todo[];
  addTodo: (text: string, clearFn: (value: string) => void) => void;
  deleteTodo: (id: number) => void;
  moveTodoUp: (index: number) => void;
  moveTodoDown: (index: number) => void;
}

const context = {
  todos: [],
  addTodo: (text: string, clearFn: (value: string) => void) => {},
  deleteTodo: (id: number) => {},
  moveTodoUp: (index: number) => {},
  moveTodoDown: (index: number) => {},
};
export const TodoContext = createContext<TodoContextObj>(context);

export const TodoContextProvider = ({ children }: PropsWithChildren) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodoText: string, clearFn: (value: string) => void) => {
    if (newTodoText.trim().length >= 1) {
      setTodos((prevTodos) => [...prevTodos, { id: Math.floor(Math.random() * 100), text: newTodoText }]);
    }
    clearFn('');
  };

  const deleteTodo = (todoId: number) => {
    setTodos(todos.filter(({ id }) => id !== todoId));
  };

  const moveTodoUp = (index: number) => {
    if (index > 0) {
      const updatedTodos = [...todos];
      updatedTodos[index] = updatedTodos.splice(index - 1, 1, updatedTodos[index])[0];
      setTodos(updatedTodos);
    }
  };
  const moveTodoDown = (index: number) => {
    if (index < todos.length - 1) {
      const updatedTodos = [...todos];
      updatedTodos[index] = updatedTodos.splice(index + 1, 1, updatedTodos[index])[0];
      setTodos(updatedTodos);
    }
  };

  const contextValue: TodoContextObj = {
    todos: todos,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    moveTodoUp: moveTodoUp,
    moveTodoDown: moveTodoDown,
  };
  return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>;
};
