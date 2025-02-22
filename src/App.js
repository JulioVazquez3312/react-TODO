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
  { text: 'Estados derivados', completed: true},
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodoS = todos.filter( 
      todo => !!todo.completed)
    .length;
  const tótálTodoS = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  console.log('Los Usuarios Buscaron todos de ' + searchValue);

  return (
    <>
      <TodoCounter 
        completed={completedTodoS}
        total={tótálTodoS}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      <TodoList>
        {
          searchedTodos.map(
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
