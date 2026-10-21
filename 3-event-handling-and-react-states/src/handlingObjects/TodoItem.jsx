import { useState } from "react";

const TodoItem = ({item, onTodoToggle, onTodoDelete, onTodoTextUpdate, onMoveUp, onMoveDown, index, todosLength}) => {

    const [showEdit, setShowEdit] = useState(false);

    function handleEditFormSubmit(e) {
        e.preventDefault();
        const todoText = e.target["todo"].value;
        onTodoTextUpdate(item.id, todoText);
        setShowEdit(false);
    }
    const todoEditDiv = (
    <div>

        <form onSubmit={handleEditFormSubmit}>
            <input type="text" defaultValue={item.text} name="todo" />
            <button>Update</button>
        </form>
        <button onClick={() => setShowEdit(false)}>
            Cancel
        </button>
    </div>)

    const todoItemDiv = (
        <div>
            <button disabled={index === 0} onClick={() => onMoveUp(index)}>🔼</button>
            <button disabled={index === todosLength - 1} onClick={() => onMoveDown(index)}>🔽</button>
            <input id={item.id} checked={item.completed} type="checkbox" onChange={(e) => onTodoToggle(item.id, e.target.checked)} />
            <label
                style={{textDecoration: item.completed ? 'line-through' : 'none'}}
                htmlFor={item.id}>{item.text}</label>


            <button onClick={() => setShowEdit(true)}>
                Edit
            </button>
            <button onClick={() => onTodoDelete(item.id)}>
                Delete the todo
            </button>
        </div>
    )
    return (
        <div>
            {showEdit ? todoEditDiv : todoItemDiv}
        </div>
    )
}

export default TodoItem
