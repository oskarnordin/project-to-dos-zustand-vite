import { Header } from './Components/Header';
import { TodoForm } from './Components/TodoForm';
import { TodoList } from './Components/TodoList';
import { useTodoStore } from './Stores/todoStore';
import { useEffect } from 'react';

export const App = () => {
  const darkMode = useTodoStore((state) => state.darkMode);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div
      className={darkMode ? 'dark' : ''}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        marginTop: '20px',
      }}
    >
      <div className='window'>
        <div className='title-bar'>
          <div className='title-bar-text'>To-Do App</div>
        </div>
        <Header />
        <TodoForm />
      </div>
      <TodoList />
    </div>
  );
};
