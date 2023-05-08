import React from 'react'

const Form = ({ input, setInput, addTodo }) => {
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <div className="mx-auto">
                <div className="container flex justify-center items-center">
                    <div className="relative">
                        <div className="absolute top-4 left-3">
                            <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                        </div>
                        <input value={input} onChange={handleChange} type="text" className="h-14 lg:w-[70vw] md:w-[80vw] w-[90vw] pl-10 pr-20 rounded-lg z-0 shadow focus:outline-none placeholder-black text-lg font-semibold" placeholder="Add your todo..." />
                        <div className="absolute top-2 right-2">

                            <button type='submit' onClick={(e) => addTodo(e)} className="h-10 w-20 rounded-lg bg-[#001E2B] text-[#00ED64] font-semibold text-xl">Add</button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form