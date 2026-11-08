import { useEffect, useState } from "react";

export default function Scroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-[999]
        w-14 h-14
        flex items-center justify-center
        rounded-2xl
        border border-blue-500/30
        bg-[#10101b]/90
        backdrop-blur-md
        text-blue-400
        text-2xl font-bold
        shadow-lg shadow-blue-500/10
        transition-all duration-300 ease-out

        hover:-translate-y-1
        hover:bg-blue-600
        hover:text-white
        hover:border-blue-400
        hover:shadow-xl hover:shadow-blue-500/30

        ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-y-5 pointer-events-none"
        }
      `}
    >
      ↑
    </button>
  );
}