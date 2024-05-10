import React, { useState } from 'react'
import { addTodo } from '../actions/todoActions'
import { useDispatch } from 'react-redux'
import { TextField, Button } from '@material-ui/core'

function TodoAdd() {
    const [inputText, setInputText] = useState('')
    const [inputDate, setInputDate] = useState('')
    const [inputTime, setInputTime] = useState('')
    const dispatch = useDispatch()

    return (
        <div className="App">
            <TextField style={{ width: 250 }} type="text" placeholder="Type here..." value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <TextField style={{ width: 250 }} type="date" value={inputDate} onChange={(e) => setInputDate(e.target.value)} />
            <TextField style={{ width: 250 }} type="time" value={inputTime} onChange={(e) => setInputTime(e.target.value)} />
            <br />
            <br />
            <Button variant="contained" color="primary" onClick={() => dispatch(addTodo(inputText, inputDate, inputTime))}>Add &nbsp; <i class="fas fa-plus"></i></Button>
        </div>
    )
}

export default TodoAdd
