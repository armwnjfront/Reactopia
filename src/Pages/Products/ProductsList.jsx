import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router";
import Scroll from "../../Commponent/Scroll";
//https://fakestoreapi.com/products//

const ProductsList = () => {
  const [products, setProducts] = useState({
    loading: true,
    error: "",
    data: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");

        if (!res.ok) {
          throw new Error("خطا در دریافت محصولات");
        }

        const data = await res.json();

        setProducts({
          loading: false,
          error: "",
          data: [...data],
        });
      } catch (error) {
        setProducts({
          loading: false,
          error: error.message,
          data: [],
        });
      }
    })();
  }, []);

  // Loading
  if (products.loading) {
    return (
      <div className="min-h-screen bg-[#080812] flex flex-col justify-center items-center gap-4">
        <FaSpinner
          className="animate-spin text-blue-500"
          size={45}
        />

        <p className="text-gray-400 text-sm">
          Loading products...
        </p>
      </div>
    );
  }

  // Error
  if (products.error) {
    return (
      <div className="min-h-screen bg-[#080812] flex justify-center items-center px-6 py-4">
        <div className="bg-[#10101b] border border-red-500/20 rounded-3xl p-8 text-center shadow-xl">
          <p className="text-red-400 text-2xl font-bold">
            {products.error}
          </p>

          <p className="text-gray-500 text-sm mt-4">
            Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative min-h-screen bg-[#080812] py-20 px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full" />

        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full" />

        {/* Header */}
        <div className="relative text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
            Our Store
          </p>

          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Explore Products
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            Discover our collection and find something you love.
          </p>
        </div>

        {/* Products */}
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

          {products.data.map((product) => {
            return (
              <div
                key={product.id}
                className="
                  group
                  relative
                  flex flex-col
                  bg-[#10101b]/90
                  backdrop-blur-xl
                  border border-white/10
                  rounded-3xl
                  p-5
                  overflow-hidden
                  shadow-xl
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:border-blue-500/40
                  hover:shadow-blue-500/10
                "
              >
                {/* Image */}
                <div className="relative h-[260px] flex items-center justify-center rounded-2xl bg-white/5 overflow-hidden">
                  <img
                    className="
                      w-[210px]
                      h-[210px]
                      object-contain
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                {/* Category */}
                <p className="text-blue-400 text-xs uppercase tracking-wider mt-5">
                  {product.category}
                </p>

                {/* Title */}
                <h2 className="text-white text-lg font-semibold line-clamp-2 mt-2 min-h-[56px]">
                  {product.title}
                </h2>

                
                <div className="flex items-center justify-between gap-3 mt-5">

                  <span className="text-xl font-bold text-white">
                    ${product.price}
                  </span>

                  <Link
                    to={`/products/${product.id}`}
                    className="
                      px-4 py-2
                      rounded-xl
                      bg-gradient-to-r from-blue-600 to-indigo-600
                      text-white
                      text-sm font-semibold
                      shadow-lg shadow-blue-500/20
                      transition-all duration-300
                      hover:from-blue-500
                      hover:to-purple-500
                      hover:-translate-y-0.5
                    "
                  >
                    Read more
                  </Link>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      <Scroll />
    </>
  );
};

export default ProductsList;
