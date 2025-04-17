import { useEffect, useState, useRef } from "react";
import { toast } from "react-toastify";

const GuestReportModal = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const descriptionRef = useRef(null);

  // Load saved data and lock scroll
  useEffect(() => {
    const savedDescription = localStorage.getItem("guest-description");
    const savedLocation = localStorage.getItem("guest-location");

    if (savedDescription) setDescription(savedDescription);
    if (savedLocation) setLocation(savedLocation);

    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setIsVisible(true);
      if (descriptionRef.current) {
        descriptionRef.current.focus();
      }
    }, 10);

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const timestamp = new Date().toISOString();
    
        const reportData = {
        description,
        location,
        timestamp,
        };
    
        console.log("📝 Report Data:", reportData);
    
        alert("🎉 Your anonymous report was submitted successfully!");
    
        // Clear inputs and close modal
        setDescription("");
        setLocation("");
        handleClose();
    };
  
  return (
    <div className="fixed inset-0 z-50 lg:hidden font-poppins">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#000000] bg-opacity-60 transition-opacity duration-300"
        onClick={handleClose}
      ></div>

      {/* Slide-up Panel */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[2rem] py-[0.75rem] px-[0.875rem] shadow-lg overflow-auto transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <img
          src="/images/auth_images/grey_dash.svg"
          alt="Grey dash"
          className="w-fit m-auto mb-[2.2rem]"
        />
        <h2 className="text-[1.5rem] text-[#000000] font-semibold mb-3">
          Guest Report
        </h2>
        <p className="text-[1rem] font-normal text-[#444444] mb-[1rem]">
          Report safely without your name. Your identity remains private.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="Description"
            className="block mb-2 text-[#1E1E1E] text-[1rem] font-[600]"
          >
            What is going on?
          </label>
          <textarea
            ref={descriptionRef}
            id="Description"
            name="Description"
            placeholder="Describe what is happening"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full h-28 resize-y border border-[#D9D9D9] text-[#515151] font-normal text-[0.875rem] p-2 rounded mt-0 mb-4 focus:outline-none focus:ring-1 focus:ring-[#2545FF] focus:border-[#2545FF]"
            >
            </textarea>

          <label
            htmlFor="Location"
            className="block mb-2 text-[#1E1E1E] text-[1rem] font-[600]"
          >
            Where is this happening?
          </label>
          <input
            type="text"
            id="Location"
            name="Location"
            placeholder="Describe where it is happening"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              localStorage.setItem("guest-location", e.target.value);
            }}
            className="w-full border border-[#D9D9D9] text-[#515151] font-normal text-[0.875rem] p-2 rounded mt-0 mb-4 focus:outline-none focus:ring-1 focus:ring-[#2545FF] focus:border-[#2545FF]"
          />

          <button
            type="submit"
            className="bg-[#2545FF] font-semibold text-[0.9rem] text-white px-4 py-2 mt-[1rem] mb-[1.5rem] rounded w-full flex items-center justify-center gap-2"
          >
            Report event
            <img
              src="/images/auth_images/arrow_right.svg"
              alt="arrow Right"
              className="w-5 h-5"
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default GuestReportModal;
