import Link from 'next/link'
import React from 'react'
import EmpDataItem from './EmpDataItem'

export default function EmpData({ mode }) {
    return (
        <div className='grid grid-cols-3 gap-3 px-5 my-3'>
            <div className={`px-5 rounded-lg  ${mode === 'dark' ? 'bg-[#1F2A40] text-white' : 'bg-[#E6EFFF] text-[#141B2D]'} py-7 w-full flex items-center`}>
                <div className="mr-5 w-[2.5px] h-[80px] bg-orange-400"></div>
                <div className='w-full'>
                    <h1 className={`text-yellow-400 text-sm pb-4 ${mode === 'light' && 'font-semibold'}`}>Employees On Time Today</h1>
                    <div className="flex justify-between items-center">
                        <p className='text-3xl font-semibold'>35</p>
                        <Link href="/employee">
                            <button className="text-blue-400 hover:text-blue-500 font-medium duration-200">View Employees</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`px-5 rounded-lg  ${mode === 'dark' ? 'bg-[#1F2A40] text-white' : 'bg-[#E6EFFF] text-[#141B2D]'} py-3 w-full flex items-center`}>
                <div className="mr-5 w-[2.5px] h-[80px] bg-teal-500"></div>
                <div className='w-full'>
                    <h1 className={`text-yellow-400 text-sm pb-4 ${mode === 'light' && 'font-semibold'}`}>Late Arrivals Today</h1>
                    <div className="flex justify-between items-center">
                        <p className='text-3xl font-semibold'>3</p>
                        <Link href="/employee">
                            <button className="text-blue-400 hover:text-blue-500 font-medium duration-200">View Employees</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`px-5 rounded-lg  ${mode === 'dark' ? 'bg-[#1F2A40] text-white' : 'bg-[#E6EFFF] text-[#141B2D]'} py-3 w-full flex items-center`}>
                <div className="mr-5 w-[2.5px] h-[80px] bg-pink-400"></div>
                <div className='w-full'>
                    <h1 className={`text-yellow-400 text-sm pb-4 ${mode === 'light' && 'font-semibold'}`}>Employees On Leave Today</h1>
                    <div className="flex justify-between items-center">
                        <p className='text-3xl font-semibold'>5</p>
                        <Link href="/employee">
                            <button className="text-blue-400 hover:text-blue-500 font-medium duration-200">View Employees</button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* <EmpDataItem mode={mode} title="Employees On Time Today" number="35" /> */}


            {/* <div className="flex items-center text-white bg-[#1F2A40] py-3">
                <div className="mx-5 w-[2px] h-[80px] bg-teal-500"></div>
                <div className="">
                    <h1 className='text-yellow-400 text-sm pb-4'>Late Arrivals Today</h1>
                    <div className="flex justify-between items-center">
                        <p className='text-4xl font-semibold'>10</p>
                        <p className='text-sky-500 text-sm'>View Employees</p>
                    </div>
                </div>
            </div>
            <div className="flex text-white bg-[#1F2A40] py-3">
                <div className="mx-5 w-[2px] h-[80px] bg-teal-500"></div>
                <div className="">
                    <h1 className='text-yellow-400 text-sm pb-4'>Employees On Leave Today</h1>
                    <div className="flex justify-between items-center">
                        <p className='text-4xl font-semibold'>10</p>
                        <p className='text-sky-500 text-sm'>View Employees</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
