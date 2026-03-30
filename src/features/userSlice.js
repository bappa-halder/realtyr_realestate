import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const tokenFromStorage = localStorage.getItem("token")
const userFromStorage = localStorage.getItem("user")
const initialState = {
    user: userFromStorage ? JSON.parse(userFromStorage) : null,
    token: tokenFromStorage || null,
    isAuthenticated: !!tokenFromStorage,
    registerLoading: false,
    verifyLoading: false,
    loginLoading: false,
    logoutLoading: false,
    editLoading: false,
    error: null,
    isVerified: !!tokenFromStorage
}


export const registerUser = createAsyncThunk(
    "user/register",
    async (data, thunkApi) => {
        try {
            const response = await axios.post(
                "http://localhost:3000/user/register",
                data,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(
                error.response?.data || { message: "Registration failed" }
            );
        }
    }
);





export const verifyUser = createAsyncThunk("user/verify", async (token, thunkApi) => {
    try {
        const response = await axios.get(
            "http://localhost:3000/user/verify",
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(
            error.response?.data || { message: "verification failed" }
        )
    }
})



export const loginUser = createAsyncThunk("user/login", async (data, thunkApi) => {
    try {
        const response = await axios.post("http://localhost:3000/user/login", data)
        return response.data
        console.log(response.data);
    } catch (error) {
        return thunkApi.rejectWithValue(
            error.response?.data || { message: "Login failed" }
        )
    }
})


export const logoutUser = createAsyncThunk("user/logout", async (_, thunkApi) => {
    try {
        const token = localStorage.getItem("token")
        if (token) {
            await axios.delete("http://localhost:3000/user/logout", {
                headers: { Authorization: `Bearer ${token}` }
            })
        }
        return true
    } catch (error) {
        return thunkApi.rejectWithValue(
            error.response?.data || { message: "Logout failed" }
        )
    }
})

export const editProfile = createAsyncThunk("user/editProfile", async (data, thunkApi) => {
    try {
        const token = localStorage.getItem("token");

        const response = await axios.put("http://localhost:3000/user/edit", data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(
            error.response?.data || { message: "Edit profile failed" }
        );
    }
}
);



const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.registerLoading = true
                state.error = null
            })
            .addCase(registerUser.fulfilled, (state) => {
                state.registerLoading = false
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.registerLoading = false
                state.error = action.payload?.message || "Registration failed"
            })


            .addCase(verifyUser.pending, (state) => {
                state.verifyLoading = true
                state.error = null
            })
            .addCase(verifyUser.fulfilled, (state) => {
                state.verifyLoading = false;

                if (state.user) {
                    state.user.verified = true;
                    state.isVerified = true;
                    localStorage.setItem(
                        "user",
                        JSON.stringify(state.user)
                    );
                }
            })
            .addCase(verifyUser.rejected, (state, action) => {
                state.verifyLoading = false
                state.error = action.payload?.message || "Verification failed"
            })


            .addCase(loginUser.pending, (state) => {
                state.loginLoading = true
                state.error = null
            })
            
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loginLoading = false;

                if (!action.payload?.data) {
                    state.error = action.payload?.message || "Login failed";
                    return;
                }

                const user = action.payload.data;

                if (!user.verified) {
                    state.error = "Complete email verification then login";
                    return;
                }

                const userData = {
                    _id: user._id,
                    userName: user.userName,
                    email: user.email,
                    phone: user.phone,
                    role: user.role,
                    avatar: user.avatar,
                    verified: user.verified
                };

                state.user = userData;
                state.token = action.payload.accessToken;
                state.isAuthenticated = true;
                state.isVerified = true;

                localStorage.setItem("token", state.token);
                localStorage.setItem("user", JSON.stringify(userData));
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loginLoading = false
                state.error = action.payload?.message || "Login failed"
            })


            .addCase(logoutUser.pending, (state) => {
                state.logoutLoading = true
                state.error = null
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null
                state.token = null
                state.isAuthenticated = false
                state.isVerified = false
                localStorage.removeItem("token")
                localStorage.removeItem("user")
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.logoutLoading = false
                state.error = action.payload?.message || "Logout failed"
            })


            .addCase(editProfile.pending, (state) => {
                state.editLoading = true
                state.error = null;
            })
            .addCase(editProfile.fulfilled, (state, action) => {
                state.editLoading = false
                const updatedUser = action.payload?.data;

                if (updatedUser) {
                    state.user = {
                        ...state.user,
                        ...updatedUser,
                    };

                    localStorage.setItem("user", JSON.stringify(state.user));
                }
            })
            .addCase(editProfile.rejected, (state, action) => {
                state.editLoading = false
                state.error = action.payload?.message || "Edit profile failed";
            })

    }
})

export default userSlice.reducer