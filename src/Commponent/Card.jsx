import { motion } from "framer-motion";
import { Link } from "react-router";

export default function FancyCard({ image, title, h3 }) {
  return (
    <div className="flex items-center justify-center h-[500px]">
      <motion.div
        whileHover={{ y: -10, scale: 1.02 }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 18,
        }}
        className="
          group
          relative
          w-80
          overflow-hidden
          rounded-3xl
          border border-white/10
          bg-[#10101b]/95
          backdrop-blur-xl
          p-5
          shadow-2xl
          shadow-black/30
          cursor-pointer
          transition-all
          duration-300
          hover:border-blue-500/40
          hover:shadow-blue-500/10
        "
      >
        {/* Glow */}
        <div
          className="
            absolute
            -top-20
            -right-20
            w-40
            h-40
            rounded-full
            bg-blue-600/20
            blur-3xl
            transition-all
            duration-500
            group-hover:bg-purple-600/30
          "
        />

        {/* Image */}
        <div
          className="
            relative
            z-10
            h-48
            w-full
            overflow-hidden
            rounded-2xl
            bg-white/5
            border
            border-white/5
          "
        >
          <img
            src={image}
            alt={h3}
            className="
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />

          
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/40
              to-transparent
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />
        </div>

        {/* Content */}
        <div className="relative z-10 pt-5 text-white">

          <h3
            className="
              text-xl
              font-bold
              mb-3
              bg-gradient-to-r
              from-blue-400
              to-purple-400
              bg-clip-text
              text-transparent
            "
          >
            {h3}
          </h3>

          <p className="text-sm text-gray-400 leading-6 mb-6 line-clamp-3">
            {title}
          </p>

          {/* Button */}
          <Link
            to="/products"
            className="
              group/button
              relative
              overflow-hidden
              w-full
              flex
              items-center
              justify-center
              py-3
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              text-white
              font-semibold
              cursor-pointer
              shadow-lg
              shadow-blue-500/20
              transition-all
              duration-300
              hover:from-blue-500
              hover:to-purple-500
              hover:shadow-xl
              hover:shadow-purple-500/20
            "
          >
            <span className="relative z-10">
              Buy Now →
            </span>

            <span
              className="
                absolute
                inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/20
                to-transparent
                transition-transform
                duration-700
                group-hover/button:translate-x-full
              "
            />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}