import EmpDetail from '@/components/employees/EmpDetail'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import data from '../components/Dummy_data/MOCK_DATA.json'
import ModeContext from '@/context/modeContext'

export default function EmpDetailPage() {
    const { mode } = useContext(ModeContext)
    const router = useRouter()
    const empId = router.query.empId
    const employee = data.find(e => e.id == empId)

    return (
        <>
            <div className={`${mode === 'dark' ? 'bg-[#141B2D]' : 'bg-[#FCFCFC]'} w-full`}>
                <EmpDetail {...employee} mode={mode} />
            </div>
        </>
    )
}
