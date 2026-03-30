import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading: false,
    error: null
}

export const sendMessage = createAsyncThunk("contact/sendMessage", async (formData, thunkApi) => {
    try {
        const response = await axios.post("http://localhost:3000/contact/sendMessage",
            formData
        )
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data)
    }
})

const contactSlice = createSlice({
    name: "contact",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(sendMessage.fulfilled, (state) => {
                state.loading = false
            })
            .addCase(sendMessage.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload?.message
            })
    }
})

export default contactSlice.reducer