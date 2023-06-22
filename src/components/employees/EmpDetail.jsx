import Image from "next/image";
import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import calendarData from "../Dummy_data/EMP_DAILY_WORK_DATA.json"
import { useRouter } from "next/router";

export default function EmpDetail({
    name,
    jobTitle,
    status,
    department,
    hireDate,
    email,
    mobile,
    id,
}) {
    const router = useRouter()
    const goBackHandler = () => {
        router.push('/employee')
    }
    return (
        <>

            <div className="w-[60%] m-auto">
                <div className="text-center my-3 ">
                    <div className="flex justify-between">
                        <button onClick={goBackHandler} className="text-white font-bold bg-yellow-400 py-2 px-5 rounded-lg ">Go Back</button>
                        <button
                            className="px-5 rounded-md border font-bold cursor-default 
                            bg-green-100  text-green-600  border-green-400
                            "
                        >
                            Active
                        </button>

                    </div>
                    <div className="flex justify-center">
                        <Image
                            className="p-1 rounded-full ring-2 ring-gray-300 "
                            src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=740"
                            alt="Bordered avatar"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
                <div className="w-full py-2 pb-4">
                    <h1 className="text-center text-3xl font-bold text-[#fff]">
                        Ruchita Senjaliya
                    </h1>
                    <p className="text-center text-lg font-semibold text-[#aeaeae]">
                        Front-end Developer
                    </p>
                </div>
                <div className="bg-[#111827] w-[60%] m-auto rounded-md">
                    <div className="flex justify-between space-x-8 px-4 py-4">
                        <div className="">
                            <p className="text-md text-[#8a96aa] font-bold">Department</p>
                            <p className="text-xl text-[#fcfcfc] font-semibold">React JS</p>
                        </div>
                        <div className="">
                            <p className="text-md text-[#8a96aa] font-bold">Date Hired</p>
                            <p className="text-xl text-[#fcfcfc] font-semibold  ">
                                23 Jan, 2023
                            </p>
                        </div>
                    </div>
                    <hr className="bg-[#cecece] h-[2px] mx-4" />
                    <div className="flex justify-between space-x-8 px-4 py-4">
                        <div className="">
                            <p className="text-md text-[#8a96aa] font-bold">Email</p>
                            <p className="text-lg font-semibold text-[#fcfcfc]">
                                ruchita.s@solutelabs.com
                            </p>
                        </div>
                        <div className="">
                            <p className="text-md text-[#8a96aa] font-bold">Mobile number</p>
                            <p className="text-lg font-semibold text-[#fcfcfc]">9874563210</p>
                        </div>
                    </div>

                </div>
                <div className="h-[30vh] max-w-5xl m-auto bg-[#fff] my-4 rounded-lg  ">
                    <ResponsiveCalendar
                        data={calendarData}
                        from="2023-03-01"
                        to="2023-12-31"
                        emptyColor="#eeeeee"
                        align="top"
                        monthLegendPosition="after"
                        colors={["#ccdeff", "#70a4ff", "#2c71e8", "#2a4b84"]}
                        margin={{ top: 50, right: 20, bottom: 0, left: 40 }}
                        yearSpacing={40}
                        monthBorderColor="#ffffff"
                        dayBorderWidth={2}
                        dayBorderColor="#ffffff"
                        legends={[
                            {
                                anchor: "bottom-right",
                                direction: "row",
                                itemCount: 4,
                                padding: 70,
                                itemWidth: 40,
                                itemHeight: 36,
                                itemsSpacing: 12,
                                itemDirection: "right-to-left",
                            },
                        ]}
                    />
                </div>
            </div>
        </>
    );
}
