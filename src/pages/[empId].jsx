import EmpDetail from '@/components/employees/EmpDetail'
import { useRouter } from 'next/router'
import React from 'react'
import data from '../components/Dummy_data/MOCK_DATA.json'

export default function EmpDetailPage() {
    const router = useRouter()
    const empId = router.query.empId
    console.log(empId);

    return (
        <>
            <div className="bg-[#141B2D] w-full ">
                <EmpDetail />
            </div>
        </>
    )
}
