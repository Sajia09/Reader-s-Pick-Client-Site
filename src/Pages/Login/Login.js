import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import img1 from '../../images/Reset password-amico.png';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-around">
            <img style={{ width: '40%' }} src={img1} alt="" />
            <div className="card w-full  max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleSubmit(handleLogin)}>
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
                        <div className="form-control mt-6">
                            <input value='Login' type='submit' className="btn btn-primary" />
                            {loginError && <p className='text-red-600'>{loginError}</p>}
                        </div>
                    </form>
                     <div className="divider">OR</div>
                    <button className='btn btn-primary'>Continue With Google</button>
                    <p>New to Reader's Pick? <Link className='text-secondary' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;