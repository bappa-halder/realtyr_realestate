import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProperty, fetchAllProperties } from "../features/propertySlice";
import toast from "react-hot-toast";

const AddPropertyModal = ({ setAddModal, currentPage, setPage, currentLength }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
        try {
            const formData = new FormData()
            formData.append("title", data.title)
            formData.append("price", data.price)
            formData.append("location", data.location)
            formData.append("bedroom", data.bedroom)
            formData.append("bathroom", data.bathroom)
            formData.append("area", data.area)
            formData.append("purpose", data.purpose)
            formData.append("image", data.image[0])

            await dispatch(addProperty(formData)).unwrap()
            if (currentLength === 1 && currentPage > 1) {
                setPage(currentPage - 1);
            } else {
                dispatch(fetchAllProperties(currentPage));
            }
            toast.success("Property added successfully");
            reset()
            setAddModal(false)
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    const onCancel = ()=>{
        setAddModal(false)
    }
    return (
        <>
            <div className="fixed z-10 w-full h-full top-0 left-0 bg-[#000000bf] flex justify-center items-center">
                <form action="" onSubmit={handleSubmit(onSubmit)} className="max-w-[300px] sm:max-w-none flex flex-col gap-3 bg-white pt-10 pb-6 px-6 rounded relative bg-white">
                    <button type="button" onClick={onCancel} className="absolute top-1 right-2 text-[8px] w-[20px] h-[20px] rounded-full border border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out flex justify-center items-center"><i className="fa-solid fa-xmark"></i></button>
                    <input type="text" placeholder="Enter title" {...register("title", { required: "Title is required" })} className="py-1 ps-2 border rounded text-sm"/>
                    <input type="text" placeholder="Enter location" {...register("location", { required: "Location is required" })} className="py-1 ps-2 border rounded text-sm" />
                    <div className="flex sm:flex-row flex-col gap-3">
                        <input type="number" placeholder="Enter price" {...register("price", { required: "Price is required" })} className="flex-1 py-1 ps-2 border rounded text-sm"/>
                        <select {...register("purpose", { required: "Purpose is required" })} className="py-1 ps-2 border rounded text-sm">
                            <option value="">Select type</option>
                            <option value="sale">Sale</option>
                            <option value="rent">Rent</option>
                        </select>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-3">
                        <input type="number" placeholder="bedroom" {...register("bedroom", { required: "Bedroom is required" })} className="py-1 ps-2 border rounded text-sm" />
                        <input type="number" placeholder="bathroom" {...register("bathroom", { required: "Bathroom is required" })} className="py-1 ps-2 border rounded text-sm" />
                        <input type="number" placeholder="area" {...register("area", { required: "Area is required" })} className="py-1 ps-2 border rounded text-sm" />
                    </div>

                    <input type="file" {...register("image", { required: "Image is required" })} className="text-sm"/>
                    <button className="py-2 border rounded text-sm">Add</button>
                </form>
            </div>

        </>
    )
}

export default AddPropertyModal