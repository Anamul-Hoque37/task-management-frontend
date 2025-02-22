import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-slate-300 text-base-content p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Task Management Authorization</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;