export default function Testimonials() {
  return (
    <section className="relative bg-[#080812] py-24 px-6 overflow-hidden cursor-pointer">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/4 w-80 h-80 bg-blue-600/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full" />

      <div className="relative max-w-6xl w-full mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            What Our Users Say
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            See what our users think about their experience with our platform.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="group relative bg-[#10101b]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-xl hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-300">
            <div className="absolute top-5 right-6 text-5xl text-blue-500/10 font-serif">
              “
            </div>

            <div className="flex gap-1 text-blue-400 mb-5">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-gray-300 text-sm leading-7 mb-7">
              This platform helped me improve my skills faster than I expected.
              Super smooth and easy to use!
            </p>

            <div className="border-t border-white/10 pt-5">
              <p className="text-white font-semibold text-lg">
                Michael Smith
              </p>
              <p className="text-blue-400 text-sm mt-1">
                Web Developer
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-[#10101b]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-xl hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-indigo-500/10 transition-all duration-300">
            <div className="absolute top-5 right-6 text-5xl text-indigo-500/10 font-serif">
              “
            </div>

            <div className="flex gap-1 text-indigo-400 mb-5">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-gray-300 text-sm leading-7 mb-7">
              Amazing UI and very helpful content. I learned so much in just a
              few weeks. Definitely recommend!
            </p>

            <div className="border-t border-white/10 pt-5">
              <p className="text-white font-semibold text-lg">
                Emily Carter
              </p>
              <p className="text-indigo-400 text-sm mt-1">
                UI/UX Designer
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-[#10101b]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-xl hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300">
            <div className="absolute top-5 right-6 text-5xl text-purple-500/10 font-serif">
              “
            </div>

            <div className="flex gap-1 text-purple-400 mb-5">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-gray-300 text-sm leading-7 mb-7">
              The experience is clean, fast, and very easy to understand.
              Everything feels simple and well designed.
            </p>

            <div className="border-t border-white/10 pt-5">
              <p className="text-white font-semibold text-lg">
                Alex Morgan
              </p>
              <p className="text-purple-400 text-sm mt-1">
                Front-End Developer
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="group relative bg-[#10101b]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-xl hover:-translate-y-2 hover:border-blue-500/40 hover:shadow-blue-500/10 transition-all duration-300">
            <div className="absolute top-5 right-6 text-5xl text-blue-500/10 font-serif">
              “
            </div>

            <div className="flex gap-1 text-blue-400 mb-5">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-gray-300 text-sm leading-7 mb-7">
              I really enjoyed using this platform. The design is modern and
              the overall experience feels great.
            </p>

            <div className="border-t border-white/10 pt-5">
              <p className="text-white font-semibold text-lg">
                James Wilson
              </p>
              <p className="text-blue-400 text-sm mt-1">
                Product Designer
              </p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="group relative bg-[#10101b]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-xl hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-indigo-500/10 transition-all duration-300">
            <div className="absolute top-5 right-6 text-5xl text-indigo-500/10 font-serif">
              “
            </div>

            <div className="flex gap-1 text-indigo-400 mb-5">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-gray-300 text-sm leading-7 mb-7">
              Everything works smoothly and the interface is really easy to
              navigate. A great experience overall.
            </p>

            <div className="border-t border-white/10 pt-5">
              <p className="text-white font-semibold text-lg">
                Sophia Brown
              </p>
              <p className="text-indigo-400 text-sm mt-1">
                Developer
              </p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="group relative bg-[#10101b]/90 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-xl hover:-translate-y-2 hover:border-purple-500/40 hover:shadow-purple-500/10 transition-all duration-300">
            <div className="absolute top-5 right-6 text-5xl text-purple-500/10 font-serif">
              “
            </div>

            <div className="flex gap-1 text-purple-400 mb-5">
              ★ ★ ★ ★ ★
            </div>

            <p className="text-gray-300 text-sm leading-7 mb-7">
              Great experience! The support team is always available and the
              tutorials are clear and high quality.
            </p>

            <div className="border-t border-white/10 pt-5">
              <p className="text-white font-semibold text-lg">
                Daniel Johnson
              </p>
              <p className="text-purple-400 text-sm mt-1">
                Software Engineer
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}