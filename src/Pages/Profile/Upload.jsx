import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/Authprovider';

const Upload = () => {
    const { users } = useContext(AuthContext)
    console.log(users)


    const handleaddtoy = event => {
       

        event.preventDefault();

        const form = event.target;

        const header = form.header?.value;

       
        const details = form.details?.value;
        
        const addpost = {  details,  header,  users}
        console.log(addpost)


        fetch('https://atg-task-2-server.vercel.app/datapost', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addpost)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your Product has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
       
    }




   

    return (
        <div>
            <div className=' w-1/2 mx-auto mt-24  mb-12'>
                <h1 className="text-3xl uppercase text-center text-sky-600 py-4">Add class </h1>
                <div className='border-2 border-slate-500  p-1'>
                    <div className='    transition-colors duration-200 delay-500 p-10'>


                        <form onSubmit={handleaddtoy}>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Header</span>
                                </label>
                                <label className="">
                                    <input type="text" name="header" placeholder="Header" className="input input-bordered w-full" />
                                </label>
                            </div>




                            <div className="form-control w-full mt-4">

                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="">
                                    <textarea rows='60' type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className=' w-full  bg-sky-600 rounded-3xl px-5 py-2 border-2
                         mt-8 text-white ' type="submit" value="Sign Up" />
                            </div>
                        </form>



                    </div>
                </div>

            </div >
        </div>
    );
};

export default Upload;


/*
 <div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Header</span>
                                    </label>
                                    <input type="name"  {...register("header", { required: true })} name="name" placeholder="name" className="input input-bordered" />

                                </div>
                                


                            </div>
                            <div className="form-control mt-6">
                                <input className=' w-full  bg-sky-600 rounded-3xl px-5 py-2 border-2
                         mt-8 text-white ' type="submit" value="Sign Up" />
                            </div>
*/