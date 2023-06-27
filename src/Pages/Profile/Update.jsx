import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import Swal from 'sweetalert2';


const Update = ({ uapdateInfo, isOpen, closeModal, refetch }) => {

    

    const handleaddupdate = event => {
       

        event.preventDefault();

        const form = event.target;

        const header = form.header?.value;

       
        const details = form.details?.value;
        
        const addpost = {  details,  header}
        console.log(addpost)


        fetch(`https://atg-task-2-server.vercel.app/updatepost/${uapdateInfo._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addpost)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch()
                
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'information hass been change!' ,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
       
    }
    
    return (
        <div>
            <div>


                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as='div' className='relative z-10' onClose={closeModal}>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <div className='fixed inset-0 bg-black bg-opacity-25' />
                        </Transition.Child>

                        <div className='fixed inset-0 overflow-y-auto'>
                            <div className='flex min-h-full items-center justify-center p-4 text-center'>
                                <Transition.Child
                                    as={Fragment}
                                    enter='ease-out duration-300'
                                    enterFrom='opacity-0 scale-95'
                                    enterTo='opacity-100 scale-100'
                                    leave='ease-in duration-200'
                                    leaveFrom='opacity-100 scale-100'
                                    leaveTo='opacity-0 scale-95'
                                >
                                    <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                        <Dialog.Title
                                            as='h3'
                                            className='text-lg font-medium text-center leading-6 text-gray-900 uppercase'
                                        >
                                            Uapdate your information
                                        </Dialog.Title>



                                        <div className='border-4 border-slate-200 mt-2 '>
                                            <div className='    transition-colors duration-200 delay-500 '>
                                                <form onSubmit={handleaddupdate} className=' p-5'>

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

                                        <hr className='mt-8 ' />

                                        <div className='flex mt-2 justify-around'>
                                            <button
                                                type='submit'
                                                className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                                onClick={closeModal}
                                            >
                                                Cancel
                                            </button>




                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    );
};

export default Update;