import Link from 'next/link'
import React from 'react'

export default function EmpDataItem({ mode, title, number }) {
    return (
        <div
            className={`px-5 rounded-lg  ${mode === "dark"
                ? "bg-[#1F2A40] text-white"
                : "bg-[#E6EFFF] text-[#141B2D]"
                } py-3  flex items-center col-span-2`}
        >
            <div className="mr-5 w-[3px] h-[80px] bg-teal-500"></div>
            <div className="w-full">
                <h1
                    className={`text-yellow-400 text-sm pb-4 ${mode === "light" && "font-semibold"
                        }`}
                >
                    {title}
                </h1>
                <div className="flex justify-between items-center">
                    <p className="text-3xl font-semibold">{number}</p>
                    <Link href="/employee">
                        <button className="text-blue-400 hover:text-blue-500 font-medium duration-200">
                            View Employees
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
