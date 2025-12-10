import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GiCoffeeCup } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import useScrollPosition from '../CustomHooks/useScrollPosition';
import { useCart } from '../context/CartContext';  // ← ADD THIS


function Nav() {
    const { getCartTotal } = useCart();  // ← GET cart function
    const { itemCount } = getCartTotal();  // ← GET total items in cart

    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const scrolled = useScrollPosition(50);
    const isTransparent = isHomePage && !scrolled;

    return (
        <nav className={`navbar p-4 fixed top-0 left-0 right-0 z-50 transition-shadow ${isTransparent ? 'bg-transparent shadow-none' : 'bg-yellow-100 shadow-md'}`}>
            <div className="container mx-auto   flex justify-between items-center">
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
                        <Link to="/cart" className={`${isTransparent ? 'text-yellow-200 ' : '  '} indicator mt-2`}>
                            {/* Show badge only if cart has items */}
                            {itemCount > 0 && (
                                <span className='indicator-item badge badge-secondary w-4 h-4'>{itemCount}</span>
                            )}
                            <FaShoppingCart className='w-6 h-6' />
                        </Link>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Nav