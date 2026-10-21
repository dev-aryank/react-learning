import { Check, ChevronDown, ChevronUp, SquarePen, Trash, X } from "lucide-react";
import { useState } from "react";
import CheckBox from "./CheckBox";

const TodoItem = ({item, onTodoToggle, onTodoDelete, onTodoTextUpdate, onMoveUp, onMoveDown, index, todosLength}) => {

    const [showEdit, setShowEdit] = useState(false);

    function handleEditFormSubmit(e) {
        e.preventDefault();
        const todoText = e.target["todo"].value;
        onTodoTextUpdate(item.id, todoText);
        setShowEdit(false);
    }
    const todoEditDiv = (
    <div className="flex justify-between items-center bg-gray-900 px-4 py-2 min-h-20 rounded-lg group">
        <form className="flex-1 flex items-center gap-2 px-2" onSubmit={handleEditFormSubmit}>
            <input 
                className="flex-1 border-2 border-secondary-text px-4 py-2 rounded-lg font-body" 
                type="text" 
                defaultValue={item.text}
                name="todo" />
            <button className="bg-hover">
                <Check />
            </button>
        </form>
        <button className="text-red-400" onClick={() => setShowEdit(false)}>
            <X />
        </button>
    </div>)

    const todoItemDiv = (
        <div className="flex gap-4 justify-between items-center hover:bg-gray-900 rounded-lg px-4 py-2 group">
            <div className="flex flex-col gap-1 text-secondary-text">
                <button className="hover:bg-gray-700 rounded-md p-1 cursor-pointer" disabled={index === 0} onClick={() => onMoveUp(index)}><ChevronUp /></button>

                <button className="hover:bg-gray-700 rounded-md p-1 cursor-pointer" disabled={index === todosLength - 1} onClick={() => onMoveDown(index)}><ChevronDown /></button>
            </div>
            
            <div className="flex-1 flex gap-4 items-center">
                <CheckBox 
                    id={item.id} 
                    checked={item.completed} 
                    onChange={(e) => onTodoToggle(item.id, e.target.checked)}
                    label={item.text} />
                
            </div>

            <div className="hidden group-hover:flex gap-4">
                <button onClick={() => setShowEdit(true)}>
                    <SquarePen />
                </button>
                <button className="text-red-400 " onClick={() => onTodoDelete(item.id)}>
                    <Trash />
                </button>
            </div>
        </div>
    )
    return (
        <div className="border-t border-secondary-text pt-3">
            {showEdit ? todoEditDiv : todoItemDiv}
        </div>
    )
}

export default TodoItem
