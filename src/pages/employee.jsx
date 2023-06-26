import React, { useContext, useMemo, useState } from "react";
import DUMMY from "../components/Dummy_data/MOCK_DATA.json";
import EmpTile from "@/components/employees/EmpTile";

import { FiGrid } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { USER_COLUMNS } from "@/components/employees/Columns";
import { EmpTable } from "@/components/employees/EmpTable";
import ModeContext from "@/context/modeContext";

export default function Employee() {
    const { mode } = useContext(ModeContext)
    const columns = useMemo(() => USER_COLUMNS, []);
    const data = useMemo(() => DUMMY, []);

    const [isTile, setIsTile] = useState(true);
    const tileHandler = () => {
        setIsTile((prev) => !prev);
    };

    return (
        <>
            <div className={`flex flex-col ${mode === 'dark' ? 'bg-[#141B2D]' : 'bg-[#FCFCFC]'} w-full h-full`}>
                <div className="flex justify-between my-3">
                    <h1 className={`text-3xl font-bold px-5 py-3 ${mode === 'dark' ? 'text-[#fff]' : 'text-[#000]'}`}>
                        {data.length} Employees
                    </h1>
                    <div className="flex items-center space-x-4 mr-5 ">
                        <div className="flex bg-gray-300 rounded-md">
                            <AiOutlineMenu
                                size={36}
                                className="cursor-pointer hover:bg-gray-400 hover:rounded-md duration-300 px-2"
                                onClick={tileHandler}
                            />
                            <FiGrid
                                size={36}
                                className="cursor-pointer hover:bg-gray-400 hover:rounded-md duration-300 rounded-md px-2"
                                onClick={tileHandler}
                            />
                        </div>

                        {/* <input
                            type="text"
                            id="simple-search"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-3 p-2.5"
                            placeholder="Search"
                        /> */}
                    </div>
                </div>
                {isTile ? (
                    <EmpTile mode={mode} />
                ) : (
                    <EmpTable title="User Info" column={columns} data={data} mode={mode} />
                )}
            </div>
        </>
    );
}
