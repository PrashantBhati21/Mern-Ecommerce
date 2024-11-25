import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // Local cart state

  // Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle Add to Cart
  const handleAddToCart = () => {
    setCart((prevCart) => [...prevCart, product]);
    toast.success(`${product.title} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        <p className="ml-4 text-blue-500">Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center text-gray-500">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ToastContainer /> {/* Include the ToastContainer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-64 h-64 object-cover rounded"
          />
        </div>
        <div>
          <h1 className="text-3xl font-semibold mb-4">{product.title}</h1>
          <p className="text-gray-500 text-sm mb-2">{product.category}</p>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-xl font-bold text-blue-500 mb-4">
            ${product.price}
          </p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500 mr-1">★</span>
            <span>
              {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
