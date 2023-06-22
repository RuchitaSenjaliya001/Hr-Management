import Link from 'next/link'
import React from 'react'

export default function EmpData() {
    return (
        <div className='grid grid-cols-3 gap-5 px-5'>
            <div className="px-5 rounded-lg text-white bg-[#1F2A40] py-3 w-full">
                {/* <div className="mx-5 w-[2px] h-[80px] bg-teal-500"></div> */}
                {/* <div> */}
                <h1 className='text-yellow-400 text-sm pb-4'>Employees On Time Today</h1>
                <div className="flex justify-between items-center">
                    <p className='text-4xl font-semibold'>35</p>
                    <Link href="/employee">
                        <button className="text-blue-400 hover:text-blue-500 font-medium duration-200">View Employees</button>
                    </Link>
                </div>
                {/* </div> */}
            </div>
            <div className="px-5 rounded-lg text-white bg-[#1F2A40] py-3 w-full">
                {/* <div className="mx-5 w-[2px] h-[80px] bg-teal-500"></div> */}
                {/* <div> */}
                <h1 className='text-yellow-400 text-sm pb-4'>Late Arrivals Today</h1>
                <div className="flex justify-between items-center">
                    <p className='text-4xl font-semibold'>3</p>
                    <Link href="/employee">
                        <button className="text-blue-400 hover:text-blue-500 font-medium duration-200">View Employees</button>
                    </Link>
                </div>
                {/* </div> */}
            </div>
            <div className="px-5 rounded-lg text-white bg-[#1F2A40] py-3 w-full">
                {/* <div className="mx-5 w-[2px] h-[80px] bg-teal-500"></div> */}
                {/* <div> */}
                <h1 className='text-yellow-400 text-sm pb-4'>Employees On Leave Today</h1>
                <div className="flex justify-between items-center">
                    <p className='text-4xl font-semibold'>5</p>
                    <Link href="/employee">
                        <button className="text-blue-400 hover:text-blue-500 font-medium duration-200">View Employees</button>
                    </Link>
                </div>
                {/* </div> */}
            </div>
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
