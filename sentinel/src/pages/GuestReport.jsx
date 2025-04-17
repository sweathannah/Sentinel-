// pages/GuestReportPage.jsx
import { useState } from "react";

const GuestReport = () => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

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

    setDescription("");
    setLocation("");
  };

  return (
    <section className="max-w-3xl mx-auto mt-10 p-6 font-poppins">
      <h1 className="text-[2rem] font-bold mb-4 text-[#000]">Guest Report</h1>
      <p className="text-[#444] mb-6">
        Report safely without your name. Your identity remains private.
      </p>

      <form onSubmit={handleSubmit}>
        <label
          htmlFor="description"
          className="block mb-2 text-[#1E1E1E] text-[1rem] font-[600]"
        >
          What is going on?
        </label>
        <textarea
          id="description"
          name="description"
          rows={5}
          placeholder="Describe what is happening"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border border-[#D9D9D9] text-[#515151] font-normal text-[0.875rem] p-3 rounded mb-4 focus:outline-none focus:ring-1 focus:ring-[#2545FF] focus:border-[#2545FF]"
        />

        <label
          htmlFor="location"
          className="block mb-2 text-[#1E1E1E] text-[1rem] font-[600]"
        >
          Where is this happening?
        </label>
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Describe where it is happening"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full border border-[#D9D9D9] text-[#515151] font-normal text-[0.875rem] p-3 rounded mb-6 focus:outline-none focus:ring-1 focus:ring-[#2545FF] focus:border-[#2545FF]"
        />

        <button
          type="submit"
          className="bg-[#2545FF] font-semibold text-white px-6 py-3 rounded w-full flex items-center justify-center gap-2 text-[0.95rem]"
        >
          Report event
          <img
            src="/images/auth_images/arrow_right.svg"
            alt="arrow Right"
            className="w-5 h-5"
          />
        </button>
      </form>
    </section>
  );
};

export default GuestReport;
