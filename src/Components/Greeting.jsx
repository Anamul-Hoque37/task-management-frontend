import React from 'react';
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import auth from '../../firebase.config';

const Greeting = () => {
    const user = auth.currentUser;
    console.log(user)
    const navigate = useNavigate();
    return (
        <div className='min-h-screen'>
            <div className="h-screen flex flex-col items-center px-4 sm:px-6 md:px-10 lg:px-14 justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                {/* Animated Title */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl font-extrabold mb-4"
                >
                    Welcome to Task Management 🚀
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-lg md:text-xl text-gray-200 max-w-md text-center"
                >
                    Boost your productivity and manage your tasks efficiently with ease!
                </motion.p>

                {/* Get Started Button */}
                {user?.email ?
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/tasks")}
                        className="mt-6 px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded-full shadow-lg hover:bg-fuchsia-800 transition">
                        Get Started
                    </motion.button>
                    :
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/")}
                        className="mt-6 px-6 py-3 bg-fuchsia-600 text-white font-semibold rounded-full shadow-lg hover:bg-fuchsia-800 transition"
                    >
                        Sign In First
                    </motion.button>
                }


                {/* Decorative Background Elements */}
                <div className="absolute top-10 left-10 w-16 h-16 bg-white opacity-20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full blur-3xl"></div>
            </div>
        </div>
    );
};

export default Greeting;