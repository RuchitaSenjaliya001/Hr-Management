
import Link from "next/link";
import React from "react";
import EmpSumItem from "./EmpSumItem";

export default function EmpSummary() {

  return (
    <>
      <div className="w-[37%] bg-[#1F2A40] m-5 rounded-md">
        <div className="flex justify-between p-3">
          <h1 className='text-2xl text-white font-bold'>Employees</h1>
          <Link href="/employee">
            <button className="text-blue-400 hover:text-blue-500 font-medium duration-200">View all</button>
          </Link>
        </div>
        <hr className="bg-[#b7b7b7] h-[1px] mb-4" />
        <EmpSumItem teamName="Engineering" />
        <EmpSumItem teamName="Accounting" />
        <EmpSumItem teamName="Marketing" />
      </div>

    </>
  );
}
