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
    <section className="flex justify-center bg-[#F8F8F8] font-poppins">
        <div className="w-[40%] flex flex-col justify-centermd:pl-8 bg-white border-[1px] border-solid border-[#E7E7E7] rounded-[0.5rem] py-[2rem] lg:px-[2.5rem] px-[1rem]">
            <h2 className="text-[2rem] font-[700] bg-gradient-to-r from-[#4A3391] to-[#001ECA] bg-clip-text text-transparent mb-[0.7rem]">
                Guest Report
            </h2>

            <p className="text-[#444444] font-normal text-[1rem] mb-[1.7rem]">
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
                <button className="bg-[#2545FF] text-[#FFFFFF] text-[0.8rem] py-[0.8rem] rounded-lg font-medium " type="submit">
                    Report event
                </button>
            </form>

            
            <button className="border border-solid border-[#2545FF] text-[#2545FF] text-[0.8rem] py-[0.8rem] rounded-lg font-medium my-[0.8rem]">
                Go back
            </button>
        </div>
    </section>
    
  );
};

export default GuestReport;
