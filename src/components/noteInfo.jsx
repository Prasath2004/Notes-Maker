import React from 'react'
import Navbar from './navbar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const noteInfo = () => {
    const navigate = useNavigate();
    const [Note, setNote] = useState("");
    const [topic, setTopic] = useState("");

    const handleNotes = (e) => {
        localStorage.setItem(topic, Note);
        navigate('/first')
    }

    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center '>
                <form className='flex flex-col mt-10 border border-sky-500 max-w-[50%]	rounded-2xl '>
                    <input type='text' placeholder='Enter the title...' onChange={e => { setTopic(e.target.value) }} className='h-[60px] ml-2 mr-2 border rounded-xl outline-none' />
                    <textarea name='notes' rows={15} cols={60} className='ml-2 mr-2 outline-none' onChange={e => { setNote(e.target.value) }} placeholder='Enter your content...'></textarea>
                    <button className=' border-2 rounded-xl bg-sky-500 max-w-full' onClick={handleNotes}>Add</button>
                </form>
            </div>
        </div>
    );
}

export default noteInfo