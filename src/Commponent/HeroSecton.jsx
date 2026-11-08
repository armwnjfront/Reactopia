import { motion } from "framer-motion";
import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section className="relative z-10 w-full flex justify-center items-center px-6 cursor-pointer">
      
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="relative text-center max-w-4xl">

        
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            inline-flex
            items-center
            gap-2
            px-4 py-2
            mb-7
            rounded-full
            border border-blue-500/20
            bg-blue-500/5
            backdrop-blur-md
            text-blue-400
            text-xs md:text-sm
          "
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          Your next shopping experience starts here
        </motion.div>


       
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            text-6xl
            sm:text-7xl
            md:text-8xl
            font-extrabold
            tracking-[0.12em]
            bg-clip-text
            text-transparent
            bg-gradient-to-r
            from-blue-400
            via-indigo-400
            to-purple-500
          "
        >
          WELCOME
        </motion.h1>


        
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
            mt-5
            text-2xl
            md:text-4xl
            font-bold
            text-white
          "
        >
          Discover. Choose. Enjoy.
        </motion.h2>


      
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="
            mt-6
            max-w-2xl
            mx-auto
            text-sm
            md:text-base
            leading-7
            text-slate-400
          "
        >
          Explore a collection of products designed to make your everyday
          life better. Find what you need, discover something new, and enjoy
          a simple and smooth shopping experience.
        </motion.p>


       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="
            mt-9
            flex
            flex-col
            sm:flex-row
            justify-center
            items-center
            gap-4
          "
        >

      
          <Link to="/products">
            <button
              className="
                group
                relative
                overflow-hidden
                px-8 py-3.5
                rounded-xl
                font-semibold
                text-white
                bg-gradient-to-r
                from-blue-600
                to-purple-600
                shadow-lg
                shadow-blue-600/20
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
                hover:shadow-purple-600/30
                active:translate-y-0
              "
            >
              <span className="relative z-10">
                Explore Products →
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
                  group-hover:translate-x-full
                "
              />
            </button>
          </Link>


          
          <Link to="/about">
            <button
              className="
                px-8 py-3.5
                rounded-xl
                font-semibold
                text-slate-300
                border border-white/10
                bg-white/5
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-white/10
                hover:text-white
                hover:border-blue-500/30
              "
            >
              Learn More
            </button>
          </Link>

        </motion.div>


       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="
            mt-12
            flex
            flex-wrap
            justify-center
            items-center
            gap-3
          "
        >

          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400">
            ⚡ Fast Experience
          </div>

          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400">
            🔒 Secure Shopping
          </div>

          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400">
            ✦ Quality Products
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;