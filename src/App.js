import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos = [
  { text: 'Cortar Cebolla', completed: true},
  { text: 'Tomar el curso', completed: false},
  { text: 'Llorar con la LLorona', completed: false},
  { text: 'HAHAHAHAHA', completed: false},
];

function App() {
  return (
    <>

      <TodoCounter completed={10} total={20}/>
      <TodoSearch />

      <TodoList>
        {
          defaultTodos.map(
            todo => (
              <TodoItem 
              key={todo.text} 
              text={todo.text}
              completed={todo.completed} />
            ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
