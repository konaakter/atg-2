import React, { useContext } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import { useQuery } from '@tanstack/react-query';
import { FaComment, FaEye, FaHeart, FaUserAlt } from 'react-icons/fa';

const Yorpost = () => {

    const { users } = useContext(AuthContext)

    const { refetch, data: postget = [] } = useQuery({
        queryKey: ['postget '],
        queryFn: async () => {
            const response = await fetch(`https://atg-task-2-server.vercel.app/postget?users=${users}`)
            return response.json()

        },

    })
    return (
        <div className=' grid grid-cols-3 w-8/12 my-24'>
            {
                postget.map(postget =>

                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className=' flex  items-center gap-2'>
                                <div className=' border rounded-full p-3 bg-white'>
                                    <FaUserAlt className=' text-3xl text-gray-500'></FaUserAlt>
                                </div>
                                <div>
                                    <h1>{users}</h1>
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
                                <FaHeart></FaHeart>
                                <FaComment></FaComment>
                                <FaEye></FaEye>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>
    );
};

export default Yorpost;