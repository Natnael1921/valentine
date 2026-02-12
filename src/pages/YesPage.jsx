import { useEffect } from "react";
import "../styles/yes.css";
import confetti from "canvas-confetti";

export default function YesPage() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="yes-container">
      <div className="heart-bg"></div>

      <div className="yes-card">
        <h1 className="fade-in">💖 SHE SAID YES 💖</h1>
        <p className="fade-in delay-1">My favorite person confirmed...</p>

        <h2 className="fade-in delay-2">
          Relationship status: Taken by you ❤️
        </h2>

        <div className="yes-box fade-in delay-3">
          <span>💍</span>
          <p>Officially taken by YADEL 😌</p>
        </div>

        <p className="memorable-line fade-in delay-4">
          We are going to make this Valentine unforgettable 💞
        </p>

        <div className="love-quotes fade-in delay-5">
          <p>“You are my today and all of my tomorrows.”</p>
        </div>

        <button className="love-btn fade-in delay-6">
          Our Story Continues 💕
        </button>
      </div>
    </div>
  );
}
