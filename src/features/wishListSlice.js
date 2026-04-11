import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  wishLists: [],
  loading: false,
  error: null,
};

const API = import.meta.env.VITE_API_URL;

export const fetchWishList = createAsyncThunk(
  "wishList/fetchWishList",
  async (_, thunkApi) => {
    try {
      const { token, user } = thunkApi.getState().user;

      if (!token) {
        return []; 
      }

      const url =
        user?.role === "admin"   
          ? `${API}/wishList/allWishList`
          : `${API}/wishList/myWishList`;

      const res = await axios.get(url, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data.data || [];
    } catch (error) {
      return thunkApi.rejectWithValue(
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch wishlist"
      );
    }
  }
);


export const addToWishList = createAsyncThunk("wishList/addToWishList", async (propertyId, thunkApi) => {
  try {
    const { token } = thunkApi.getState().user;

    const res = await axios.post(`${API}/wishList/addWishList`,
      { propertyId },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return res.data.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response?.data?.message || error.message || "Failed to add to wishlist");
  }
}
);

export const removeFromWishList = createAsyncThunk("wishList/removeFromWishList", async (id, thunkApi) => {
  try {
    const { token } = thunkApi.getState().user;

    await axios.delete(`${API}/wishList/deleteWishList/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    return id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.response?.data?.message || error.message || "Failed to remove wishlist");
  }
}
);


const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWishList.fulfilled, (state, action) => {
        state.loading = false;
        state.wishLists = action.payload;
      })
      .addCase(fetchWishList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addToWishList.fulfilled, (state, action) => {
        state.wishLists.push(action.payload);
      })

      .addCase(removeFromWishList.fulfilled, (state, action) => {
        state.wishLists = state.wishLists.filter(
          (item) => item._id !== action.payload
        );
      })

  },
});

export default wishListSlice.reducer;
