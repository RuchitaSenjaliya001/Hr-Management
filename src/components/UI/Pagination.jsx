import Button from "./Button";


export default function Pagination({
    prevPage,
    nextPage,
    currentPage,
    totalPage,
}) {
    return (
        <>
            <div className="flex items-center gap-6 justify-center my-5 ">
                <Button
                    disabled={currentPage === 1}
                    onClick={() => prevPage()}
                    type="button"
                    title="PREV"
                    className={`px-5 py-2 text-white text-center rounded-md font-bold duration-200 bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-400 disabled:cursor-not-allowed`}
                ></Button>
                <p className="text-white">
                    {currentPage} of {totalPage}
                </p>
                <Button
                    onClick={() => nextPage()}
                    disabled={currentPage === 5}
                    type="button"
                    title="NEXT"
                    className={`px-5 py-2 text-white text-center rounded-md duration-200 font-bold bg-yellow-500 hover:bg-yellow-400 disabled:bg-gray-400 disabled:cursor-not-allowed`}
                ></Button>
            </div>
        </>
    );
}
