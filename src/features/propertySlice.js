import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    properties: [],
    loading: false,
    error: null,
    currentPage: 1,
    totalPages: 1,
    totalItems: 0
}



export const fetchAllProperties = createAsyncThunk(
    "property/fetchAll",
    async (page = 1, thunkApi) => {
        try {
            const res = await axios.get(
                `http://localhost:3000/property/getAll?page=${page}`
            );
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data || { message: "Failed to fetch properties" }
            );
        }
    }
);

export const addProperty = createAsyncThunk("property/add", async (data, thunkApi) => {
    try {
        const state = thunkApi.getState()
        const user = state.user.user
        const token = state.user.token
        if (!user || user.role !== "admin") {
            return thunkApi.rejectWithValue("Only admin can add packages")
        }
        const res = await axios.post("http://localhost:3000/property/addProperty", data,
            {
                headers: {
                    Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data"
                }
            }
        )
        return res.data.data
    } catch (error) {
        return thunkApi.rejectWithValue(
            error.response?.data || { message: error.message }
        )
    }
})


export const deleteProperty = createAsyncThunk("property/delete", async (id, thunkApi) => {
    try {
        const { token, user } = thunkApi.getState().user

        await axios.delete(`http://localhost:3000/property/deleteProperty/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )

        return id
    } catch (error) {
        return thunkApi.rejectWithValue(
            error.response?.data || { message: error.message }
        )
    }
})


export const updateProperty = createAsyncThunk("property/update", async ({ id, data }, thunkApi) => {
    try {
        const { token, user } = thunkApi.getState().user
        const res = await axios.put(`http://localhost:3000/property/updateProperty/${id}`, data, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data"
            }
        })
        return res.data?.data
    } catch (error) {
        return thunkApi.rejectWithValue(
            error.response?.data || { message: error.message }
        )
    }
})


const propertySlice = createSlice({
    name: "property",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(fetchAllProperties.pending, (state) => {
                state.loading = true
                state.error = null
            })
            
            .addCase(fetchAllProperties.fulfilled, (state, action) => {
                state.loading = false;
                state.properties = action.payload.data;
                state.currentPage = action.payload.currentPage;
                state.totalPages = action.payload.totalPages;
                state.totalItems = action.payload.totalItems;
            })
            .addCase(fetchAllProperties.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })


            .addCase(addProperty.pending, (state) => {
                state.loading = true
                state.error = null
            })
            
            .addCase(addProperty.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(addProperty.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.message || "Add failed"
            })


           

            .addCase(deleteProperty.fulfilled, (state) => {
                state.loading = false
            })


            .addCase(updateProperty.fulfilled, (state, action) => {
                const index = state.properties.findIndex(
                    (property) => property._id === action.payload._id
                )
                if (index !== -1) {
                    state.properties[index] = action.payload
                }
            })
    }
})

export default propertySlice.reducer