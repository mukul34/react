import React from 'react'
import image from "../images/Netflix_Logo_RGB.png";
import { signOutUser } from "../utils/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../utils/userSlice';

const Header = ({ signout }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const signOutUserAndNaviagte = async () => {
        await signOutUser();
        dispatch(deleteUser());
        navigate("/");
    }
    return (
        <div className='absolute px-6 py-2 bg-gradient-to-b flex justify-between from-black border-none w-full z-10'>
            <img className='w-40' alt="logo" src={image} />
            {
                signout &&
                <div>
                    <button onClick={signOutUserAndNaviagte} className='p-4 my-4 border-black w-full bg-red-700 text-white font-bold rounded-lg'>Sign out</button>
                </div>
            }
        </div>

    )
};

export default Header;