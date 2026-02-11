import { useState } from "react";
import Greeting from "./pages/Greeting";
import Questions from "./pages/Questions";
import Qualified from "./pages/Qualified";
import Valentine from "./pages/Valentine";
import YesPage from "./pages/YesPage";
import "./styles/main.css";
import Hearts from "./components/Hearts";

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && <Greeting next={() => setStep(1)} />}
      {step === 1 && <Questions next={() => setStep(2)} />}
      {step === 2 && <Qualified next={() => setStep(3)} />}
      {step === 3 && <Valentine next={() => setStep(4)} />}
      {step === 4 && <YesPage />}
      <Hearts />
    </>
  );
}
