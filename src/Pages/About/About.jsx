import imageAI from "../../../img/Online Shopping Joy.png";

const About = () => {
  return (
    <div className="min-h-screen bg-[#08090d] text-white overflow-hidden cursor-pointer">
      <section className="relative px-6 pt-24 pb-20">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-600/20 blur-[120px] rounded-full"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <span className="inline-block px-4 py-2 mb-5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm">
            ✦ About Our Project
          </span>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            We Build
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}
              Digital Experiences
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-7 text-gray-400 text-lg leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            commodi recusandae soluta, officiis repudiandae minus nostrum ipsum
            veritatis voluptatum vel repellendus.
          </p>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 blur-3xl group-hover:opacity-30 transition duration-500"></div>

            <div className="relative p-3 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl">
              <img
                src={imageAI}
                alt="Online Shopping"
                className="w-full rounded-2xl object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div>
            <span className="text-blue-400 text-sm font-semibold tracking-widest uppercase">
              Who We Are
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
              Creating simple things,
              <br />
              <span className="text-gray-500">in a better way.</span>
            </h2>

            <p className="text-gray-400 leading-8 text-[17px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              impedit libero modi animi ullam sapiente adipisci neque harum, ad
              at, laudantium corrupti, soluta repellendus ut quo consectetur
              nihil nobis exercitationem.
            </p>

            <p className="text-gray-400 leading-8 text-[17px] mt-5">
              In porro a est hic quas inventore ullam rerum corporis animi
              praesentium. Cupiditate dicta beatae odit.
            </p>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <h3 className="text-2xl font-bold text-white">100+</h3>
                <p className="text-sm text-gray-500 mt-1">Projects</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <h3 className="text-2xl font-bold text-white">50+</h3>
                <p className="text-sm text-gray-500 mt-1">Clients</p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <h3 className="text-2xl font-bold text-white">24/7</h3>
                <p className="text-sm text-gray-500 mt-1">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#08090d]">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Built with passion.
            <span className="text-blue-500"> Designed for you.</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-500 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            adipisci neque minus exercitationem repellat deserunt.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
