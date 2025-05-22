import { useState } from 'react';
import './reportincident.css';

function ReportPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const incidentType = [
    { label: "Theft/Loss", src: "/images/reportincident_images/theft.svg" },
    { label: "Medical", src: "/images/reportincident_images/healthcare.svg" },
    { label: "Vandalism", src: "/images/reportincident_images/hammer.svg" },
    { label: "Harassment", src: "/images/reportincident_images/people.svg" },
    { label: "Other", src: "/images/reportincident_images/warning.svg" }
  ];
  
  function selectType(index) {
    setSelectedIndex(index);
  }

  const proofMethod = [
    { label: "Add pictures", src: "/images/reportincident_images/photo.svg" },
    { label: "Video Recording", src: "/images/reportincident_images/BsCameraVideo.svg" },
    { label: "Voice Recording", src: "/images/reportincident_images/microphone.svg" }
  ];
  
    return (
      <section className="bg-[#F7F7F7] h-max px-8 font-poppins text-[#515151]">
        <div className="flex justify-between items-center font-medium">
          <h3 className="text-xl">What type of incident are you reporting?</h3>
          <span className="flex gap-8 text-sm">
            <a
              href="#"
              className="border border-[#2545FF] py-3 px-5 rounded-xl"
            >
              <button>Send anonymously</button>
            </a>
            <a
              href="#"
              className="bg-[#2545FF] text-white py-3 px-5 rounded-xl"
            >
              <button>Submit Report</button>
            </a>
          </span>
        </div>

        <div className="mt-8 flex gap-4 w-full">
          {incidentType.map((type, index) => (
            <div
              key={index}
              className={`typeDiv relative bg-white w-full h-32 p-6 flex flex-col gap-6 font-medium text-sm rounded-xl ${selectedIndex === index ? "marked-style" : ""}`}
              onClick={()=> selectType(index)}
            >
              <img
                src={type.src}
                alt={`${type.label} icon`}
                className="w-8 h-8"
              />
              <p>{type.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 font-medium text-xl">
          <p>Location</p>
          <div className="mt-4 h-20 w-full bg-white rounded-xl border border-[#DDDDDD] text-sm flex justify-between items-center p-6">
            <span className="flex gap-[10px] items-center">
              <a href="#">
                <img
                  src="/images/reportincident_images/location-line.svg"
                  alt="Location icon"
                  className="w-8 h-8"
                />
              </a>
              <p>School Park, Unilorin Campus</p>
            </span>
            <a href="#" className="text-[#2545FF]">
              <p>Change</p>
            </a>
          </div>
        </div>

        <div className="mt-8 text-xl">
          <p>Attach Proof</p>
          <div className="flex gap-6">
            {proofMethod.map((method, index) => (
              <div
                key={index}
                className="mt-4 bg-white rounded-xl border border-[#DDDDDD] w-full h-[150px] items-center justify-center flex flex-col text-lg gap-[10px]"
              >
                <img
                  src={method.src}
                  alt={`${method.label} icon`}
                  className="w-10 h-10"
                />
                <p>{method.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-lg pb-8">
          <textarea
            name="description"
            id="description"
            placeholder="Briefly describe what happened...."
            className="
            w-full h-[14.9rem] border border-[#DDDDDD] rounded-xl p-[21px]"
          ></textarea>
        </div>
      </section>
    );
}

export default ReportPage;