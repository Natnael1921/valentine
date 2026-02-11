import { motion } from "framer-motion";

export default function Greeting({ next }) {
  const name = import.meta.env.VITE_NAME || "name";

  return (
    <div className="screen greeting">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi {name} 💖
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        I made something special just for you...
      </motion.p>

      <motion.button
        className="btn-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={next}
      >
        Start 💌
      </motion.button>
    </div>
  );
}
