import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: [],
}

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        saveTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        setChecked: (state, action) => {
            state.todoList.map(todo => {
                if (todo.id === action.payload) {
                    todo.done = !todo.done
                }
                return todo;
            })
        }
    }
});

export const {
    saveTodo, setChecked
} = todoSlice.actions

export const selectTodoList = state => state.todos.todoList

export default todoSlice.reducer