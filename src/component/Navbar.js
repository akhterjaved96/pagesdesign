import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className='upperhead'>
                <a href="" className='icon'><i class="far fa-envelope"></i>info@bytequests.com</a>
                <a href="" className='icon'><i class="fas fa-phone"></i>+91 9711999770, +1830-880-3355</a>
            </div>
            <div className='container'>
                <a href='#' className='logo'>LOGO</a>
                <nav className='navbar'>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li>
                        <li><Link to="/services">Servises</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contactus" className='contact'>Contact Us</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navbar
