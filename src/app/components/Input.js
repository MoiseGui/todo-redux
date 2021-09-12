import React from 'react'
import "./Input.css"
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../features/todoSlice';


const Input = () => {
    const [input, setInput] = React.useState("");
    const dispatch = useDispatch();

    const addTodo = () => {
        console.log("adding todo")
        dispatch(saveTodo({
            name: input,
            done: false,
            id: Date.now()
        }));
        setInput("");
        document.querySelector("#input").focus();
    }

    return (
        <div className="input">
            <input type="text"
                id="input"
                value={input}
                autoFocus
                onChange={e => setInput(e.target.value)} />
            <button
                onClick={addTodo}
                disabled={input === ""}
            >Add</button>
        </div>
    )
}

export default Input
