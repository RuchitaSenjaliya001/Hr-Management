
import EmpPerformanceChart from '@/components/report/EmpPerformanceChart'
import PieChart from '@/components/report/PieChart'
import RadialBar from '@/components/report/RadialBar'
import ModeContext from '@/context/modeContext'
import React, { useContext } from 'react'

export default function ReportPage() {
    const { mode } = useContext(ModeContext)
    return (
        <>
            <section className={`w-full ${mode === 'dark' ? 'bg-[#141B2D]' : 'bg-[#FCFCFC]'}`}>

                <div className="grid grid-cols-6 grid-rows-2 gap-5 p-5">
                    <div class="col-span-6 pb-8">
                        <EmpPerformanceChart mode={mode} />
                    </div>
                    <div class="col-span-3 ">
                        <PieChart mode={mode} />
                    </div>
                    <div class="col-span-3 ">
                        <RadialBar mode={mode} />
                    </div>
                </div>

            </section>
        </>
    )
}
