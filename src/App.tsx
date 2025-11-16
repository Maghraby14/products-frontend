import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category?: string;
  quantity: number;
}

export default function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState("");

  async function loadData() {
    const url = category
      ? `https://products-backend-production-0793.up.railway.app/products?category=${category}`
      : `https://products-backend-production-0793.up.railway.app/products`;

    const res = await axios.get(url);
    setProducts(res.data);
  }

  useEffect(() => {
    loadData();
  }, [category]);

  const handleAddToCart = (product: Product) => {
    console.log("Added to cart:", product);
    // You can store in localStorage, Zustand, Redux later...
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-10">
      <motion.h1
        className="text-5xl font-extrabold text-center mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Product Store
      </motion.h1>

      <div className="flex justify-center mb-10 gap-4">
        <input
          placeholder="Search by category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-64 p-3 rounded-xl border border-gray-700 bg-gray-800 shadow-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
        />
        <button
          onClick={loadData}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition shadow-xl font-semibold"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {products.map((p) => (
          <motion.div
            key={p.id}
            className="rounded-2xl overflow-hidden bg-gray-800 shadow-xl border border-gray-700 hover:scale-105 transition transform"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img src={p.image} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h2 className="text-2xl font-bold mb-2 text-purple-300">
                {p.name}
              </h2>
              <p className="text-sm text-gray-400 mb-1">
                Category: {p.category}
              </p>
              <p className="text-green-400 font-bold text-xl">${p.price}</p>

              {/* BUTTON SECTION */}
              {p.quantity === 0 ? (
                <button
                  disabled
                  className="mt-4 w-full py-2 rounded-xl bg-gray-600 text-gray-300 cursor-not-allowed"
                >
                  Out of Stock
                </button>
              ) : (
                <button
                  onClick={() => handleAddToCart(p)}
                  className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-purple-500 to-blue-600 hover:opacity-90 transition font-semibold shadow-lg"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
