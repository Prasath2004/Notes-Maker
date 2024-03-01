import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const navbar = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/new')
    }
    return (
        <div>
            <nav className='bg-sky-500 h-[75px] flex items-center justify-between'>
                <Link to={'/first'} > <h1 className=' flex items-center text-4xl font-extrabold text-white font-sans hover:font-serif'>Notes Maker</h1> </Link>
                <ul className='flex float-end' >
                    <Link to={'/first'}> <li className='mr-5 text-white'>Notes</li></Link>
                    <li className='mr-5'>
                        <button className='bg-white rounded-lg p-1 text-blue-500' onClick={handleClick}>New Notes</button>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default navbar