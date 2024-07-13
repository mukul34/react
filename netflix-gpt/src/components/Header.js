import React from 'react'
import image from "../images/Netflix_Logo_RGB.png";

const Header = () => {
    return (
        <div className='absolute px-6 py-2 bg-gradient-to-b from-black border-none w-full z-10'>
            <img className='w-40' alt="logo" src={image} />
        </div>
    )
};

export default Header;