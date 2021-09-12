import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { deleteTodo, setChecked } from '../../features/todoSlice';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = ({ todo }) => {
    const { id, name, done } = todo;
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setChecked(id));
    }

    const handleDelete = () => {
        dispatch(deleteTodo(id));
    }

    return (
        <div className="todoItem">
            <Checkbox
                checked={done}
                onChange={handleChange}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />

            <p className={done ? 'todo__item--done' : 'todo__item'}>{name}</p>

            <button className="todo__item__delete" onClick={handleDelete}><DeleteIcon /></button>
        </div>
    )
}

export default TodoItem
