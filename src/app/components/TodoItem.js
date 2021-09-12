import React from 'react'
import './TodoItem.css'
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';
import { setChecked } from '../../features/todoSlice';

const TodoItem = ({ todo }) => {
    const { id, name, done } = todo;
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(setChecked(id));
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
        </div>
    )
}

export default TodoItem
