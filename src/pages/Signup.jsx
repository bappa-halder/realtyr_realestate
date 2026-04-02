import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../features/userSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import {  userSchema } from "../validation/userSchema";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(userSchema) });
  const { loading, error } = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      formData.append("userName", data.userName);
      formData.append("phone", data.phone);
      formData.append("email", data.email);
      formData.append("password", data.password);

      if (data.avatar && data.avatar[0]) {
        formData.append("avatar", data.avatar[0]);
      }

      await dispatch(registerUser(formData)).unwrap();
      toast.success("Registered! Verify your email 📩");
      navigate("/login");
    } catch (error) {
      toast.error(error?.message || "Signup failed");
    }
  };

  return (
    <>
      <div className="px-4 h-dvh flex justify-center items-center bg-[url(./assets/signup_bg.webp)] bg-cover bg-center">
        <div className="border bg-[#00000087] p-6 rounded w-full max-w-[400px]">
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="flex flex-col gap-3 ">
          <div className="flex flex-col">
            <input
              type="text"
              {...register("userName")}
              placeholder="Username"
              className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white"
            />
            <p className="error">{errors.userName?.message}</p>
          </div>
          <div>
            <input
              type="text"
              {...register("phone")}
              placeholder="Phone"
              className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white"
            />
            <p className="error">{errors.phone?.message}</p>
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              {...register("email")}
              placeholder="Email"
              className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white"
            />
            <p className="error">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <input
              type="password"
              {...register("password")}
              placeholder="Password"
              className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white"
            />
            <p className="error">{errors.password?.message}</p>
          </div>
          <div className="flex flex-col">
            <input
              type="file"
              {...register("avatar")}
              className="text-sm text-white"
            />
            <p className="error">{errors.avatar?.message}</p>
          </div>

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
