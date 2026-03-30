import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../features/userSlice"
import propertySlice from "../features/propertySlice"
import wishListSlice from "../features/wishListSlice"
import contactSlice from "../features/contactSlice"

export const store = configureStore({
    reducer: {
        user: userSlice,
        property: propertySlice,
        wishList: wishListSlice,
        contact: contactSlice
    }
})