import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='padding-x absolute top-6 z-10 w-full'>
        <div className="flex space-x-8 justify-between items-center min-container bg-white font-Playfair px-8 w-full m-6 border-0 rounded-full h-12 ">
            <div className="justify-start">

            <NavLink
            to="/"
            className="font-Playfair"
            >
            Home
            </NavLink>
            </div>
            <div className='justify-end space-x-8 font-Playfair'>

            <NavLink
            to="/all-bingos"
            className="font-Playfair"
            >
            Bingos
            </NavLink>
            <NavLink
            to="/play"
            className="bg-yellow-300 border-0 rounded-md py-2 px-4 font-Playfair"
            >
            Play
            </NavLink>
            <NavLink
            to="/association"
            className="bg-green-300 border-0 rounded-md py-2 px-3 font-Playfair"
            >
            Association
            </NavLink>
            </div>
        </div>
    </header>
  )
}

export default Navbar