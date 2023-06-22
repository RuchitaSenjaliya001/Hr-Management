import React from "react";
import Button from "../UI/Button";
import TaskItem from "./TaskItem";

export default function HrData() {
    return (
        <>
            <div className="flex flex-col w-[60%] ">
                <div className=" bg-[#1F2A40] text-white flex justify-between text-2xl font-bold  m-5 py-3 px-5 rounded-md items-center">
                    <h1>Human Resource Management</h1>
                </div>
                <div className="grid grid-cols-6 grid-rows-2 gap-4 mx-5">
                    <div className="bg-[#1F2A40] col-span-2 text-white rounded-md space-y-2 flex flex-col justify-center items-center py-3">
                        <h1 className="text-md text-yellow-400 ">Employees</h1>
                        <p className="text-3xl font-bold text-white">100+</p>
                    </div>
                    <div className="bg-[#1F2A40] col-span-2 text-white rounded-md space-y-2 flex flex-col justify-center items-center py-3">
                        <h1 className="text-md text-yellow-400 ">
                            Monthly Salary
                        </h1>
                        <p className="text-3xl font-bold text-white">$2,00,000</p>
                    </div>
                    <div className="bg-[#1F2A40] col-span-2 text-white rounded-md space-y-2 flex flex-col justify-center items-center py-3">
                        <h1 className="text-md text-yellow-400 ">
                            New Clients
                        </h1>
                        <p className="text-3xl font-bold text-white">20,000</p>
                    </div>
                    <div className="bg-[#1F2A40] col-span-3 text-white rounded-md space-y-2 flex flex-col justify-center items-center py-3">
                        <h1 className="text-md text-yellow-400 ">
                            Newly Hired
                        </h1>
                        <p className="text-3xl font-bold text-white">35</p>
                    </div>
                    <div className="bg-[#1F2A40] col-span-3 text-white rounded-md space-y-2 flex flex-col justify-center items-center py-3">
                        <h1 className="text-md text-yellow-400 ">Vacancies</h1>
                        <p className="text-3xl font-bold text-white">15</p>
                    </div>
                </div>
            </div>
        </>
    );
}
