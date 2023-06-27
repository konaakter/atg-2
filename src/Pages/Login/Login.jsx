//import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/Authprovider';


const Login = () => {
    const { signIn } = useContext(AuthContext)
    const [error, seterror] = useState('')
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        const { name, password } = data;
        const addduser = { password: password, name: name }
        console.log(addduser)
        signIn(addduser)
        .then(result => {
            console.log(result);
            reset();
           
           

        })
        .catch(error => console.log(error))
       


    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">


                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">name is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"  {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className=' text-center'><small>Already have an account <Link to="/singup" className=' text-primary underline'>Login</Link></small></p>
                        <p className=' text-xl text-red-800 text-center'>{error}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

/*
 fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addduser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.message == 'coorrect password'){
                    seterror('')
                    reset()
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'user has been successfully added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                else{
                    seterror('incorret password')

                }
            

            })
            */


/*
 axios.post('http://localhost:5000/login', addduser)
.then(res => {
console.log(res.data)
 
})*/






/*

 fetch('http://localhost:5000/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addduser)
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("username", data.iteam.name)
                console.log(data)



            })
*/