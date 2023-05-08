import React, { useEffect, useState } from 'react'
import Form from './Form'
import axios from '../axios.js'
import TodoList from './TodoList'
import Heading from './Heading'
import Classifier from './Classifier'

const Todo = () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])

    const fetchData = async () => {
        const response = await axios.get('/todos')
        setTodos(response.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const addTodo = async (e) => {
        e.preventDefault();
        if (input.length === 0) {
            return null;
        }
        await axios.post("/todos", [{
            ...todos,
            text: input,
            completed: false
        }])

        fetchData()
        setInput("")
    }

    return (
        <>
            <Heading></Heading>
            <div className=' flex flex-col justify-center mt-10 mb-3'>
                <Form input={input} setInput={setInput} addTodo={addTodo} />
            </div>
            <Classifier></Classifier>
            <TodoList todos={todos} fetchData={fetchData}></TodoList>
        </>
    )
}

export default Todo