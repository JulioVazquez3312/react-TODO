import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true},
//   { text: 'Tomar el curso', completed: false},
//   { text: 'Llorar con la LLorona', completed: false},
//   { text: 'HAHAHAHAHA', completed: false},
//   { text: 'Estados derivados', completed: true},
// ];
// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos));
// const stringTodos = JSON.stringify(defaultTodos);
// localStorage.getItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');

function App() {
  const localStorageTodos = localStorage.getItem('TODOS_V1');
  let parsedTodos;
  if(localStorageTodos){
    parsedTodos= JSON.parse(localStorageTodos);
  }else{
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedTodos = [];
  }

  const [todos, setTodos] = React.useState(parsedTodos);
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

  const saveTodos = (newTodos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newTodos));
    setTodos(newTodos);
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

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
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))
        }
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
