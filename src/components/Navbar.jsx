import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <div className="flex space-x-8 justify-between items-center min-container bg-white  px-8 w-full m-6 border-0 rounded-3xl h-12 ">
            <div className="justify-start">

            <NavLink
            to="/"
            className=""
            >
            Home
            </NavLink>
            </div>
            <div className='justify-end space-x-8 '>

            <NavLink
            to="/all-bingos"
            className=""
            >
            Bingos
            </NavLink>
            <NavLink
            to="/play"
            className="bg-yellow-300 border-0 rounded-md py-2 px-4"
            >
            Play
            </NavLink>
            <NavLink
            to="/association"
            className="bg-green-300 border-0 rounded-md py-2 px-3"
            >
            Association
            </NavLink>
            </div>
        </div>
    </header>
  )
}

export default Navbar