import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';



const About = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl text-center flex flex-col gap-2">
                <h2 className="h2 text-orange-500 text-2xl font-bold">About Me</h2>

                <p className="ephesis-regular text-5xl font-bold mt-4 bg-gradient-to-r from-green-600 to-slate-900 bg-clip-text text-transparent overflow-hidden">
                    I'm Aman Malik
                </p>


                <p className="mt-4 text-lg text-gray-600">
                    A passionate <span className="text-orange-500 font-semibold">Full-Stack Web Developer</span>
                    specializing in the <span className="text-orange-500 font-semibold">MERN stack</span>.
                    I love building scalable applications and continuously enhancing my skills.
                </p>

                <div className="mt-6 text-gray-700 text-lg space-y-4">
                    {/* <p>💻 <span className="font-semibold">front-end based projects for enhancing my </span>, integrating **PyQt6, camera input, and databases**.</p> */}
                    <p>📖 Currently working on a  <span className="font-semibold">Urdu-to-English dictionary website</span> with database automation.</p>
                    <p>🚀 Future goals: Creating **AI-driven products and cryptocurrency-based projects**.</p>


                </div>

                {/* my oother lsited projects  */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-2xl font-bold border-b-2 text-orange-500">Projects</h2>
                    <NavLink
                        target='__blank'
                        to={'https://portfolio-two-nu-45.vercel.app/'}
                        className={'text-gray-700 hover:text-blue-700'}
                    >https://portfolio-two-nu-45.vercel.app/</NavLink>

                    <NavLink
                        target='__blank'
                        to={'https://coffee-app-ochre.vercel.app/'}
                        className={'text-gray-700 hover:text-blue-700'}
                    >https://coffee-app-ochre.vercel.app/</NavLink>

                    <NavLink
                        target='__blank'
                        to={'https://virtualr-navy.vercel.app/'}
                        className={'text-gray-700 hover:text-blue-700'}
                    >https://virtualr-navy.vercel.app/</NavLink>
                </div>
            </div>
        </div>
    );
};

export default About;
