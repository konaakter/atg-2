import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../Provider/Authprovider';
import { FaUserAlt } from 'react-icons/fa';

const Profile = () => {
    const { users } = useContext(AuthContext)
    console.log(users)

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                   
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                   <div className=' my-5 flex flex-col items-center border space-y-5  '>
                    <div className=' '>
                       <Link > <FaUserAlt className='text-center  text-6xl  text-gray-500'></FaUserAlt></Link>
                       <hr />
                    </div>
                 
                    <h1 className=' text-5xl'>
                        {
                            users
                        }
                    </h1>
                   </div>
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full  bg-sky-600 text-base-content space-y-6">
                    
                        {/* Sidebar content here */}
                        <Link to='profile/upload'><li className=' text-2xl text-white font-bold'>Upload post</li>
                        </Link>
                        <Link to='profile/post'><li className=' text-2xl text-white font-bold'>Your post</li>
                        </Link>
                        <hr />
                        <Link to='/'><li className=' text-2xl text-white font-bold'>Home</li>
                        </Link>
                        <Link to='/login'><li className=' text-2xl text-white font-bold'>Login</li>
                        </Link>
                        <Link to='/signup'><li className=' text-2xl text-white font-bold'>Registation</li>
                        </Link>
                    </ul>



                </div>
            </div>
        </div>
    );
};

export default Profile;