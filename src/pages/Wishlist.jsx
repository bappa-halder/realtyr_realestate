import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import { fetchWishList, removeFromWishList } from "../features/wishListSlice";

const Wishlist = () => {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  const { wishLists } = useSelector((state) => state.wishList);


  const handleRemoveWishlist = (id) => {
    dispatch(removeFromWishList(id));
    toast.success("Property removed from wishlist")
  };
  useEffect(() => {
      dispatch(fetchWishList());
  }, [dispatch]);


  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-6">


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishLists
          .filter((item) => item.propertyId)
          .map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={item.propertyId?.image}
                  alt={item.propertyId?.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                  {item.propertyId?.title}
                </h3>

                <p className="text-green-600 font-bold">
                  $ {item.propertyId?.price}
                </p>

                <div className="text-sm text-gray-600 space-y-1">
                  <p>{item.propertyId?.location}</p>
                  <p>
                    {item.propertyId?.bedroom} Bed • {item.propertyId?.bathroom} Bath
                  </p>
                  <p>Area: {item.propertyId?.area}</p>
                  <p>Purpose: {item.propertyId?.purpose}</p>
                </div>

                {user?.role === "user" && (
                  <button onClick={() => handleRemoveWishlist(item._id)}>
                    Remove
                  </button>
                )}

                {user?.role === "admin" && (
                  <p className="mt-3 text-xs text-gray-500">
                    Added by: {item.userId?.userName} ({item.userId?.email})
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Wishlist;
