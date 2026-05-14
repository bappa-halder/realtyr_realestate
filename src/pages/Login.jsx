import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/userSlice";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PasswordToggle from "../hooks/PasswordToggle";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error } = useSelector((state) => state.user);
    const {showPassword, togglePassword} = PasswordToggle()
const [formData, setFormData] = useState({
    email: "",
    password: ""
})

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await dispatch(loginUser(formData)).unwrap()
        toast.success("Login successful 🎉");
        navigate("/")
    } catch (error) {
        toast.error(err || "Login failed");
    }
}
return (
    <>
        <div className="px-4 h-dvh flex justify-center items-center bg-[url(./assets/login_bg.webp)] bg-cover bg-center">
            <div className="border bg-[#00000087] p-6 rounded w-full max-w-[400px]">
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="Enter your email id" className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white" />
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"} value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} placeholder="Enter password" className="w-full py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white" />
                        <button type="button" onClick={togglePassword} className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-sm" > {showPassword ? <EyeOff size={20} /> : <Eye size={20} />} </button>
                    </div>
                    {error && (
                        <p className="text-red-500 text-sm text-center">
                            {error}
                        </p>
                    )}
                    <button type="submit" className="py-2 bg-indigo-500 hover:bg-indigo-600 transition duration-300 ease-in-out text-white rounded">Login</button>
                </form>
                <p className="text-center text-white text-sm mt-4">Don't have an account? <Link to="/signup" className="underline underline-offset-1">Register</Link></p>
            </div>
        </div>
    </>
)
}

export default Login