import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import img2 from '../../images/Enter OTP-bro.png';

const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUPError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('')

    const handleSignUp = (data) => {
        setSignUPError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('User Created Successfully.')
                const userInfo = {
                    displayName: data.name,
                    role: data.role
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => console.log(err));
            })
            .catch(error => {
                console.log(error)
                setSignUPError(error.message)
            });
            reset();
    }

    const saveUser = (name, email,role) =>{
        const user ={name, email,role};
        fetch('https://readers-pick-server-site.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            setCreatedUserEmail(email);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse justify-around">
                <img style={{ width: '40%' }} src={img2} alt="" />
                <div className="card w-full  max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", {
                                required: "Name is Required"
                        })} placeholder="name" className="input input-bordered" required />
                         {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", {
                            required: true
                        })} placeholder="email" className="input input-bordered" required />
                         {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                            required: "Password is required",
                            minLength: { value: 6, message: "Password must be 6 characters long" },
                            pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: 'Password must have uppercase, number and special characters' }
                        })} placeholder="password" className="input input-bordered" required />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                            </div>
                            <div className="form-control mt-5">
                                <select {...register("role")} className="select select-bordered w-full max-w-xs">
                                    <option value='buyer'>Buyer</option>
                                    <option value='seller'>Seller</option>
                                </select>
                            </div>
                            <div className="form-control mt-6">
                                <input value='sign up' type='submit' className="btn btn-primary" />
                                {signUpError && <p className='text-red-600'>{signUpError}</p>}
                            </div>
                        </form>
                         <div className="divider">OR</div>
                        <button className='btn btn-primary'>Sign Up With Google</button>
                        <p>Already have an account? <Link className='text-secondary' to="/login">Please Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;