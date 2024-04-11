import { NewTodo } from './components/NewTodo';
import { TodoList } from './components/TodoList';
import { TodoContextProvider } from './store/todo-context';

function App() {
  return (
    <TodoContextProvider>
      <NewTodo />
      <TodoList />
    </TodoContextProvider>
  );
}

export default App;
