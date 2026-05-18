import React from "react"

const Skeleton = () => {
    return (
        <div className="animate-pulse">
            <div className="h-[250px] bg-gray-300 rounded-lg"></div>

            <div className="flex justify-between mt-4">
                <div className="h-6 w-40 bg-gray-300 rounded"></div>
                <div className="h-6 w-20 bg-gray-300 rounded"></div>
            </div>

            <div className="h-4 w-52 bg-gray-300 rounded mt-3"></div>

            <div className="flex gap-3 mt-5">
                <div className="h-8 w-20 bg-gray-300 rounded-xl"></div>
                <div className="h-8 w-20 bg-gray-300 rounded-xl"></div>
                <div className="h-8 w-20 bg-gray-300 rounded-xl"></div>
            </div>

            <div className="flex gap-6 mt-6">
                <div className="h-10 flex-1 bg-gray-300 rounded"></div>
                <div className="h-10 flex-1 bg-gray-300 rounded"></div>
            </div>
        </div>
    )
}
export default Skeleton