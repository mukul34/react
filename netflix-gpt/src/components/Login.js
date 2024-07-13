import React, { useState } from 'react'
import { BANNER_IMAGE } from '../constants';
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img alt="" src={BANNER_IMAGE} />
            </div>
            <form className='w-1/4 absolute p-10 my-36 mx-auto right-0 left-0 bg-black bg-opacity-60 text-white'>
                <h1 className='font-bold py-4 text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm && <input type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-600 rounded-lg' /> }
                <input type="text" placeholder='Email address' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />
                <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-slate-600 rounded-lg'/>
                <button className='p-4 my-4 border-black w-full bg-red-700 text-white font-bold rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign Up" : "Already a user? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login;