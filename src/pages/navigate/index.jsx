import React from 'react'
import { Link } from 'react-router-dom';

function Navigate() {
  return (
    <div className='w-screen h-screen flex flex-col gap-10 justify-center items-center'>
        <p><i>This is a sample Page for testing only.</i></p>
        <div className='flex gap-9'> 
            <Link to='/login'>
                <button className='border border-darkBlue py-2 px-4 rounded-lg transition-all duration-75 hover:drop-shadow-sm hover:bg-white hover:border-2 hover:font-extrabold'>Login</button>
            </Link>
            <Link to='/signup'>
                <button className='border border-darkBlue py-2 px-4 rounded-lg transition-all duration-75 hover:drop-shadow-sm hover:bg-white hover:border-2 hover:font-extrabold'>Sign Up</button>
            </Link>
            <Link to='/forum'>
                <button className='border border-darkBlue py-2 px-4 rounded-lg transition-all duration-75 hover:drop-shadow-sm hover:bg-white hover:border-2 hover:font-extrabold'>Forum</button>
            </Link>
            <Link to='/profile'>
                <button className='border border-darkBlue py-2 px-4 rounded-lg transition-all duration-75 hover:drop-shadow-sm hover:bg-white hover:border-2 hover:font-extrabold'>Profile</button>
            </Link>
        </div>
    </div>
  )
}

export default Navigate;