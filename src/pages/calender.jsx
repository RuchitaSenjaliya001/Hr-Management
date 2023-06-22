import React from "react";
import MyCalender from "@/components/FullCalender/MyCalender";

export default function calender() {
    return (
        <div className=" w-full h-full bg-[#141B2D] text-white">
            <div className="w-[70vw] mx-auto my-5">
                <MyCalender />
            </div>
        </div>
    );
}
