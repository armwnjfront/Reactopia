import { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router";
import Button from "../../UI/Button";

const Producttwo = () => {
  const param = useParams();

  const [producttwo, setProducttwo] = useState({
    loading: true,
    error: "",
    data: {
      title: "",
      description: "",
      image: "",
      price: "",
    },
  });

  useEffect(() => {
    setProducttwo((prev) => ({
      ...prev,
      loading: true,
      error: "",
    }));

    (async () => {
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/${param.id}`
        );

        if (!res.ok) {
          throw new Error("This product was not found!");
        }

        const data = await res.json();

        setProducttwo({
          loading: false,
          error: "",
          data: {
            title: data.title,
            description: data.description,
            image: data.image,
            price: data.price,
          },
        });
      } catch (error) {
        setProducttwo({
          loading: false,
          error: error.message,
          data: {
            title: "",
            description: "",
            image: "",
            price: "",
          },
        });
      }
    })();
  }, [param.id]);

  // Loading
  if (producttwo.loading) {
    return (
      <div className="min-h-screen bg-[#080812] flex flex-col justify-center items-center gap-4">
        <FaSpinner
          className="animate-spin text-blue-500"
          size={45}
        />

        <p className="text-gray-400 text-sm">
          Loading product...
        </p>
      </div>
    );
  }

  // Error
  if (producttwo.error) {
    return (
      <div className="min-h-screen bg-[#080812] flex justify-center items-center px-6">
        <div className="bg-[#10101b] border border-red-500/20 rounded-3xl p-8 text-center shadow-xl">
          <p className="text-red-400 text-xl">
            {producttwo.error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="relative min-h-screen bg-[#080812] py-20 px-6 overflow-hidden cursor-pointer">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full" />

      {/* Product Card */}
      <div
        className="
          relative
          max-w-5xl
          mx-auto
          bg-[#10101b]/90
          backdrop-blur-xl
          border border-white/10
          rounded-[2rem]
          p-6 md:p-10
          shadow-2xl
          hover:border-blue-500/30
          transition-all duration-300
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Product Image */}
          <div
            className="
              h-[380px]
              flex items-center justify-center
              rounded-3xl
              bg-white/5
              border border-white/5
              overflow-hidden
              group
            "
          >
            <img
              className="
                w-[300px]
                h-[300px]
                object-contain
                transition-transform duration-500
                group-hover:scale-110
              "
              src={producttwo.data.image}
              alt={producttwo.data.title}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col">

            <p className="text-blue-400 text-sm uppercase tracking-[0.2em] mb-4">
              Product Details
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
              {producttwo.data.title}
            </h1>

            <p className="text-gray-400 text-sm md:text-base leading-7 mb-8">
              {producttwo.data.description}
            </p>

            {/* Price */}
            <div className="mb-8">
              <p className="text-gray-500 text-sm mb-1">
                Price
              </p>

              <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                ${producttwo.data.price}
              </p>
            </div>

            {/* Button */}
            <div className="w-full">
              <Button />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Producttwo;
