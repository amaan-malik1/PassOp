import React, { useEffect } from 'react';
import { useFormAction } from 'react-router-dom';
import { MdAddCircleOutline } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { useState, useRef } from 'react';



const Manager = () => {
  // const showPassword = (e) => {
  //   alert('Your passwrod is: '+ e.target.value.password);
  // }

  const [form, setForm] = useState({ site: "", uName: "", password: "" })
  const [passwordArray, setPasswordArray] = useState([]);


  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let passwordArray;
    if (passwords) {  // ✅ Check if passwords is defined before parsing
      passwordArray = JSON.parse(passwords);
      setPasswordArray(passwordArray);
    } else {
      passwordArray = [];
    }
  }, []);


  const savePsw = (e) => {

    console.log(form);
    setPasswordArray([...passwordArray, form])
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
    console.log([...passwordArray, form]);

  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }


  return (
    <div>
      <div className="manager-container flex flex-col p-10 gap-5 ">

        {/* logo section  */}
        <div className="logo flex flex-col items-center justify-center gap-1 font-bold">
          <h2 className="text-4xl text-green-500 overflow-hidden">
            <span className="text-black text-3xl">&lt;</span>

            Pass
            <span className="text-black">OP/</span>
            <span className="text-black text-3xl">&gt;</span>

          </h2>
          <p className="text-gray-700 text-2xl">Your Own password manager</p>
        </div>

        {/* manager section for passwrod and web url  */}
        <div className="flex flex-col items-center gap-3 w-full">

          {/* input fiel 1 */}
          <div className="get-url w-[100%] mx-auto my-2  flex">

            <input required value={form.site} name='site' onChange={handleChange} type="text" placeholder='Enter website url' className="focus:shadow-2xl focus:outline-none transition-all duration-300 border border-black px-5 py-3 top-2 bg-transparent  mx-auto w-[70%] rounded-full" />

          </div>

          {/* input fiel 2 */}
          <div className="input-field-div uName-psw flex">

            {/* username div  */}
            <div>
              <input required value={form.uName} name='uName' onChange={handleChange} type="text" placeholder='Enter your userame' className="focus:shadow-2xl focus:outline-none transition-all duration-300 border border-black px-5 py-3 top-2 bg-transparent rounded-full" />
            </div>

            {/* password div  */}
            <div className="relative">
              <input required value={form.password} name='password' onChange={handleChange} type="password" placeholder='password' className="focus:shadow-2xl focus:outline-none transition-all duration-300 border border-black px-5 py-3 top-2 bg-transparent mx-2 rounded-full" />
              {/* <span className="cursor-pointer" onClick={showPassword}><FaEye /></span> */}
            </div>
          </div>

          {/* btn for adding password  */}
          <div className="submit-btn flex justify-center ">
            <button id='btn-submit' type='submit' onClick={savePsw} className=" flex justify-center items-center gap-2 border border-black px-5 py-2 bg-green-600 text-white transition-all duration-200 rounded-full hover:bg-green-400 hover:text-black border-none overflow-x-auto overflow-y-auto">
              <MdAddCircleOutline />

              Add Password

            </button>
          </div>

        </div>


        {/* saving the data into local storage  */}
        <div className="passwords flex flex-col gap-5">
          <h2 className="text-3xl font-semibold py-2">Your passwords</h2>
          {passwordArray.length === 0 && <div>No password to show</div>}
          {passwordArray.length != 0 && (<table className="table-auto w-full rounded-md overflow-scroll">
            <thead className="bg-green-800 text-white">
              <tr>
                <th className='text-wrap'>URl</th>
                <th className='text-wrap'>Username</th>
                <th className='text-wrap'>Password</th>
              </tr>
            </thead>
            <tbody className="bg-green-100">
              {passwordArray.map((item, index) => {
                return <tr key={index}>
                  <td className="py-2 border-white text-center w-32 text-clip"><a href={item.site}>{item.site}</a></td>
                  <td className="py-2 border-white text-center w-32 text-clip">{item.uName}</td>
                  <td className="py-2 border-white text-center w-32 text-clip">{item.password}</td>
                </tr>
              })}
            </tbody>
          </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Manager