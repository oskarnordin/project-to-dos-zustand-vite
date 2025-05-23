import React from 'react';
import { useTodoStore } from '../Stores/todoStore';

export const Todo = ({ id }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const minimizeTodo = useTodoStore((state) => state.minimizeTodo);
  const maximizeTodo = useTodoStore((state) => state.maximizeTodo);
  const markAsDone = useTodoStore((state) => state.markAsDone);
  const todo = useTodoStore((state) => state.todos.find((t) => t.id === id));

  if (!todo) return null;

  return (
    <div className='wrapper'>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#transparent',
        }}
      ></div>
      <div
        style={{
          width: 600,
          marginTop: '10px',
          height: todo.minimized ? '28px' : 'auto',
          overflow: 'hidden',
        }}
        className='window'
      >
        <div className='title-bar'>
          <div
            className='title-bar-text'
            style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
          >
            {todo.title}
          </div>
          <div className='title-bar-controls'>
            <button aria-label='Minimize' onClick={() => minimizeTodo(id)} />
            <button aria-label='Maximize' onClick={() => maximizeTodo(id)} />
            <button aria-label='Close' onClick={() => removeTodo(id)} />
          </div>
        </div>
        <div
          className='window-body'
          style={{
            backgroundColor: '#C0C0C0',
            color: 'black',
            padding: '20px',
          }}
        >
          <p style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            {todo.message}
          </p>
          <input
            type='checkbox'
            id={`done-${id}`}
            checked={todo.done}
            onChange={() => markAsDone(id)}
          />
          <label htmlFor={`done-${id}`}>Mark as done</label>
          <p>Created at: {new Date(todo.createdAt).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};
