import { useState } from 'react'
import TodoItem from './TodoItem';

const TodoPage = () => {

    // const [person, setPerson] = useState({
    //     name:'aryan',
    //     age:21
    // });

    // function handleIncreaseAge() {
    //     //  person.age++;   // OBJECT MUTATION - AVOID DOING THIS BECAUSE IT WILL NOT RE-RENDER THE COMPONENT

    //         const newPerson = {...person, age: person.age + 1}; // SPREAD OPERATOR - THIS WILL CREATE A NEW OBJECT AND UPDATE THE STATE
    //         setPerson(newPerson);
    // }

    const [todos, setTodos] = useState([]);


    function handleFormSubmit(e) {
        e.preventDefault();
        const todoText = e.target["todo"].value;
        // todos.push(todoText); // OBJECT MUTATION - AVOID DOING THIS BECAUSE IT WILL NOT RE-RENDER THE COMPONENT
        const newTodos = [...todos, {
            text: todoText,
            id: crypto.randomUUID(),
            completed: false
        }]; // SPREAD OPERATOR - THIS WILL CREATE A NEW ARRAY AND UPDATE THE STATE
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

    const emptyState = (
        <h3>Nothing's here, Add a todo!</h3>
    )

  return (
    <div>
        {/* <p>{person.name}</p>
        <p>{person.age}</p>

        <button onClick={handleIncreaseAge}>Increase Age</button> */}

        <h1>Todo Page</h1>
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder='Enter your todo' name="todo" />
            <button type='submit'>Add Todo</button>
        </form>

        {todos.length === 0 && emptyState}

        <div>
            <ul>
                {todos.map((item) => 
                    <TodoItem 
                        key={item.id} 
                        item={item} 
                        onTodoToggle={onTodoToggle} 
                        onTodoDelete={onTodoDelete} />
                )}
            </ul>
        </div>
    </div>
  )
}

export default TodoPage
