import { useTodoStore } from '../Stores/todoStore';
import WindowsLogo from '../assets/WindowsLogo.png';

export const Header = () => {
  const todos = useTodoStore((state) => state.todos);
  const darkMode = useTodoStore((state) => state.darkMode);
  const toggleDarkMode = useTodoStore((state) => state.toggleDarkMode);
  const finishAllTodos = useTodoStore((state) => state.finishAllTodos);

  return (
    <div
      className={darkMode ? 'dark' : ''}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <header
        className='bg-gray-800 text-white p-2'
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src={WindowsLogo}
          alt='Windows Logo'
          style={{ width: 80, marginTop: 28 }}
        />
        <h2>My To-Do Application</h2>
      </header>
      <p style={{ marginTop: 8 }}>Total to-do's: {todos.length}</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button onClick={toggleDarkMode}>Dark Mode</button>
        <button onClick={finishAllTodos}>Complete All</button>
      </div>
    </div>
  );
};
