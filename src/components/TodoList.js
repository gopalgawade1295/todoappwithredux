import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo } from '../actions/todoActions'
import { Button, Typography } from '@material-ui/core'

function TodoList() {
    const list = useSelector((state) => state.todoReducer.list)
    const dispatch = useDispatch()

    return (
        <div className="App">
            {list.map((todo) => {
                return (
                    <div key={todo.id}>
                        <Typography variant="subtitle1">
                            {todo.text} | {todo.date} | {todo.time} &nbsp; &nbsp; <Button variant="contained" color="secondary" onClick={() => dispatch(deleteTodo(todo.id))}>Delete &nbsp; <i class="far fa-trash-alt"></i></Button>
                        </Typography>
                        <br />
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList
