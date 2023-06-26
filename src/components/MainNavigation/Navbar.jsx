import React from 'react'
import { BsFillSunFill } from 'react-icons/bs'
import { BsBellFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'
import { useContext } from 'react'
import ModeContext from '@/context/modeContext'

export default function Navbar() {
    const { mode, toggleMode } = useContext(ModeContext)
    return (
        <div className={`${mode === 'dark' ? 'bg-[#141B2D] text-white' : 'bg-[#FCFCFC] text-black'} flex justify-between items-center w-full h-[65px]`}>
            <input
                type="text"
                id="simple-search"
                className={`${mode === 'dark' ? 'bg-[#374151] text-gray-900' : 'bg-gray-300 text-black'} mx-4  text-sm rounded-lg  block  px-5 py-2`}
                placeholder="Search"
            />
            <div className="flex items-center space-x-6 px-5">
                <div className={`${mode === 'dark' ? 'bg-[#141B2D] hover:bg-gray-600' : 'bg-[#FCFCFC] hover:bg-gray-300'} rounded-full p-2 duration-300 hover:rounded-full hover:p-2`}>
                    <BsFillSunFill size={20} onClick={toggleMode} />
                </div>
                <div className={`${mode === 'dark' ? 'bg-[#141B2D] hover:bg-gray-600' : 'bg-[#fff] hover:bg-gray-300'} rounded-full p-2 duration-300 hover:rounded-full hover:p-2`}>
                    <BsBellFill size={19} />
                </div>
                <div className={`${mode === 'dark' ? 'bg-[#141B2D] hover:bg-gray-600' : 'bg-[#fff] hover:bg-gray-300'} rounded-full p-2 duration-300 hover:rounded-full hover:p-2`}>
                    <AiFillSetting size={20} />
                </div>

            </div>
            {/* <div className="w-1/4 px-5 flex flex-col justify-center">
                <p className='text-sm text-[#b2b2b2] '>Your Organization</p>
                <h1 className='text-lg'>FOUR-EVER Technology</h1>
            </div>
            <div className="w-[2px] bg-[#b2b2b2]"></div>
            <div className="w-3/4 flex justify-between items-center px-5">
                <div className="">Search</div>
                <div className="">Profile</div>
            </div> */}
        </div>
    )
}
