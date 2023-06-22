
import EmpPerformanceChart from '@/components/report/EmpPerformanceChart'
import PieChart from '@/components/report/PieChart'
import RadialBar from '@/components/report/RadialBar'
import React from 'react'

export default function ReportPage() {
    return (
        <>
            <section className=" w-full bg-[#141B2D]">

                <div className="grid grid-cols-6 grid-rows-2 gap-5 p-5">
                    <div class="col-span-6 pb-8">
                        <EmpPerformanceChart />
                    </div>
                    <div class="col-span-3 ">
                        <PieChart />
                    </div>
                    <div class="col-span-3 ">
                        <RadialBar />
                    </div>
                </div>

            </section>
        </>
    )
}
