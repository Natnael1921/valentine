import { useState } from "react";
import { motion } from "framer-motion";

export default function Questions({ next }) {
  const name = import.meta.env.VITE_NAME || "name";

  const questions = [
    {
      q: import.meta.env.VITE_Q1,
      a: [
        import.meta.env.VITE_Q1_A1,
        import.meta.env.VITE_Q1_A2,
        import.meta.env.VITE_Q1_A3
      ],
      correct: import.meta.env.VITE_Q1_CORRECT
    },
    {
      q: import.meta.env.VITE_Q2,
      a: [
        import.meta.env.VITE_Q2_A1,
        import.meta.env.VITE_Q2_A2,
        import.meta.env.VITE_Q2_A3
      ],
      correct: import.meta.env.VITE_Q2_CORRECT
    },
    {
      q: import.meta.env.VITE_Q3,
      a: [
        import.meta.env.VITE_Q3_A1,
        import.meta.env.VITE_Q3_A2,
        import.meta.env.VITE_Q3_A3
      ],
      correct: import.meta.env.VITE_Q3_CORRECT
    }
  ];

  const [index, setIndex] = useState(0);
  const [messages, setMessages] = useState([
    { from: "me", text: `Hey ${name}, I have some questions 😏` },
    { from: "me", text: "Answer honestly please 💖" },
    { from: "me", text: questions[0].q }
  ]);
  const [locked, setLocked] = useState(false);

  const handleAnswer = (answer) => {
    if (locked) return;
    setLocked(true);

    const isCorrect = answer === questions[index].correct;
    const feedback = isCorrect
      ? "Aww you remembered 🥺💖"
      : "Hmm that's wrong 😏 but still cute";

    setMessages(prev => [
      ...prev,
      { from: "her", text: answer },
      { from: "me", text: feedback }
    ]);

    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex(prev => prev + 1);
        setMessages(prev => [...prev, { from: "me", text: questions[index + 1].q }]);
        setLocked(false);
      } else {
        setTimeout(next, 1500);
      }
    }, 1500);
  };

  return (
    <div className="chat-screen">
      <div className="chat-box">
        {messages.map((m, i) => (
          <motion.div
            key={i}
            className={`chat-bubble ${m.from}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {m.text}
          </motion.div>
        ))}

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
