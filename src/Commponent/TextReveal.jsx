import { motion } from "framer-motion";

export default function TextReveal({ text }) {
  const words = text.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(6px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="flex flex-wrap justify-center text-center gap-2"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordAnimation}
          className="text-3xl md:text-5xl font-bold cursor-pointer text-white hover:text-blue-600"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
