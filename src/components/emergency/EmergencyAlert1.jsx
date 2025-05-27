import React, { useRef, useState } from "react";

const EmergencyAlert = ({ onClose }) => {
  const timerRef = useRef(null);
  const [holding, setHolding] = useState(false);

  const startPress = () => {
    setHolding(true);
    timerRef.current = setTimeout(() => {
      alert("🚨 Emergency triggered!");
      setHolding(false); // Reset holding state after trigger
      onClose();
    }, 900);
  };

  const cancelPress = () => {
    setHolding(false);
    clearTimeout(timerRef.current);
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <article className="bg-white py-[1.75rem] px-[1.5rem] rounded-xl shadow-lg w-[90%] max-w-md relative animate-fadeIn">
        <div className="flex flex-row items-center justify-between  mb-[4rem]">
          <p className="lg:text-[1.2rem] text-[1rem] gap-[0.3rem] font-semibold text-[#212121] flex flex-row items-end">
            <img src="/images/emergency/emerge.svg" alt="Emergency Alert Icon" className="lg:w-[2.5rem] w-[2rem] lg:h-[2.5rem] h-[2rem]" />
            Emergency Alert
          </p>
          {/* Close Button */}
          <button
            onClick={onClose}
          >
            <img src="/images/emergency/close.svg" alt="Close menu Icon" className="lg:w-[1.1rem] w-[1rem] lg:h-[1.1rem] h-fit" />
          </button>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div
            className={`
              relative w-[11rem] h-[11rem] bg-[#2545FF] rounded-full flex items-center justify-center
              text-[#FFFFFF] text-[2rem] font-bold shadow-md cursor-pointer select-none
              transition-all duration-300
              ${holding ? "animate-button-pulse animate-pulse-ring" : ""}
            `}
            // Important: Use onPointerDown/Up for consistent behavior across touch and mouse
            onPointerDown={startPress}
            onPointerUp={cancelPress}
            onPointerLeave={cancelPress} // For when mouse leaves while holding
          >
            SOS
          </div>

          <p className="mt-[3rem] text-[1rem] text-[#212121] font-[400] text-center">
            Press and hold for <span className="text-[#2545FF] font-medium">3 seconds</span> to confirm. Releasing early cancels.
          </p>
        </div>
      </article>
    </section>
  );
};

export default EmergencyAlert;

