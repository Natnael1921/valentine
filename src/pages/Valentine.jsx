import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Valentine({ next }) {
  const name = import.meta.env.VITE_NAME || "name";
  const [noCount, setNoCount] = useState(0);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [yesScale, setYesScale] = useState(1);

  const messages = [
    "Are you sure? 🥺",
    "Think again 😏",
    "This hurts 😭",
    "Last chance 😈",
    "Okay you’re just teasing me 💔"
  ];

  const moveNo = () => {
    setNoCount(noCount + 1);
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setPos({ x, y });

    //  YES button grow for 0.3s
    setYesScale(1.5);
    setTimeout(() => setYesScale(1), 300);
  };

  return (
    <div className="screen valentine">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {name}, will you be my Valentine? 💖
      </motion.h1>

      <p>{messages[Math.min(noCount, messages.length - 1)]}</p>

      <div className="val-buttons">
        <motion.button
          className="btn-yes"
          animate={{ scale: yesScale }}
          whileHover={{ scale: 1.2 }}
          onClick={next}
        >
          YES 💕
        </motion.button>

        <motion.button
          className="btn-no"
          style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
          onMouseEnter={moveNo}
          onClick={moveNo}
        >
          NO 💔
        </motion.button>
      </div>
    </div>
  );
}
