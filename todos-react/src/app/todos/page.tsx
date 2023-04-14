'use client';

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

import { FormEvent, useRef, useState } from 'react';

export default function TodosPage() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, title: 'ABC', completed: false },
    { id: 2, title: 'DEF', completed: true },
  ]);

  const inputElRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: Math.random(),
        title: inputElRef.current?.value ?? '',
        completed: false,
      }
    ])
  }

  return (
    <>
      <form className="todos-form" onSubmit={handleSubmit}>
        <input type="checkbox" className="todos-toggle-checkbox" />
        <input type="text" className="todos-new-value" ref={inputElRef} />
        <button>+</button>
      </form>
      <div className="todos-list">
        {todos.map((todo) => (
          <div className="todos-item" data-todo-id={todo.id}>
            <input type="checkbox" />
            <span>{todo.title}</span>
            <button>-</button>
          </div>
        ))}
      </div>
    </>
  );
}
