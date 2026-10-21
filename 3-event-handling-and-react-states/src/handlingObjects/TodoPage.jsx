import { useState } from 'react'
import TodoItem from './TodoItem';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const emptyState = (
    <h3>Nothing's here, Add a todo!</h3>
  )
  const completedTodos = todos.filter((item) => item.completed);

  function handleFormSubmit(e) {
    e.preventDefault();
    const todoText = e.target["todo"].value;
    // todos.push(todoText); // OBJECT MUTATION - AVOID DOING THIS BECAUSE IT WILL NOT RE-RENDER THE COMPONENT
    const newTodos = [
      ...todos,
      {
        text: todoText,
        id: crypto.randomUUID(),
        completed: false
      }
    ]; // SPREAD OPERATOR - THIS WILL CREATE A NEW ARRAY AND UPDATE THE STATE
    setTodos(newTodos);

    e.target.reset();
  }

  function onTodoToggle(id, checked) {
    const newTodos = todos.map((item) => {
      if(item.id === id) {
        return {...item, completed: checked};
      }
      return item;
    });
    setTodos(newTodos);
  }

  function onTodoDelete(id) {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  function onDeleteAll() {
    setTodos([]);
  }

  const compareFunction = (a, b) => a.text.localeCompare(b.text);
  function sortTodos() {
    const newTodos = [...todos].sort(compareFunction);
    setTodos(newTodos);
  }

  const isTodoEmpty = todos.length === 0;
  const isSorted = todos.every((item, index, arr) => {
    if(index === 0) return true;
    return compareFunction(arr[index - 1], item) <= 0;
  });

  function onTodoTextUpdate(id, newText) {
    const newTodos = todos.map((item) => {
      if(item.id === id) {
        return {...item, text: newText};
      }
      return item;
    });
    setTodos(newTodos);
  }

  const handleMoveUp = (index) => {
    if(index === 0) return; // Can't move up the first item
    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] = [newTodos[index], newTodos[index - 1]];
    setTodos(newTodos);
  }

  const handleMoveDown = (index) => {
    if(index === todos.length - 1) return; // Can't move down the last item
    const newTodos = [...todos];
    [newTodos[index], newTodos[index + 1]] = [newTodos[index + 1], newTodos[index]];
    setTodos(newTodos);
  }

  return (
    <div>
      <h1>Todo Page</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder='Enter your todo' name="todo" />
        <button type='submit'>Add Todo</button>
      </form>

      {!isSorted && <button onClick={sortTodos}>Sort the Todos</button>}
      {isTodoEmpty || <button onClick={onDeleteAll}>Delete All</button>}

      {isTodoEmpty && emptyState}
      {!isTodoEmpty && <p>{completedTodos.length} of {todos.length} completed</p>}

      <div>
        <ul>
          {todos.map((item, index) =>
            <TodoItem
              key={item.id}
              item={item}
              onTodoToggle={onTodoToggle}
              onTodoDelete={onTodoDelete} 
              onTodoTextUpdate={onTodoTextUpdate}
              onMoveUp={handleMoveUp}
              onMoveDown={handleMoveDown}
              index={index}
              todosLength={todos.length}
            />
          )}
        </ul>
      </div>
    </div>
  )
}

export default TodoPage
