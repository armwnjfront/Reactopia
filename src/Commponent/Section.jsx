
import image from "../../img/ChatGPT Image Dec 8, 2025, 11_47_17 AM.png";
import imaget from "../../img/buy img.png";

const Section = () => {
  return (
    <section className="relative bg-[#080812] py-20 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-[-150px] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-20 right-[-150px] w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 space-y-20">

        {/* ================= FIRST SECTION ================= */}

        <div className="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text */}
          <div className="order-2 md:order-1">

            <span className="text-sm uppercase tracking-[0.25em] text-blue-400">
              Discover
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Find What You
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                {" "}Really Want
              </span>
            </h2>

            <p className="mt-5 text-base md:text-lg leading-8 text-slate-400 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              <span className="text-blue-400 font-medium"> Discover </span>
              new products, explore different styles and find something
              that fits your needs.
            </p>

            <div className="mt-7 flex items-center gap-3">

              <div className="h-px w-10 bg-blue-500" />

              <span className="text-sm text-slate-500">
                Quality. Style. Confidence.
              </span>

            </div>

          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">

            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#11111b]">

              <img
                src={image}
                alt="Discover products"
                className="
                  w-full
                  h-[280px]
                  md:h-[380px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

          </div>

        </div>


        {/* ================= SECOND SECTION ================= */}

        <div className="group grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Image */}
          <div className="relative">

            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#11111b]">

              <img
                src={imaget}
                alt="Easy shopping"
                className="
                  w-full
                  h-[280px]
                  md:h-[380px]
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

            </div>

          </div>


          {/* Text */}
          <div>

            <span className="text-sm uppercase tracking-[0.25em] text-purple-400">
              Easy Shopping
            </span>

            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Simple.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {" "}Fast. Reliable.
              </span>
            </h2>

            <p className="mt-5 text-base md:text-lg leading-8 text-slate-400 max-w-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium id
              <span className="text-purple-400 font-medium">
                {" "}quality
              </span>
              {" "}and convenience make your shopping experience easier
              and more enjoyable.
            </p>

            <div className="mt-7 flex items-center gap-3">

              <div className="h-px w-10 bg-purple-500" />

              <span className="text-sm text-slate-500">
                Your experience matters.
              </span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Section;


