import { create } from 'zustand';
import { format } from 'date-fns';

const initialState = {
  todos: [],
  darkMode: false,
};

export const useTodoStore = create((set, get) => ({
  ...initialState,

  createTodo: ({ title, message }) => {
    const newTodo = {
      id: Date.now(),
      title,
      message,
      darkMode: false,
      done: false,
      minimized: false,
      createdAt: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss"),
    };
    set((state) => ({ todos: [newTodo, ...state.todos] }));
  },

  removeTodo: (id) => {
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  },

  markAsDone: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }));
  },

  minimizeTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id && !todo.minimized ? { ...todo, minimized: true } : todo
      ),
    }));
  },

  maximizeTodo: (id) => {
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id && todo.minimized ? { ...todo, minimized: false } : todo
      ),
    }));
  },

  toggleDarkMode: () => {
    set((state) => ({
      darkMode: !state.darkMode,
    }));
  },

  finishAllTodos: () => {
    set((state) => ({
      todos: state.todos.map((todo) => ({ ...todo, done: true })),
    }));
  },

  getTodoCount: () => get().todos.length,
}));
