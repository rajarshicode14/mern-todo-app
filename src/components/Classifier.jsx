import React from 'react'
import { GoPrimitiveDot } from "react-icons/go";

const Classifier = () => {
    return (
        <>
            <div className='flex w-[50vw] mx-auto justify-evenly place-items-center mb-8' >
                <span className='flex'>
                    <GoPrimitiveDot className='text-[#00ED64] text-3xl'></GoPrimitiveDot>
                    <h3 className='text-[#00ED64] font-Signika text-2xl font-bold'>Incomplete</h3>
                </span>
                <span className='flex'>
                    <GoPrimitiveDot className='text-red-600 text-3xl'></GoPrimitiveDot>
                    <h3 className='text-[#00ED64] font-Signika text-2xl font-bold'>Completed</h3>
                </span>
            </div>
        </>
    )
}

export default Classifier