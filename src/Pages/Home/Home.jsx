import { Link } from "react-router";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../setting.css";
import Section from "../../Commponent/Section";
import WhyUs from "../../Commponent/WhyUs";
import Testimonials from "../../Commponent/Testimonials";
import Scroll from "../../Commponent/Scroll";

import FancyCard from "../../Commponent/Card";
import TextReveal from "../../Commponent/TextReveal";
import Footer from "../../Commponent/Footer";
import HeroSection from "../../Commponent/HeroSecton";

const Home = () => {
  return (
    <div className="bg-[#080812] text-white overflow-hidden">
      <section className="relative min-h-[680px] flex items-center justify-center px-6">
        <div className="absolute top-[-180px] left-[-100px] w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[130px]" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[130px]" />
        <HeroSection />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </section>

      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Section />
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <WhyUs />
        </div>
      </section>

      <section className="relative py-16">
        <div className="max-w-7xl mx-auto px-6">
          <Testimonials />
        </div>
      </section>

      <section className="py-10">
        <Scroll />
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-[0.25em]">
            Featured
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            Explore Our Collection
          </h2>

          <p className="mt-3 text-slate-400">
            Discover some of our featured products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          <FancyCard
            image="/img/shose.jpg"
            h3="Premium Shoes"
            title="Discover modern styles designed for comfort and everyday use."
          />

          <FancyCard
            image="/img/shose.jpg"
            h3="New Collection"
            title="Explore our latest collection and find something you love."
          />

          <FancyCard
            image="/img/shose.jpg"
            h3="Best Sellers"
            title="Check out the products that our customers love the most."
          />
        </div>
      </section>

      <section className="relative min-h-[65vh] flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent" />

        <div className="relative z-10 max-w-5xl text-center">
          <TextReveal text="We don’t just build websites. We build experiences." />
        </div>
      </section>
    </div>
  );
};

export default Home;
