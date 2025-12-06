import { useState } from "react";

export default function App() {
  const [steps, setSteps] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑"
  ];

  return (
    <div>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
      {
        isOpen && (
        <div className="steps">
        <div className="numbers">
          <div className={`${steps >= 1 ? "active" : ""}`}>1</div>
          <div className={`${steps >= 2 ? "active" : ""}`}>2</div>
          <div className={`${steps >= 3 ? "active" : ""}`}>3</div>
        </div>

        <p className="message">
          Step {steps}: {messages[steps - 1]}
        </p>
        <div className="buttons">
          <button
            onClick={steps > 1 ? () => setSteps(steps - 1) : null}
            style={{ background: "#7950f2", color: "#fff" }}
            >
            Previous
          </button>
          <button
            onClick={steps < 3 ? () => setSteps(steps + 1) : null}
            style={{ background: "#7950f2", color: "#fff" }}
            >
            Next
          </button>
        </div>
      </div>
  )}
    </div>
  );
}
