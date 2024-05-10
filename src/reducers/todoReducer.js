import { ADD_TODO, DELETE_TODO } from "../types/todoTypes"

const initialState = {
    list: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const { id, text, date, time } = action.payload
            return {
                ...state, list: [...state.list, { id: id, text: text, date: date, time: time }]
            }
        case DELETE_TODO:
            const newList = state.list.filter((todo) => todo.id !== action.id)
            return {
                ...state, list: newList
            }
        default: return state
    }
}

export default todoReducer
