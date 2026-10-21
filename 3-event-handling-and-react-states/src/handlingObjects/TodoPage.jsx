import { useState } from 'react'
import TodoItem from './TodoItem';
import {Plus, Rabbit, Trash} from "lucide-react";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const emptyState = (
    <div className="flex flex-col gap-4 items-center text-secondary-text mt-18">
      <Rabbit size={40} />
      <p>Your todos are empty!</p>
    </div>
  )
  const completedTodos = todos.filter((item) => item.completed);

  function handleFormSubmit(e) {
    e.preventDefault();
    const todoText = e.target["todo"].value;
    if(!todoText) return;
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
    if(!newText) return;
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
    <div className="max-w-2xl mx-auto p-10 lg:p-12 space-y-6">
      <h1 className="text-center font-display text-6xl font-bold text-accent">Todo Page</h1>
      <p className="text-center text-lg font-light text-secondary-text italic">Manage your Todos with Ease!</p>

      <form className="bg-gray-900 px-6 py-4 rounded-lg flex justify-between gap-4" onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          placeholder='Enter your todo' 
          name="todo"
          required
          className="flex-1 font-body focus:outline-none" />
        <button className="p-3 bg-accent text-black rounded-lg cursor-pointer hover:bg-accent-hover" type='submit'><Plus /></button>
      </form>

      <div className="flex justify-center gap-6">
        {!isSorted && (
            <button 
              className="px-4 py-2 ring-2 ring-accent rounded-lg cursor-pointer hover:bg-accent hover:text-black" 
              onClick={sortTodos}>
                Sort the Todos
            </button>)}

        {isTodoEmpty || (
            <button 
              className="px-4 py-2 ring-2 ring-red-400 rounded-lg flex items-center gap-2 hover:bg-red-400 hover:text-black cursor-pointer" 
              onClick={onDeleteAll}>
                <Trash size={24} />Delete All
              </button>)}
      </div>

      {isTodoEmpty && emptyState}
      {!isTodoEmpty && <p className="text-secondary-text text-right my-10">{completedTodos.length} of {todos.length} completed</p>}

      <div className="space-y-4">
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
