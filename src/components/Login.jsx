import { useState } from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const existingData = JSON.parse(localStorage.getItem("signupData")) || [];

    const user = existingData.find(
      (user) =>
        user.email === loginData.email && user.password === loginData.password
    );

    if (user) {
      toast.success("Login successful!", { position: "top-center" });
      navigate("/");
    } else {
      toast.error("Invalid email or password", { position: "top-center" });
    }
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="flex items-center justify-center min-h-screen bg-gray-100"
      >
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Login
          </h2>
          <div className="mt-6">
            <div>
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={loginData.email}
                placeholder="Enter your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={loginData.password}
                placeholder="Enter your password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-6 text-white bg-gradient-to-r from-blue-400 to-pink-500 rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Login
            </button>
            <div className="mt-4 text-center">
              <Link to="/forgot-password" className="text-blue-500">
                Forgot Password?
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-600">Or Sign Up Using</div>
          <div className="flex items-center justify-center mt-4 space-x-4">
            <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <FaFacebook />
            </button>
            <button className="w-10 h-10 rounded-full bg-blue-400 text-white flex items-center justify-center">
              <FaTwitter />
            </button>
            <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">
              <FaGoogle />
            </button>
          </div>

          <div className="mt-6 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Signup
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
