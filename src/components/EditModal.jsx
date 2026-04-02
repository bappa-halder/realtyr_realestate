import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateProperty } from "../features/propertySlice";
import toast from "react-hot-toast";

const EditModal = ({ selectProperty, setEditModal }) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm()
    useEffect(() => {
        if (selectProperty) {
            reset({
                title: selectProperty.title,
                location: selectProperty.location,
                price: selectProperty.price,
                bedroom: selectProperty.bedroom,
                bathroom: selectProperty.bathroom,
                area: selectProperty.area,
                purpose: selectProperty.purpose,
            })
        }
    }, [selectProperty, reset])

    const onSubmit = async (data) => {
        try {
            const formData = new FormData()
            formData.append("title", data.title)
            formData.append("location", data.location)
            formData.append("price", data.price)
            formData.append("bedroom", data.bedroom)
            formData.append("bathroom", data.bathroom)
            formData.append("area", data.area)
            formData.append("purpose", data.purpose)
            if (data.image && data.image[0]) {
                formData.append("image", data.image[0])
            }

            await dispatch(updateProperty({ id: selectProperty._id, data: formData })).unwrap()
            toast.success("Property updated successfully");
            setEditModal(false)
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
    const onCancel = () => {
        setEditModal(false)
    }
    return (
        <>
            <div className="fixed z-10 w-full h-full top-0 left-0 bg-[#000000bf] flex justify-center items-center">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 bg-white pt-10 pb-6 px-6 rounded relative bg-white">
                    <button type="button" onClick={onCancel} className="absolute top-1 right-2 text-[8px] w-[20px] h-[20px] rounded-full border border-red-500 text-red-500 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out flex justify-center items-center"><i className="fa-solid fa-xmark"></i></button>
                    <input type="text" {...register("title")} className="py-1 ps-2 border rounded text-sm" />
                    <input type="text" {...register("location")} className="py-1 ps-2 border rounded text-sm" />
                    <div className="flex sm:flex-row flex-col gap-3">
                        <input type="number" {...register("price")} className="flex-1 py-1 ps-2 border rounded text-sm" />
                        <select {...register("purpose")} className="py-1 ps-2 border rounded text-sm">
                            <option value="sale">Sale</option>
                            <option value="rent">Rent</option>
                        </select>
                    </div>
                    <div className="flex sm:flex-row flex-col gap-3">
                        <input type="number" {...register("bedroom")} className="py-1 ps-2 border rounded text-sm" />
                        <input type="number" {...register("bathroom")} className="py-1 ps-2 border rounded text-sm" />
                        <input type="number" {...register("area")} className="py-1 ps-2 border rounded text-sm" />
                    </div>
                    <input type="file" {...register("image")} className="text-sm" />
                    <button type="submit" className="py-2 border hover:bg-gray-100 transition duration-300 ease-in-out rounded text-sm">Update</button>
                </form>
            </div>

        </>
    )
}

export default EditModal