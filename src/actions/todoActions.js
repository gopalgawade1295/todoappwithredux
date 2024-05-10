import { ADD_TODO, DELETE_TODO } from '../types/todoTypes'

export const addTodo = (text, date, time) => {
    return {
        type: ADD_TODO,
        payload: {
            id: Math.random(),
            text: text,
            date: date,
            time: time
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        id
    }
}
