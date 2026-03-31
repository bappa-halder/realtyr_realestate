import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.svg"
import toast from "react-hot-toast";
import { editProfile, logoutUser } from "../features/userSlice";
import edit from "../assets/edit.png"

const Navbar = () => {
  const dispatch = useDispatch()
  const API = import.meta.env.VITE_API_URL;
  const navigate = useNavigate()
  const fileInputRef = useRef(null)
  const [profile, setProfile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.user)
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser())
      toast.success("Logout successfully")
      navigate("/")
    } catch (error) {
      toast.error(error || "Logout failed")
    }
  }

  const handleEditClick = () => {
    fileInputRef.current.click()
  }
  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const formData = new FormData()
    formData.append("avatar", file)
    dispatch(editProfile(formData))
  }

  return (
    <>
      <nav className="border-b border-gray-300">
        <div className="container mx-auto flex justify-between items-center h-[70px] px-4">

          <div className="max-w-[115px]">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>

          <div className="hidden md:flex gap-7">
            <Link to="/" className="navlink">Home</Link>
            <Link to="/about" className="navlink">About us</Link>
            <Link to="/properties" className="navlink">Properties</Link>
            {
              user && (
                <Link to="/wishlist" className="navlink">Wishlist</Link>
              )
            }
            <Link to="/contact" className="navlink">Contact us</Link>
          </div>

          <div className="flex items-center gap-4 relative">





            {!user ? (
              <div className="space-x-4">
                <Link to="/login" className="navlink">Login</Link>
              </div>
            ) : (
              <div className="space-x-4 flex items-center">
                <div className="profile relative w-[32px] h-[32px] rounded-full border">
                  <button onClick={() => { setProfile(!profile) }} className="absolute w-[26px] h-[26px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={
                      user.avatar
                        ? user.avatar.startsWith("http")
                          ? user.avatar.replace("http://localhost:3000", API)
                          : `${API}/upload/${user.avatar}`
                        : `${API}/upload/default.png`
                    } alt="user" className="object-cover rounded-full" />
                  </button>
                  {
                    profile && (
                      <div className="absolute top-10 right-0 border flex flex-col items-center p-4 rounded-lg bg-white z-10">
                        <div className="relative w-[42px] h-[42px] rounded-full mb-2">
                          <img src={user.avatar} alt="" className="w-[100%] h-[100%] rounded-full object-cover" />
                          <button onClick={handleEditClick} className="absolute right-0 bottom-0 w-[20px] h-[20px] rounded-full bg-white flex justify-center items-center">
                            <img src={edit} alt="" className="w-[80%] h-[80%] object-contain" />
                          </button>
                          <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" />
                        </div>
                        <p className="text-sm">{user.userName} <span className="text-xs">( {user.role} )</span></p>
                        <p className="text-sm my-1">{user.email}</p>
                        <p className="text-sm">+91 {user.phone}</p>
                      </div>
                    )
                  }
                </div>
                <button onClick={handleLogout} className="text-red-400 hover:text-white border border-red-400 px-3 py-1 rounded hover:bg-red-400 transition duration-300 ease-in-out">
                  Logout
                </button>
              </div>
            )}




            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl"
            >
              {menuOpen ? (<i className="fa-solid fa-xmark"></i>) : (<i className="fa-solid fa-bars"></i>)}
            </button>



          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-gray-300 bg-white">
            <div className="flex flex-col gap-4 px-4 py-6">
              <Link to="/" onClick={() => setMenuOpen(false)} className="navlink">Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="navlink">About us</Link>
              <Link to="/properties" onClick={() => setMenuOpen(false)} className="navlink">Properties</Link>
              {
                user && (
                  <Link to="/wishlist" onClick={() => setMenuOpen(false)} className="navlink">Wishlist</Link>
                )
              }
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="navlink">Contact us</Link>
            </div>
          </div>
        )}
      </nav>





    </>
  )
}

export default Navbar