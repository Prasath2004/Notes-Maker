import React, { useEffect } from 'react'
import Navbar from './navbar'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const first = () => {
    const [updated, setupdated] = useState("")
    const [localNotes, setlocalNotes] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchLocalStorageData = () => {
            const data = [];

            for (let i = 0; i < localStorage.length; i++) {
                const key = localStorage.key(i);
                const value = localStorage.getItem(key);
                data.push({ key, value });
            }

            setlocalNotes(data);
        };


        fetchLocalStorageData();
    }, []);
    console.log(localNotes);
    const handleDelete = (delkey) => {
        localStorage.removeItem(delkey);

        setlocalNotes((prevData) =>
            prevData.filter((item) => item.key !== delkey)
        );
    }

    


    return (
        <div className>
            <Navbar />
            <div className='flex flex-wrap justify-center'>

                {localNotes.map((item, index) => (
                    <div className="max-w-sm p-6 bg-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">


                        <div className='flex w-[20rem] border rounded-lg h-[45vh] bg-sky-500 shadow-lg shadow-cyan-500/50 flex-col m-[0.5rem] '>

                            <h3 className='bg-white h-[5vh] flex items-center justify-between font-extrabold'>{item.key}
                                <div className='mr-2'>
                                    
                                    <button className='border rounded-lg p-1 bg-red-500 text-white' onClick={() => { handleDelete(item.key, 'updatedVal') }}>Delete</button>
                                </div>
                            </h3>
                            <p>{item.value}</p>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}

export default first