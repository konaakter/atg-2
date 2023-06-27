import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/Authprovider';
import Swal from 'sweetalert2';
import { FaComment, FaEllipsisV, FaEye, FaHeart, FaUserAlt } from 'react-icons/fa';
import Update from './Update';


const Yourpostcard = ({ postget, refetch}) => {
    const { users } = useContext(AuthContext)

    const [uapdateInfo, setuapdateInfo] = useState({
        _id: postget._id,
        name: postget.users,
        details:postget.details,
        header: postget.header
    })

    const [isOpen, setIsOpen] = useState(false)
    const closeModal = () => {
        setIsOpen(false)
    }

    const handleremove = postget => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://atg-task-2-server.vercel.app/sletedpost/${postget._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <div className=' flex justify-between'>

                                <div className=' flex  items-center gap-2'>
                                    <div className=' border rounded-full p-3 bg-white'>
                                        <FaUserAlt className=' text-3xl text-gray-500'></FaUserAlt>
                                    </div>
                                    <div>
                                        <h1>{postget.users}</h1>
                                    </div>
                                </div>
                                <div>
                                    <details className="dropdown mb-32">
                                        <summary className="m-1 "> <FaEllipsisV></FaEllipsisV></summary>
                                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                                           <button  onClick={() => handleremove(postget)}><li><a>Delete</a></li></button> 
                                           <button onClick={() => setIsOpen(true)}><li><a>Update</a></li></button>
                                            
                                        </ul>
                                    </details>
                                   
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

                                <FaHeart ></FaHeart>


                                <FaComment></FaComment>
                                <FaEye></FaEye>
                            </div>
                        </div>
                    </div>

            <Update
              uapdateInfo={uapdateInfo}
              isOpen={isOpen}
              closeModal={closeModal}
              refetch={refetch}
            ></Update>
        </div>
    );
};

export default Yourpostcard;