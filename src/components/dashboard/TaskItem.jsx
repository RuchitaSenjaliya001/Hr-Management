import React from 'react'
import { FiClock } from 'react-icons/fi'

export default function TaskItem() {
    return (
        <div className="flex bg-slate-100 my-2 rounded-md py-3 shadow-md px-4 items-center w-full justify-between space-x-5">
            <div className="flex space-x-7">
                <div className="flex items-center space-x-3">
                    <FiClock />
                    <p>07:00 - 07:45 AM</p>
                </div>
                <p>Interview with candidate</p>
            </div>
            <input
                type="checkbox"
                value=""
                name="check"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
            />
        </div>
    )
}
