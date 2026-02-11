import { useEffect } from "react";
import "../styles/yes.css";
import confetti from "canvas-confetti";

export default function YesPage() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 },
    });
  }, []);
const name = import.meta.env.VITE_MY_NAME
  return (
    <div className="yes-container">
      <div className="heart-bg"></div>

      <div className="yes-card">
        <h1>💖 SHE SAID YES 💖</h1>
        <p>My favorite person confirmed...</p>
        <h2>Let’s make this Valentine’s unforgettable 💕</h2>

        <div className="yes-box">
          <span>💑</span>
          <p>Already taken by {name} — no refunds 😜</p>
        </div>

        <div className="love-quotes">
          <p>“You are my today and all of my tomorrows.”</p>
          <p>“I found my favorite person.”</p>
        </div>

        <button className="love-btn">Our Story Will Continue 💕</button>
      </div>
    </div>
  );
}
