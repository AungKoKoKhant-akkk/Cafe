import React from 'react'
import { Link } from 'react-router-dom'
import { GiCoffeeCup } from "react-icons/gi";

function Nav() {
    return (
        <nav className="navbar container mx-auto flex justify-between items-center p-4 bg-yellow-100">
            <div className='flex items-center gap-2 text-2xl font-bold '>
                <GiCoffeeCup />
                <Link to="/">Cozy Cafe</Link>
            </div>
            <div className='flex-none px-2 mx-2 '>
                <div className='gap-1 flex text-lg'>
                    <Link to="/" className='btn btn-ghost hover:bg-yellow-200 text-lg'>Home</Link>
                    <Link to="/about" className='btn btn-ghost hover:bg-yellow-200 text-lg'>About</Link>
                    <Link to="/menu" className='btn btn-ghost hover:bg-yellow-200 text-lg'>Menu</Link>
                    <Link to="/contact" className='btn btn-ghost hover:bg-yellow-200 text-lg'>Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav
