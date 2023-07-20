import React from "react";
import { useTable, usePagination } from "react-table";

import Pagination from "../UI/Pagination";

export const EmpTable = ({ column, title, data, mode }) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        state,
    } = useTable(
        { columns: column, data },

        usePagination
    );

    const { pageIndex } = state;


    return (
        <>

            <table
                {...getTableProps()}
                className="min-w-[90%] lg:max-w-5xl xl:max-w-7xl lg:mx-auto table-auto px-5 m-3"
            >
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()} key>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    key
                                    className="bg-yellow-500 py-2 text-white border-b border-slate-400"
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()} key className={`${mode === 'dark' ? 'even:bg-[#1F2A40] odd:bg-[#2c3b57]' : 'even:bg-[#e1e2e6] odd:bg-[#E6EFFF]'}`}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            key
                                            className={`${mode === 'dark' ? 'text-[#ececec] border-slate-500' : 'text-[#000] border-zinc-300'} border-b   border-zinc-300 p-2`}
                                        >
                                            {cell.render("Cell")}
                                            {/* text-[#1e3131] */}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* </div> */}
            {pageOptions.length > 2 && (
                <Pagination prevPage={previousPage} nextPage={nextPage} currentPage={pageIndex + 1} totalPage={pageOptions.length} mode={mode} />
                // <div className="text-center space-x-5 my-5">
                //     <button
                //         onClick={() => previousPage()}
                //         className="py-2 hover:bg-violet-700 duration-300 px-5 bg-violet-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                //         disabled={!canPreviousPage}
                //     >
                //         Prev
                //     </button>
                //     <span>
                //         Page <strong>{pageIndex + 1}</strong> of{" "}
                //         <strong>{pageOptions.length}</strong>
                //     </span>
                //     <button
                //         onClick={() => nextPage()}
                //         className="py-2 hover:bg-violet-700 duration-300 px-5 bg-violet-500 text-white rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
                //         disabled={!canNextPage}
                //     >
                //         Next
                //     </button>
                // </div>
            )}
        </>
    );
};
