import { motion } from "framer-motion";

export default function Qualified({ next }) {
  const name = import.meta.env.VITE_NAME || "name";

  return (
    <div className="screen">
      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Congrats {name} 😏
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        You answered my questions…  
        Now you are qualified for my last question 💖
      </motion.p>

      <motion.button
        className="btn-glow"
        whileHover={{ scale: 1.1 }}
        onClick={next}
      >
        Continue 💌
      </motion.button>
    </div>
  );
}
