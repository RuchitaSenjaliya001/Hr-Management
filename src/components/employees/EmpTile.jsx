import React, { useState } from 'react'
import Pagination from '../UI/Pagination'
import EmpCard from './EmpCard'
import data from "../Dummy_data/MOCK_DATA.json";

export default function EmpTile({ mode }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPost = data.slice(indexOfFirstPost, indexOfLastPost)
    const totalPage = 5


    const prevPage = () => {
        setCurrentPage(currentPage - 1);
        if (currentPage <= 1) {
            setCurrentPage(1);
        }
    };
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
        if (currentPage >= totalPage) {
            setCurrentPage(totalPage);
        }
    };
    return (
        <>
            <div className="flex flex-col justify-center items-center md:grid md:grid-cols-2 px-4 lg:grid-cols-4 gap-8 xl:max-w-7xl xl:m-auto">

                {currentPost.map((d) => (
                    <EmpCard
                        mode={mode}
                        key={d.id}
                        id={d.id}
                        name={d.emp_name}
                        email={d.email}
                        mobile={d.mobile}
                        jobTitle={d.job_title}
                        status={d.status}
                        avatar={d.avatar}
                        hireDate={d.joining_date}
                        department={d.department}
                    />
                ))}
            </div>
            <Pagination prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} totalPage={totalPage} />
        </>
    )
}
