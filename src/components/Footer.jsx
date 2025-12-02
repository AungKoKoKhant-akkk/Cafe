import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";




function Footer() {
    return (
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <Link to="/" className="link link-hover">Home</Link>
                <Link to="/about" className="link link-hover">About</Link>
                <Link to="/menu" className="link link-hover">Menu</Link>
                <Link to="/contact" className="link link-hover">Contact</Link>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link to="https://www.facebook.com">
                        <FaFacebookF className='w-6 h-6' />
                    </Link>
                    <Link to="https://www.twitter.com">
                        <FaTwitter className='w-6 h-6' />
                    </Link>
                    <Link to="https://www.instagram.com">
                        <FaInstagram className='w-6 h-6' />
                    </Link>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Beyond Ltd</p>
            </aside>
        </footer>
    )
}

export default Footer
