
import Link from "next/link";
import React from "react";
// import EmpSumItem from "./EmpSumItem";
import Image from "next/image";

export default function EmpSummary({ mode }) {

  return (
    <>
      <div className={`col-span-2 mr-5 rounded-md ${mode === 'dark' ? 'bg-[#1F2A40] text-white' : 'bg-[#E6EFFF] text-[#141B2D]'}`}>
        <div className="flex justify-between p-3">
          <h1 className='text-2xl font-bold'>Employees</h1>
          <Link href="/employee">
            <button className="text-blue-400 hover:text-blue-500 font-medium duration-200">View all</button>
          </Link>
        </div>
        <hr className="bg-[#b7b7b7] h-[1px] mb-4" />
        <EmpSumItem teamName="Engineering" mode={mode} />
        <EmpSumItem teamName="Accounting" mode={mode} />
        <EmpSumItem teamName="Marketing" mode={mode} />
        <EmpSumItem teamName="Marketing" mode={mode} />
      </div>

    </>
  );
}

export const EmpSumItem = ({ teamName, mode }) => {
  return (
    <div className={`flex justify-between items-center ${mode === 'dark' ? 'bg-[#141B2D] text-white' : 'bg-[#FCFCFC] text-[#141B2D]'}  m-2 py-2 rounded-md`}>
      <div className="px-3">
        <h1>{teamName}</h1>
        <p className={`text-sm text-yellow-400 ${mode === 'light' && 'font-semibold'}`}>Team member: 12</p>
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

