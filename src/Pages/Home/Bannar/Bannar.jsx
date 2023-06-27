import React, { useContext, useState } from 'react';
import './Bannar.css'
import { useQuery } from '@tanstack/react-query';
import { FaComment, FaEye, FaHeart, FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Provider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handler } from 'daisyui';

const Bannar = () => {
    const { users } = useContext(AuthContext)
    const [alart, setalart] = useState(false)
    if (alart) {
        toast("Fevorite!")


    }

    const { refetch, data: postget = [] } = useQuery({
        queryKey: ['postget '],
        queryFn: async () => {
            const response = await fetch(`https://atg-task-2-server.vercel.app/postget`)
            return response.json()

        },


    })


    
    return (
        <div>
            <div className=' bg-slate-200 pt-11 pb-10'>
                <div className=' bg-white w-11/12 mx-auto  lg:w-10/12 shadow-2xl  '>

                    <div className=' grid lg:grid-cols-2  gap-4 py-24 ps-6'>
                        {
                            postget.map(postget =>

                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <div className="card-body">
                                        <div className=' flex  items-center gap-2'>
                                            <div className=' border rounded-full p-3 bg-white'>
                                                <FaUserAlt className=' text-3xl text-gray-500'></FaUserAlt>
                                            </div>
                                            <div>
                                                <h1>{postget.users}</h1>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="card-title">{postget.header}</h2>
                                            <p>{postget.details}</p>
                                        </div>

                                        <div className=' flex'>
                                            <p>1</p>
                                            <p>1</p>
                                            <p>1</p>
                                        </div>
                                        <hr />
                                        <div className=' flex gap-24'>
                                            <button onClick={() => setalart(!alart)} className={` text-1xl ${alart ? 'text-red-500' : ''}`}>
                                                <FaHeart ></FaHeart>
                                                <ToastContainer />
                                            </button>

                                            <FaComment></FaComment>
                                            <FaEye></FaEye>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Bannar;