import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import '../App.css';

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center">
                <h2 className="h2 text-orange-500 text-2xl font-bold">Lets Connect</h2>


                <p className="mt-4 text-lg text-gray-600">
                    Whether it’s about <span className="text-green-800 text-xl font-bold poppins-regular">MERN stack</span> development, or crypto discussions, I’d love to connect!
                </p>


                <div className="mt-6 space-y-4 text-lg">
                    <p className="flex items-center justify-center space-x-2 text-gray-700">
                        <FaEnvelope className="text-orange-500" />
                        <span>ahmadamaan363@gmail.com</span>
                    </p>
                    <p className="flex items-center justify-center space-x-2 text-gray-700">
                        <FaGithub className="text-blue-500" />
                        <a target='__blank' href="https://github.com/amaan-malik1" className="hover:underline hover:text-blue-700">https://github.com/amaan-malik1</a>
                    </p>
                    <p className="flex items-center justify-center space-x-2 text-gray-700">
                        <FaLinkedin className="text-blue-700" />
                        <a target='__blank' href="https://www.linkedin.com/in/amaan-malik-36753527b/" className="hover:underline hover:text-blue-700">https://www.linkedin.com/in/amaan-malik</a>
                    </p>
                    <p className="flex items-center justify-center space-x-2 text-gray-700">
                        <FaTwitter className="text-blue-400" />
                        <a target='__blank' href="https://twitter.com/yourtwitter" className="hover:underline hover:text-blue-700">@yourtwitter</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
