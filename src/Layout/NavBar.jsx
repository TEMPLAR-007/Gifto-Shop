import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content px-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl" to="/">GifTo-Shop</Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>
                </div>

                <div className="tabs">
                    <a className="indicator tab">
                        <FiShoppingCart className="text-xl" />
                        <span className="indicator-item right-3 badge">8</span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default NavBar;