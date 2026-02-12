import { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import correctSound from "../assets/correct.mp3";
import wrongSound from "../assets/wrong.mp3";

export default function Questions({ next }) {
  const name = import.meta.env.VITE_NAME || "name";

  // 💖 Heart Explosion
  const heartExplosion = () => {
    confetti({
      particleCount: 80,
      spread: 120,
      origin: { y: 0.6 },
      scalar: 1.2,
      colors: ["#ff2d55", "#ff6f91", "#ffc1cc"]
    });
  };

  // 🔊 Sounds
  const playCorrect = () => new Audio(correctSound).play();
  const playWrong = () => new Audio(wrongSound).play();

  const questions = [
    {
      q: import.meta.env.VITE_Q1,
      a: [
        import.meta.env.VITE_Q1_A1,
        import.meta.env.VITE_Q1_A2,
        import.meta.env.VITE_Q1_A3,
      ],
      correct: import.meta.env.VITE_Q1_CORRECT,
    },
    {
      q: import.meta.env.VITE_Q2,
      a: [
        import.meta.env.VITE_Q2_A1,
        import.meta.env.VITE_Q2_A2,
        import.meta.env.VITE_Q2_A3,
      ],
      correct: import.meta.env.VITE_Q2_CORRECT,
    },
    {
      q: import.meta.env.VITE_Q3,
      a: [
        import.meta.env.VITE_Q3_A1,
        import.meta.env.VITE_Q3_A2,
        import.meta.env.VITE_Q3_A3,
      ],
      correct: import.meta.env.VITE_Q3_CORRECT,
    },
  ];

  const [index, setIndex] = useState(0);
  const [messages, setMessages] = useState([
    { from: "me", text: `Hey ${name}, I have some questions 😏` },
    { from: "me", text: "Answer honestly please 💖" },
    { from: "me", text: questions[0].q },
  ]);

  const [locked, setLocked] = useState(false);
  const [typing, setTyping] = useState(false);

  const handleAnswer = (answer) => {
    if (locked) return;
    setLocked(true);

    const isCorrect = answer === questions[index].correct;
    const feedback = isCorrect
      ? "Aww you remembered 🥺💖"
      : "Hmm that's wrong 😏 but still cute";

    // Show her answer
    setMessages(prev => [...prev, { from: "her", text: answer }]);
    setTyping(true);

    //  Typing delay
    setTimeout(() => {
      if (isCorrect) {
        heartExplosion();
        playCorrect();
      } else {
        playWrong();
      }

      setMessages(prev => [
        ...prev,
        { from: "me", text: feedback, wrong: !isCorrect }
      ]);

      setTyping(false);

      // Next question delay
      setTimeout(() => {
        if (index < questions.length - 1) {
          const nextIndex = index + 1;
          setIndex(nextIndex);
          setMessages(prev => [
            ...prev,
            { from: "me", text: questions[nextIndex].q }
          ]);
          setLocked(false);
        } else {
          setTimeout(next, 1500);
        }
      }, 1200);

    }, 3000); // 3 sec typing delay
  };

  return (
    <div className="chat-screen">
      <div className="chat-box">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            className={`chat-bubble ${m.from} ${m.wrong ? "wrong" : ""}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {m.text}
          </motion.div>
        ))}

        {typing && (
          <motion.div
            className="chat-bubble me typing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Typing...
          </motion.div>
        )}

        {!locked && index < questions.length && (
          <div className="reply-box">
            {questions[index].a.map((ans, i) => (
              <button key={i} onClick={() => handleAnswer(ans)}>
                {ans}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
