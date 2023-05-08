import React from 'react'
import { RiDeleteBin6Fill } from "react-icons/ri";

import axios from '../axios.js'

const TodoList = ({ todos, fetchData }) => {
    const updateTodo = async (id) => {
        const response = await axios.put(`/todos/${id}`, {
            id
        })
        fetchData()
        return response.data.json
    }

    const deleteTodo = async (id) => {
        const response = await axios.delete(`/todos/${id}`, {
            id
        })
        fetchData()
        return response.data.json
    }

    return (
        <>
            <ul>
                {
                    todos.map((todo) => {
                        return (
                            <li key={todo._id} className='mb-3'>
                                <div className="lg:w-[70vw] md:w-[80vw] w-[90vw] m-auto">
                                    <div className="bg-white p-3 rounded-lg shadow-lg w-full flex justify-between place-items-center">
                                        <p onClick={() => updateTodo(todo._id)} className={`cursor-pointer text-2xl font-bold mb-2 text-[#00ED64] w-[95%] mx-2 ${todo.completed ? 'text-red-600' : ''}`}>{todo.text}</p>
                                        <RiDeleteBin6Fill onClick={() => deleteTodo(todo._id)} className='cursor-pointer text-3xl text-[#001E2B]'></RiDeleteBin6Fill>
                                    </div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default TodoList