import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/userSlice";
import toast from "react-hot-toast";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { error } = useSelector((state) => state.user);
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            await dispatch(loginUser(data)).unwrap();
            toast.success("Login successful 🎉");
            navigate("/");
        } catch (err) {
            toast.error(err || "Login failed");
        }
    };
    return (
        <>
            <div className="px-4 h-dvh flex justify-center items-center bg-[url(./assets/login_bg.webp)] bg-cover bg-center">
                <div className="border bg-[#00000087] p-6 rounded w-full max-w-[400px]">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                        <input type="email" {...register("email")} placeholder="Enter your email id" className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white" />
                        <input type="password" {...register("password")} placeholder="Enter password" className="py-2 ps-2 border rounded bg-transparent text-sm outline-none text-white placeholder:text-white" />
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