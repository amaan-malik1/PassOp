import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import logoImg from './assets/'



const Navbar = () => {
  return (
    <div>

      {/* full navbar section */}
      <nav className="nav-container flex justify-around items-center p-5 bg-slate-800 gap-10">

        {/* logo */}
        <div className="logo flex items-center justify-center gap-1 font-bold">
          <h2 className="text-2xl text-white overflow-hidden">
            <span className="text-green-500 text-3xl">&lt;</span>

            Pass
            <span className="text-green-500">OP/</span>
            <span className="text-green-500 text-3xl">&gt;</span>

          </h2>
        </div>

        {/* menu  */}
        <div className="menu-bar">
          <ul className="flex gap-7 text-xl font-semibold text-white">
            <li><NavLink className={'hover:text-green-500'} to={'/'}>Home</NavLink></li>
            <li><NavLink className={'hover:text-green-500'} to={'/about'}>About</NavLink></li>
            <li><NavLink className={'hover:text-green-500'} to={'/contact'}>Contacts Us</NavLink></li>
          </ul>
        </div>

        {/* socia; link about my profiles  */}
        <div className="socialLink flex gap-3 overflow-hidden">
          <NavLink
            className={"NavLink bg-green-600 px-2 rounded-lg hover:scale-110 transition-all duration-300 flex gap-1 items-center"}
            to={'https://github.com/amaan-malik1'} target='__blank'>
            <FaGithub className="text-3xl invert-[1]" />
            <span className="text-white font-semibold">GitHub</span>
          </NavLink>
          <NavLink
            className={"NavLink bg-green-600 p-2 rounded-lg hover:scale-110 transition-all duration-300 flex gap-1 items-center"}
            to={'https://www.linkedin.com/in/amaan-malik-36753527b/'} target='__blank'>
            <FaLinkedin className="text-3xl invert-[1]" />
            <span className="text-white font-semibold">LinkedIn</span>
          </NavLink>
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar