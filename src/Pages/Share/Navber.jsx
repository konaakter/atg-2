import React, { useContext, useEffect, useState } from 'react';
import logo1 from '../../img/icons8-reddit-48.png'
import { Link } from 'react-router-dom';
import { FaBeer, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../Provider/Authprovider';


const Navber = () => {
    const { users } = useContext(AuthContext)

    return (
        <div>
            <div className=' bg-sky-600'>
                <div className="navbar text-white  w-10/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-sky-600 rounded-box w-52">
                           
                            <li><Link>Home</Link></li>
                            <li>
                                <Link> contract</Link>
                            </li>
                            <li><Link>About</Link></li>
                        
                            </ul>
                        </div>
                        <div className= 'flex items-center '>
                            <img src={logo1} alt="" />
                            <h1 className=' text-3xl'>ikriki</h1>
                           
                        </div>

                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link>Home</Link></li>
                            <li>
                                <Link> contract</Link>
                            </li>
                            <li><Link>About</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end space-x-2">
                        {
                             users && <div className=' border rounded-full p-3 bg-white'>
                             <Link to='profile'> <FaUserAlt className=' text-3xl text-gray-500'></FaUserAlt></Link>
                          </div>
                        }
                        
                    {

                        users ? <Link to='/login'><a className="btn">Logout</a></Link> : <Link to='/login'><a className="btn">Login</a></Link>
                    }
                        
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navber;