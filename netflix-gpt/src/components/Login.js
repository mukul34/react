import React, { useRef, useState } from 'react'
import { BANNER_IMAGE } from '../constants';
import Header from './Header';
import { validate } from '../utils/validations';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessages, setErrorMessages] = useState({});
    const email = useRef("");
    const password = useRef("");

    const toggleForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleFormSubmission = () => {
        //validate the form data
        const validationRes = validate({ email: email.current.value, password: password.current.value });
        console.log(validationRes);
        setErrorMessages(validationRes);
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img alt="" src={BANNER_IMAGE} />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-1/4 absolute p-10 my-36 mx-auto right-0 left-0 bg-black bg-opacity-60 text-white'>
                <h1 className='font-bold py-4 text-3xl'>{isSignInForm ? "Sign Innnnnn" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder='Name' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />}
                <input ref={email} type="text" placeholder='Email address' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />
                <p className='text-red-600 font-bold'>{errorMessages?.email?.errorMessage}</p>
                <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-slate-600 rounded-lg' />
                <p className='text-red-600'>{errorMessages?.password?.errorMessage}</p>
                <button onClick={handleFormSubmission} className='p-4 my-4 border-black w-full bg-red-700 text-white font-bold rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 cursor-pointer' onClick={toggleForm}>{isSignInForm ? "New to Netflix? Sign Up" : "Already a user? Sign In"}</p>
            </form>
        </div>
    )
}

export default Login;