import React, { useState, useEffect, use } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GiCoffeeCup } from "react-icons/gi";

function Nav() {


    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === "/";
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }



    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const isTransparent = isHomePage && !scrolled;

    return (
        <nav className={`navbar container mx-auto flex justify-between items-center  p-4 fixed top-0 left-0 right-0 z-50 transition-shadow ${isTransparent ? 'bg-transparent shadow-none' : 'bg-yellow-100 shadow-md'}`}>
            <div className={`flex items-center gap-2 text-2xl font-bold ${isTransparent ? 'text-yellow-100' : ''} `}>
                <GiCoffeeCup />
                <Link to="/">Cozy Cafe</Link>
            </div>
            <div className='flex-none px-2 mx-2 '>
                <div className='gap-1 flex text-lg'>
                    <Link to="/" className={`btn btn-ghost text-lg ${isTransparent ? 'text-yellow-200 hover:bg-green-500' : ' hover:bg-yellow-200 '}`}>Home</Link>
                    <Link to="/about" className={`btn btn-ghost text-lg ${isTransparent ? 'text-yellow-200 hover:bg-green-500' : ' hover:bg-yellow-200 '}`}>About</Link>
                    <Link to="/menu" className={`btn btn-ghost text-lg ${isTransparent ? 'text-yellow-200 hover:bg-green-500' : ' hover:bg-yellow-200 '}`}>Menu</Link>
                    <Link to="/contact" className={`btn btn-ghost text-lg ${isTransparent ? 'text-yellow-200 hover:bg-green-500' : ' hover:bg-yellow-200 '}`}>Contact</Link>
                </div>
            </div>
        </nav >
    )
}

export default Nav
