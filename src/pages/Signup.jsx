import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/userSlice";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import usePasswordToggle from "../hooks/usePasswordToggle";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.user);
  const { showPassword, togglePassword } = usePasswordToggle()
  const [formData, setFormData] = useState({
    userName: "",
    phone: "",
    email: "",
    password: "",
    avatar: null,
  });

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      setFormData({ ...formData, avatar: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("userName", formData.userName);
      data.append("phone", formData.phone);
      data.append("email", formData.email);
      data.append("password", formData.password);
      if (formData.avatar) {
        data.append("avatar", formData.avatar);
      }

      await dispatch(registerUser(data)).unwrap();
      toast.success("Registered! Verify your email 📩");
      navigate("/login");
    } catch (error) {
      toast.error(typeof error === "string" ? error : error?.message || "Signup failed");
    }
  };

  return (
    <>
      <div className="px-4 h-dvh flex justify-center items-center bg-[url(./assets/signup_bg.webp)] bg-cover bg-center">
        <div className="border bg-[#00000087] p-6 rounded w-full max-w-[400px]">
          <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-3 ">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              required
              className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white"
            />

            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white"
              />
              <button type="button" onClick={togglePassword} className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-sm">
                {showPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>

            <input
              type="file"
              name="avatar"
              accept="image/png, image/jpeg"
              onChange={handleChange}
              className="text-sm text-white"
            />

            <button type="submit" className="py-2 bg-indigo-500 hover:bg-indigo-600 transition duration-300 ease-in-out text-white rounded">
              {loading ? "Registering..." : "Register"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
          <p className="text-center text-white text-sm mt-4">Already have an account? <Link to="/login" className="underline underline-offset-1">Login</Link></p>
        </div>
      </div>
    </>

  );
};

export default Signup;
