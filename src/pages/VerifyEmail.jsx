import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import { verifyUser } from "../features/userSlice"
import toast from "react-hot-toast"

const VerifyEmail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const token = searchParams.get("token")

  useEffect(() => {
    const verify = async () => {
      if (!token) return

      try {
        await dispatch(verifyUser(token)).unwrap()
        toast.success("Email verified successfully 🎉");
        navigate("/login")
      } catch (err) {
        toast.error(err || "Verification failed");
        navigate("/login")
      }
    }

    verify()
  }, [dispatch, token, navigate])

  return null
}

export default VerifyEmail
