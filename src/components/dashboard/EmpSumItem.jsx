import Image from 'next/image'
import React from 'react'

export default function EmpSumItem({ teamName }) {
    return (
        <div className="flex justify-between items-center bg-[#141B2D] text-white m-2 py-2 rounded-md">
            <div className="px-3">
                <h1>{teamName}</h1>
                <p className='text-sm text-yellow-300'>Team member: 12</p>
            </div>
            <div className="flex -space-x-4">
                <Image
                    src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=740"
                    className="w-10 h-10 border-2 border-white rounded-full"
                    width={35}
                    height={35}
                    alt="Avatar"
                />
                <Image
                    src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=740"
                    className="w-10 h-10 border-2 border-white rounded-full"
                    width={35}
                    height={35}
                    alt="Avatar"
                />
                <Image
                    src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=740"
                    className="w-10 h-10 border-2 border-white rounded-full"
                    width={35}
                    height={35}
                    alt="Avatar"
                />
                <Image
                    src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=740"
                    className="w-10 h-10 border-2 border-white rounded-full"
                    width={35}
                    height={35}
                    alt="Avatar"
                />
            </div>
        </div>
    )
}
