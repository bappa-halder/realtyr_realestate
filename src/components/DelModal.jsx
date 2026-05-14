import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteProperty, fetchAllProperties, fetchOnlyIdproperty } from "../features/propertySlice";
import toast from "react-hot-toast";

const DelModal = ({ propertyId, setDelModal, currentPage, setPage, currentLength }) => {
    const dispatch = useDispatch()
    const handleConfirm = async () => {
        try {
            await dispatch(deleteProperty(propertyId)).unwrap()
            if (currentLength === 1 && currentPage > 1) {
                setPage(currentPage - 1);
            } else {
                dispatch(fetchOnlyIdproperty(currentPage));
            }
            toast.success("Property deleted successfully");
            setDelModal(false)
        } catch (error) {
            toast.error(error || "Property delete failed")
        }
    }
    const handleCancel = () => {
        setDelModal(false)
    }
    return (
        <>
            <div className="fixed px-4 z-10 w-full h-full top-0 left-0 bg-[#000000bf] flex justify-center items-center">
                <div className="p-8 rounded bg-white">
                    <div className="text-4xl text-red-500 mb-4 flex justify-center"><i className="fa-solid fa-triangle-exclamation"></i></div>
                    <p className="text-center">Are you sure you want to delete this property?</p>
                    <div className="flex sm:flex-nowrap flex-wrap justify-center gap-3 mt-6">
                        <button onClick={handleConfirm} className="bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out text-white py-2 px-5 rounded text-sm">Yes, i'm sure</button>
                        <button onClick={handleCancel} className="border hover:bg-gray-100 transition duration-300 ease-in-out py-2 px-5 rounded text-sm">No, cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DelModal