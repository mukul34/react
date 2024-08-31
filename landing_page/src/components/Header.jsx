const Header = () => {
    return <nav className='header'>
        <div className='logo'>
            <img src="/images/brand_logo.png" alt="" srcset="" />
        </div>

        <ul className='menu'>
            <li className='item'>Menu</li>
            <li className='item'>Location</li>
            <li className='item'>About</li>
            <li className='item'>Contact</li>
        </ul>

        <button className='button'>Login</button>
    </nav>
};

export default Header;