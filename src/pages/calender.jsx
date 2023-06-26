import React, { useContext } from "react";
import MyCalender from "@/components/FullCalender/MyCalender";
import ModeContext from "@/context/modeContext";

export default function Calender() {
    const { mode } = useContext(ModeContext)
    return (
        <div className={`w-full h-full ${mode === 'dark' ? 'bg-[#141B2D] text-white' : 'bg-[#FCFCFC] text-black'}`}>
            <div className="flex flex-col items-center pb-5">
                <h1
                    className={`text-3xl font-bold pt-2 ${mode === "dark" ? "text-white" : "text-[#141B2D]"
                        }`}
                >
                    CALENDER
                </h1>
                <p
                    className={`text-md text-yellow-400 ${mode === "light" && "font-semibold"
                        }`}
                >
                    React Full Calender
                </p>
            </div>
            <div className={`w-[75vw] mx-auto my-5 p-5 rounded-lg ${mode === 'light' ? 'bg-[#E6EFFF]' : 'bg-[#1F2A40]'}`}>

                <MyCalender />
            </div>
        </div>
    );
}
