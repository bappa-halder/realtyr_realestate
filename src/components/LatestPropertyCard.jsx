import React, { useEffect, useState } from "react";
import bedIcon from "../assets/ic-bed.svg"
import bathIcon from "../assets/ic-bath.svg"
import area from "../assets/ic-sq-feet.svg"
import { useDispatch, useSelector } from "react-redux";
import { addToWishList, fetchWishList, removeFromWishList } from "../features/wishListSlice";
import { fetchAllProperties, fetchOnlyIdproperty } from "../features/propertySlice";
import DelModal from "./DelModal";
import AddPropertyModal from "./AddPropertyModal";
import EditModal from "./EditModal";
import toast from "react-hot-toast";
import FadeUp from "./common/FadeUp";


const LatestPropertyCard = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1);
    const [addModal, setAddModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const [selectProperty, setSelectProperty] = useState(null)
    const [delModal, setDelModal] = useState(false)
    const [propertyId, setPropertyId] = useState(null)

    const handleAddModal = () => {
        setAddModal(true)
    }
    const handleEditModal = (item) => {
        setSelectProperty(item)
        setEditModal(true)
    }
    const handleDelModal = (id) => {
        setDelModal(true)
        setPropertyId(id)
    }

    const { properties, totalPages, loading } = useSelector((state) => state.property)
    const { user } = useSelector((state) => state.user)
    const { wishLists } = useSelector((state) => state.wishList)


    const handleWishList = (propertyId) => {
        const existing = wishLists.find(
            (item) => item.propertyId === propertyId || item.propertyId?._id === propertyId
        )
        if (existing) {
            dispatch(removeFromWishList(existing._id))
            toast.success("Property removed from wishlist")
        }
        else {
            dispatch(addToWishList(propertyId))
            toast.success("Property add to wishlist")
        }
    }







    const visiblePages = 3;

    const start = Math.max(1, page - Math.floor(visiblePages / 2));
    const end = Math.min(totalPages, start + visiblePages - 1);


    const adjustedStart = Math.max(1, end - visiblePages + 1);

    const pages = [];
    for (let i = adjustedStart; i <= end; i++) {
        pages.push(i);
    }





    useEffect(() => {
        if (user?.role === "admin") {
            dispatch(fetchOnlyIdproperty(page))
        }
        else {
            dispatch(fetchAllProperties(page))
        }
        if (user?.role === "user") {
            dispatch(fetchWishList())
        }
        window.scrollTo({
            top: 0
        });
    }, [dispatch, user, page])
    return (
        <>





            <div className="tag flex items-center gap-2 mb-1">
                <div className="w-[15px] h-[15px] rounded-full flex justify-center items-center border">
                    <div className="w-[7.5px] h-[7.5px] rounded-full bg-black"></div>
                </div>
                <p className="leading-none text-sm md:text-base">EXPLORE</p>
            </div>

            <h2 className="mb-6 md:mb-7 text-3xl md:text-4xl">
                Latest Properties
            </h2>

            {
                loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="w-12 h-12 border-4 border-[#164c78] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : properties.length === 0 ? (
                    <div className="text-center py-10">
                        <h3 className="text-2xl font-semibold text-gray-600">
                            Property not found
                        </h3>
                    </div>
                ) : (


                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 lg:gap-x-8 gap-y-8 lg:gap-y-12">

                        {properties.map((item) => {
                            const isWishListed = wishLists.some(
                                (wish) =>
                                    wish.propertyId === item._id ||
                                    wish.propertyId?._id === item._id
                            );
                            return (
                                <FadeUp>
                                    <div key={item._id}>
                                        <div className="relative">
                                            <div className="h-[250px]">
                                                <img src={item.image} alt={item.title} className="rounded-lg w-full" loading="lazy" />
                                            </div>
                                            <p className="leading-none py-2 px-3 bg-white rounded-xl absolute top-3 right-3 text-sm">
                                                For {item.purpose}
                                            </p>

                                            {
                                                user?.role === "user" && (
                                                    <button onClick={() => handleWishList(item._id)} className="absolute top-2 left-2 text-red-500 w-[25px] h-[25px] bg-black/30 backdrop-blur-xs rounded-full">
                                                        {isWishListed ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}
                                                    </button>
                                                )
                                            }

                                        </div>
                                        <div>
                                            <div className="flex justify-between mt-4">
                                                <h4 className="text-lg md:text-[1.35rem]">{item.title}</h4>
                                                <h4 className="text-lg md:text-[1.35rem]">${item.price}</h4>
                                            </div>

                                            <p className="text-sm md:text-base mt-2 mb-4">{item.location}</p>

                                            <div className="flex flex-wrap gap-3 mt-3">
                                                <div className="flex gap-2 px-3 py-1 rounded-xl border text-sm">
                                                    <img src={bedIcon} alt="" className="w-[15px] object-contain" />
                                                    <p>{item.bedroom}</p>
                                                </div>
                                                <div className="flex gap-2 px-3 py-1 rounded-xl border text-sm">
                                                    <img src={bathIcon} alt="" className="w-[15px] object-contain" />
                                                    <p>{item.bathroom}</p>
                                                </div>
                                                <div className="flex gap-2 px-3 py-1 rounded-xl border text-sm">
                                                    <img src={area} alt="" className="w-[15px] object-contain" />
                                                    <p>{item.area}</p>
                                                </div>
                                            </div>

                                            {
                                                user?.role === "admin" && (
                                                    <div className="flex gap-6 mt-6">
                                                        <button onClick={() => handleEditModal(item)} className="flex-1 py-1 border border-[#164c78] rounded hover:bg-[#164c78] hover:text-white transition duration-300 ease-in-out">Edit</button>
                                                        <button onClick={() => handleDelModal(item._id)} className="flex-1 py-1 border border-red-600 rounded hover:bg-red-600 hover:text-white transition duration-300 ease-in-out">Delete</button>
                                                    </div>
                                                )
                                            }
                                        </div>


                                    </div>
                                </FadeUp>
                            )
                        })}






                    </div>
                )
            }
            {
                totalPages > 1 && (
                    <div className="flex gap-2 mt-6 justify-center">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(page - 1)}
                            className="w-[30px] h-[30px] flex justify-center items-center border rounded-full text-blue-500 disabled:text-blue-200"
                        >
                            <i className="fa-solid fa-angle-left"></i>
                        </button>

                        {pages.map((p) => (
                            <button
                                key={p}
                                onClick={() => setPage(p)}
                                className={`w-[30px] h-[30px] flex justify-center items-center border rounded-full text-sm ${page === p ? "text-white bg-blue-500" : "bg-white"
                                    }`}
                            >
                                {p}
                            </button>
                        ))}

                        <button
                            disabled={page === totalPages}
                            onClick={() => setPage(page + 1)}
                            className="w-[30px] h-[30px] flex justify-center items-center border rounded-full text-blue-500 disabled:text-blue-200"
                        >
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                )
            }



            {
                user?.role === "admin" && (
                    <div className="text-center mt-10">
                        <button onClick={handleAddModal} className="py-2 px-5 bg-[#164c78] rounded text-white">Add property</button>
                    </div>
                )
            }

            {
                addModal && (<AddPropertyModal setAddModal={setAddModal} currentPage={page} setPage={setPage} currentLength={properties.length} />)
            }

            {
                editModal && <EditModal selectProperty={selectProperty} setEditModal={setEditModal} />
            }

            {
                delModal && (<DelModal propertyId={propertyId} setDelModal={setDelModal} currentPage={page} setPage={setPage} currentLength={properties.length} />)
            }




        </>
    )
}

export default LatestPropertyCard