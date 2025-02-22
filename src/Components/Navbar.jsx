import React, { useEffect, useState } from 'react';
import SocialLogin from '../Authentication/SocialLogin';
import { MdDarkMode } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import auth from '../../firebase.config';

const Navbar = () => {
    const user = auth.currentUser;
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setIsDarkMode(prefersDark);
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    }, []);
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    };
    return (
        <div>
            <div className="navbar bg-slate-300">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Task Management</a>
                </div>
                <div>
                    <div className="flex-none">
                        <label className="swap swap-rotate">
                            {/* This checkbox toggles the dark mode */}
                            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
                            {/* Light mode and Dark Mode icon */}
                            <div className='text-5xl items-center text-center md:pr-4'>
                                {isDarkMode ? <CiLight /> : <MdDarkMode />}
                            </div>
                        </label>
                    </div>
                    <div className="flex-none">
                        {user?.email ? <div className='h-14 w-14 border-2 border-white rounded-full'><img className='w-full h-full rounded-full' src={user.photoURL} alt="" /></div>
                        : 
                        <ul className="menu menu-horizontal px-1">
                            <li><div className='p-0'>
                                <SocialLogin></SocialLogin>
                            </div></li>
                        </ul>}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;