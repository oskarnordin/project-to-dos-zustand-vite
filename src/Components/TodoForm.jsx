import { useState } from 'react';
import { useTodoStore } from '../Stores/todoStore';
import { format } from 'date-fns';

export const TodoForm = () => {
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [createdAt, setCreatedAt] = useState(
    format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")
  );
  const createTodo = useTodoStore((state) => state.createTodo);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo({ title, message });
    setMessage('');
    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Write a title...'
          style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            height: '20px',
            resize: 'none',
          }}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Write something you need to do...'
          style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            height: '100px',
            resize: 'none',
          }}
        />
        <button type='submit' style={{ marginBottom: '25px' }}>
          Send
        </button>
      </form>
    </>
  );
};
