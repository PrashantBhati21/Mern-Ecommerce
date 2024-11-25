import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <p className="text-2xl mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="bg-white text-blue-500 hover:text-white hover:bg-blue-700 font-bold py-2 px-6 rounded shadow-lg transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default PageNotFound;
