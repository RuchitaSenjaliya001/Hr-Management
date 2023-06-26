import React from "react";
import Button from "../UI/Button";
import TaskItem from "./TaskItem";
import HrDataItem from "./HrDataItem";

export default function HrData({ mode }) {
    return (
        <>

            <div className="col-span-4 mx-5 grid grid-cols-6 grid-rows-2 gap-3">

                <HrDataItem
                    mode={mode}
                    title="Newly Hire"
                    number="35"
                    className="col-span-3"
                />
                <HrDataItem
                    mode={mode}
                    title="Vacancies"
                    number="15"
                    className="col-span-3"
                />
                <HrDataItem
                    mode={mode}
                    title="Employees"
                    number="100+"
                    className="col-span-2"
                />
                <HrDataItem
                    mode={mode}
                    title="Monthly Salary"
                    number="$2,00,000"
                    className="col-span-2"
                />
                <HrDataItem
                    mode={mode}
                    title="New Clients"
                    number=" 2,000"
                    className="col-span-2"
                />
            </div>
            {/* </div> */}
        </>
    );
}
