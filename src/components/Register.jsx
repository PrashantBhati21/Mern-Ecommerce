import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Email validation using regex
  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const existingData = JSON.parse(localStorage.getItem("signupData")) || [];

      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      existingData.push(newUser);
      localStorage.setItem("signupData", JSON.stringify(existingData));

      toast.success("Signup successful!", { position: "top-center" });

      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      navigate("/login");
    } else {
      toast.error("Please fix the errors in the form", {
        position: "top-center",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center min-h-screen bg-gray-100"
      >
        <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center text-gray-800">
            Signup
          </h2>
          <div className="mt-6">
            <div>
              <label className="block text-sm text-gray-600">Username</label>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name}
                placeholder="Type your username"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <div className="text-red-600">{errors.name}</div>}
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Type your email"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && (
                <div className="text-red-600">{errors.email}</div>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600">
                Create Password
              </label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={formData.password}
                placeholder="Create password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.password && (
                <div className="text-red-600">{errors.password}</div>
              )}
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-600">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={formData.confirmPassword}
                placeholder="Confirm password"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.confirmPassword && (
                <div className="text-red-600">{errors.confirmPassword}</div>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-6 text-white bg-gradient-to-r from-blue-400 to-pink-500 rounded-md hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Signup
            </button>
          </div>
          <div className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </div>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default Register;
