export default function WhyUs() {
  return (
    <section className="relative bg-[#080812] py-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-600/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-600/10 blur-[120px] rounded-full" />

      <div className="relative max-w-6xl w-full mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400 mb-3">
            Our Advantages
          </p>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Why Choose Us?
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
            We focus on performance, security, and a smooth experience to make
            every interaction better.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-[#10101b]/90 p-7 rounded-3xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-blue-500/10">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">⚡</span>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition">
              High Speed & Performance
            </h3>

            <p className="text-gray-400 text-sm leading-7">
              Our platform is built with modern technologies to ensure a
              smooth, fast, and lag-free experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group bg-[#10101b]/90 p-7 rounded-3xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-indigo-500/10">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🔒</span>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-400 transition">
              Excellent Security
            </h3>

            <p className="text-gray-400 text-sm leading-7">
              Your data is fully protected and handled with secure and
              encrypted standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group bg-[#10101b]/90 p-7 rounded-3xl border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-purple-500/10">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
              <span className="text-2xl">💬</span>
            </div>

            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-400 transition">
              24/7 Support
            </h3>

            <p className="text-gray-400 text-sm leading-7">
              Our support team is available anytime you need help or have
              questions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}