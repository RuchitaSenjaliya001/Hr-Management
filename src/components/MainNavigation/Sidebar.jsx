import React, { useState } from "react";
import { MdCancel, MdDashboard } from "react-icons/md";
import { MdForwardToInbox } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineApartment } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBarChartFill } from "react-icons/bs";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { useContext } from "react";
import ModeContext from "@/context/modeContext";

export default function Sidebar() {
    const { mode } = useContext(ModeContext);
    const [isMenuOpen, setisMenuOpen] = useState(true);
    const menuClickedHandler = () => {
        setisMenuOpen(true);
    };
    const cancelClickedHandler = () => {
        setisMenuOpen(false);
    };
    return (
        <>
            <div
                className={`hidden fixed lg:sticky top-0  lg:flex lg:flex-col ${mode === "dark"
                    ? "bg-[#1F2A40] text-white"
                    : "bg-[#e6efff] text-black"
                    } ${isMenuOpen ? "w-2/12" : "w-[10]"} h-screen z-10`}
            >
                <div
                    className={`lex items-center justify-between px-5 pt-2 ${!isMenuOpen && "mb-10"
                        }`}
                >
                    {isMenuOpen ? (
                        <MdCancel size={25} onClick={cancelClickedHandler} />
                    ) : (
                        <FiMenu size={25} onClick={menuClickedHandler} />
                    )}
                </div>
                {isMenuOpen && (
                    <>
                        <h3 className="text-2xl tracking-[8px] text-center text-yellow-400 font-bold px-5 py-2 ">
                            Next JS
                        </h3>
                        <hr className="w-full py-2" />
                    </>
                )}

                <ul className="mt-3 px-5 text-base space-y-6 cursor-pointer font-semibold">
                    <Link
                        href="/"
                        className={`flex space-x-3 ${mode === 'dark' ? 'text-[#b2b2b2]' : 'text-[#141B2D]'} items-center ${!isMenuOpen && "justify-between"
                            }`}
                    >
                        <MdDashboard className="text-xl" />
                        <div
                            id="tooltip-default"
                            role="tooltip"
                            className="absolute  inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300  rounded-lg shadow-sm opacity-0 tooltip "
                        >
                            Dashboard
                            <div className="tooltip-arrow" data-popper-arrow></div>
                        </div>
                        {isMenuOpen && <p>Dashboard</p>}
                    </Link>
                    {/* <li className="flex space-x-3 text-[#b2b2b2] items-center">
                    <MdForwardToInbox className="text-xl" />
                    <Link href="/inbox">Inbox</Link>
                </li> */}
                    <Link
                        href="/calender"
                        className={`flex space-x-3 ${mode === 'dark' ? 'text-[#b2b2b2]' : 'text-[#141B2D]'} items-center`}
                    >
                        <BsFillCalendarCheckFill className="text-xl" />
                        {isMenuOpen && <p>Calender & Tools</p>}
                    </Link>
                </ul>
                <p className="text-[#898989] py-8 px-2 text-sm">
                    {isMenuOpen ? "Organization" : "Orgs"}
                </p>
                <ul className="text-base px-5 space-y-6 cursor-pointer font-semibold">
                    <Link
                        href="/employee"
                        className={`flex space-x-3 ${mode === 'dark' ? 'text-[#b2b2b2]' : 'text-[#141B2D]'} items-center`}
                    >
                        <FaUserAlt className="text-xl" />
                        {isMenuOpen && <p>Employee</p>}
                    </Link>
                    {/* <li className="flex space-x-3 text-[#b2b2b2] items-center">
                        <AiOutlineApartment className="text-xl" />
                        <Link href="/structure">Structure</Link>
                    </li> */}
                    {/* <Link
                        href="/report"
                        className={`flex space-x-3 ${mode === 'dark' ? 'text-[#b2b2b2]' : 'text-[#141B2D]'} items-center`}
                    >
                        <BsFillBarChartFill className="text-xl" />
                        {isMenuOpen && <p>Report</p>}
                    </Link> */}
                    {/* <li className="flex space-x-3 text-[#b2b2b2] items-center">
                        <BsFillBarChartFill className="text-xl" />
                        <Link href="/report">Report</Link>
                    </li> */}
                    {/* <li className="flex space-x-3 text-[#b2b2b2] items-center">
                        <AiFillSetting className="text-xl" />
                        <Link href="/setting">Setting</Link>
                    </li> */}
                </ul>
            </div>
        </>
    );
}
