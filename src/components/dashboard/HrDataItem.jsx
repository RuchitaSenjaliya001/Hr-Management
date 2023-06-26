import React from "react";

export default function HrDataItem({ mode, title, number, className }) {
    return (
        <div
            className={`${mode === "dark"
                ? "bg-[#1F2A40] text-white"
                : "bg-[#E6EFFF] text-[#141B2D]"
                }   rounded-md flex flex-col justify-center items-center ${className} `}
        >
            <h1
                className={`text-md text-yellow-400 pb-5 ${mode === "light" && "font-semibold"
                    }`}
            >
                {title}
            </h1>
            <p className="text-3xl font-bold ">{number}</p>

        </div>
    );
}
