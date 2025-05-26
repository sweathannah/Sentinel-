import React, { useRef, useState } from "react";

const EmergencyAlert = ({ onClose }) => {
  const timerRef = useRef(null);
  const [holding, setHolding] = useState(false);

  const startPress = () => {
    setHolding(true);
    timerRef.current = setTimeout(() => {
      alert("🚨 Emergency triggered!");
      setHolding(false);
      onClose();
    }, 3000); // 3 seconds
  };

  const cancelPress = () => {
    setHolding(false);
    clearTimeout(timerRef.current);
  };

  return (
    <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
        <article className="bg-white py-[2.125rem] px-[1.5rem] rounded-xl shadow-lg w-[90%] max-w-md relative animate-fadeIn">
            <div className="flex flex-row justify-between">
                <p className="text-sm font-semibold mb-4 text-gray-700">🚨 Emergency Alert</p>
                {/* Close Button */}
                <button
                onClick={onClose}
                className="absolute top-3 right-4 text-xl text-red-500 hover:text-red-700"
                >
                &times;
                </button>

            </div>

            <div className="flex flex-col items-center justify-center">

            <div
                className={`w-32 h-32 bg-[#2545FF] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md transition-all duration-300 ${
                holding ? "scale-110 bg-red-600" : ""
                }`}
                onMouseDown={startPress}
                onMouseUp={cancelPress}
                onMouseLeave={cancelPress}
                onTouchStart={startPress}
                onTouchEnd={cancelPress}
            >
                SOS
            </div>

            <p className="mt-4 text-sm text-gray-600 text-center">
                Press and hold for <span className="text-[#2545FF] font-medium">3 seconds</span> to confirm. Releasing early cancels.
            </p>
            </div>
        </article>
    </section>
  );
};

export default EmergencyAlert;
