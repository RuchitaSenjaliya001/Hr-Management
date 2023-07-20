import Image from "next/image";
import React from "react";
import { ResponsiveCalendar } from "@nivo/calendar";
import calendarData from "../Dummy_data/EMP_DAILY_WORK_DATA.json";
import { useRouter } from "next/router";

export default function EmpDetail({
    emp_name: name,
    job_title: jobTitle,
    status,
    department,
    joining_date: hireDate,
    email,
    mobile,
    id,
    avatar,
    mode,
}) {
    const router = useRouter();
    const goBackHandler = () => {
        router.push("/employee");
    };

    return (
        <>
            <div className="w-[60%] h-screen m-auto">
                <div className="text-center my-3 ">
                    <div className="flex justify-between">
                        <button
                            onClick={goBackHandler}
                            className="text-white font-bold bg-yellow-400 py-2 px-5 rounded-lg "
                        >
                            Go Back
                        </button>
                        <button
                            className={`px-4 rounded-md border font-bold cursor-default ${status === "active" &&
                                "bg-green-100  text-green-600  border-green-400"
                                } ${status === "inactive" &&
                                "bg-red-100  text-red-600  border-red-400"
                                } ${status === "unverified" &&
                                "bg-yellow-100  text-yellow-600  border-yellow-400"
                                }`}
                        >
                            {status}
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <Image
                            className="p-1 rounded-full ring-2 ring-gray-300 "
                            // src="https://img.freepik.com/premium-vector/people-saving-money_24908-51569.jpg?w=740"
                            src={avatar}
                            alt="Bordered avatar"
                            width={150}
                            height={150}
                        />
                    </div>
                </div>
                <div className="w-full py-2 pb-4">
                    <h1
                        className={`text-center text-3xl font-bold ${mode === "dark" ? "text-[#FFF]" : "text-[#111827]"
                            } `}
                    >
                        {name}
                    </h1>
                    <p className="text-center text-lg font-semibold text-[#aeaeae]">
                        {jobTitle}
                    </p>
                </div>
                <div
                    className={`${mode === "dark" ? "bg-[#1F2A40]" : "bg-[#E6EFFF]"
                        } m-auto rounded-md my-5 p-5`}
                >
                    {/* <h1 className={`text-white text-center py-3 text-xl font-semibold`}>
                        Basic Information
                    </h1> */}

                    <div className="grid grid-cols-2 grid-rows-3 gap-7">

                        <div className="px-4">
                            <p className="text-md text-[#8a96aa] font-bold">
                                Candidate ID
                            </p>
                            <p
                                className={`text-lg ${mode === "dark" ? "text-[#FCFCFC]" : "text-[#141B2D]"
                                    } font-semibold`}
                            >
                                {id}
                            </p>
                        </div>
                        <div className="px-4">
                            <p className="text-md text-[#8a96aa] font-bold">Date Hired</p>
                            <p
                                className={`text-lg ${mode === "dark" ? "text-[#FCFCFC]" : "text-[#141B2D]"
                                    } font-semibold`}
                            >
                                {hireDate}
                            </p>
                        </div>
                        <div className="px-4">
                            <p className="text-md text-[#8a96aa] font-bold">Department</p>
                            <p
                                className={`text-lg ${mode === "dark" ? "text-[#FCFCFC]" : "text-[#141B2D]"
                                    } font-semibold`}
                            >
                                {department}
                            </p>
                        </div>
                        <div className="px-4">
                            <p className="text-md text-[#8a96aa] font-bold">Job Title</p>
                            <p
                                className={`text-lg ${mode === "dark" ? "text-[#FCFCFC]" : "text-[#141B2D]"
                                    } font-semibold`}
                            >
                                {jobTitle}
                            </p>
                        </div>
                        <div className="px-4">
                            <p className="text-md text-[#8a96aa] font-bold">
                                Mobile number
                            </p>
                            <p
                                className={`text-lg ${mode === "dark" ? "text-[#FCFCFC]" : "text-[#141B2D]"
                                    } font-semibold`}
                            >
                                {mobile}
                            </p>
                        </div>

                        <div className="px-4">
                            <p className="text-md text-[#8a96aa] font-bold">Email</p>
                            <p
                                className={`text-lg ${mode === "dark" ? "text-[#FCFCFC]" : "text-[#141B2D]"
                                    } font-semibold`}
                            >
                                {email}
                            </p>
                        </div>


                    </div>
                </div>

                {/* <div
                    className={`h-[30vh] max-w-5xl m-auto ${mode === "dark" ? "bg-[#fff]" : "border border-[#5474b4]"
                        } my-4 rounded-lg  `}
                >
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
                </div> */}
            </div>
        </>
    );
}
