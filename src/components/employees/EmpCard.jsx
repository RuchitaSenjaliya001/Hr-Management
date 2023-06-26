import Image from "next/image";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { useRouter } from "next/router";

export default function EmpCard({
    name,
    id,
    email,
    mobile,
    avatar,
    jobTitle,
    status,
    hireDate,
    department,
    mode
}) {
    const router = useRouter()
    const ShowDetailHandler = () => {
        router.push('/' + id)
    }
    console.log(avatar);
    return (
        <div className={`px-3 py-4 ${mode === 'dark' ? 'bg-[#1F2A40] ' : 'bg-[#E6EFFF] '} rounded-lg`}>
            <div className="flex justify-between pb-5">
                <input
                    type="checkbox"
                    value=""
                    name="check"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                />
                <button
                    className={`px-4 rounded-md border font-bold cursor-default ${status === "active" &&
                        "bg-green-100  text-green-600  border-green-400"
                        } ${status === "inactive" && "bg-red-100  text-red-600  border-red-400"
                        } ${status === "unverified" &&
                        "bg-yellow-100  text-yellow-600  border-yellow-400"
                        }`}
                >
                    {status}
                </button>
            </div>
            <div className="text-center flex justify-center ">
                <Image
                    className="p-1 rounded-full ring-2 ring-gray-300 object-cover"
                    // src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=740"
                    src={avatar}
                    alt="avatar"
                    width={60}
                    height={60}
                />
            </div>

            <div className="py-2 pb-4">
                <h1 className={`text-center text-xl font-bold ${mode === 'dark' ? 'text-[#FFF] ' : 'text-[#1F2A40] '}`}>{name}</h1>
                <p className="text-center text-sm font-semibold text-[#c3c5c7]">
                    {jobTitle}
                </p>
                <p onClick={ShowDetailHandler} className="text-center text-xs pt-3 font-semibold text-sky-400 hover:underline cursor-pointer">Show Detail</p>
            </div>
            <div className={`${mode === 'dark' ? 'bg-[#141B2D]' : 'bg-[#FCFCFC]'} rounded-md`}>
                <div className="flex justify-between space-x-8 p-4">
                    <div className="">
                        <p className="text-xs text-[#b1c2e0] font-semibold">Department</p>
                        <p className={`text-sm ${mode === 'dark' ? 'text-[#f3f3f3]' : 'text-[#000]'} font-semibold`}>{department}</p>
                    </div>
                    <div className="">
                        <p className="text-xs text-[#b1c2e0] font-semibold">Date Hired</p>
                        <p className={`text-sm ${mode === 'dark' ? 'text-[#f3f3f3]' : 'text-[#000]'} font-semibold`}>{hireDate}</p>
                    </div>
                </div>
                <hr className="bg-[#f4f4f4] h-[2px]" />
                <div className="px-3.5">
                    <div className="flex items-center space-x-3 py-1">
                        <MdOutlineMail size={18} className="text-yellow-400" />
                        <p className={`text-sm font-semibold ${mode === 'dark' ? 'text-[#f3f3f3]' : 'text-[#000]'} pr-5`}>{email}</p>
                    </div>
                    <div className="flex items-center space-x-3 py-1 ">
                        <BsTelephoneFill size={18} className="text-yellow-400" />
                        <p className={`text-sm font-semibold ${mode === 'dark' ? 'text-[#f3f3f3]' : 'text-[#000]'}`}>{mobile}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
