import { useState } from 'react';
import './reportincident.css';
import { Link } from 'react-router-dom';
import { FaPause, FaStop, FaMicrophone } from "react-icons/fa";
import LocationForm from '../../components/reportincident/LocationForm';
import { SoundWave } from '..';

function RecordActionButton({ icon: Icon, text }) {
  return (
    <div className="flex items-center gap-2 border border-[#DDDDDD] px-2.5 py-2 rounded-lg w-fit cursor-pointer">
      <Icon color="#2545FF" />
      <p>{text}</p>
    </div>
  );
}

function ReportPage() {
  const [showLocationModal, setShowLocationMOdal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [selectedProof, setSelectedProof] = useState("");

  const incidentType = [
    { label: "Theft/Loss", src: "/images/reportincident_images/theft.svg"},
    { label: "Medical", src: "/images/reportincident_images/healthcare.svg" },
    { label: "Vandalism", src: "/images/reportincident_images/hammer.svg" },
    { label: "Harassment", src: "/images/reportincident_images/people.svg" },
    { label: "Other", src: "/images/reportincident_images/warning.svg" }
  ];
  
  function selectType(index) {
    setSelectedIndex(index);
  }

  const proofMethod = [
    { label: "Add pictures", src: "/images/reportincident_images/photo.svg", type: "image" },
    { label: "Video Recording", src: "/images/reportincident_images/BsCameraVideo.svg", type: "video" },
    { label: "Voice Recording", src: "/images/reportincident_images/microphone.svg", type: "audio" }
  ];
  
  return (
    <section className="bg-[#F7F7F7] h-max px-8 font-poppins text-[#515151]">
      <div className="bg-white p-6 rounded-2xl border border-[#DDDDDD]">
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
              className={`typeDiv relative bg-[#F8F8F8] w-full h-32 p-6 flex flex-col gap-6 font-medium text-sm rounded-xl ${selectedIndex === index ? "marked-style bg-white" : ""}`}
              onClick={() => selectType(index)}
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
      </div>

      <div className="mt-8 font-medium text-xl bg-white p-6 rounded-2xl border border-[#DDDDDD]">
        <p>Location</p>
        <div className="mt-4 h-20 w-full bg-[#F8F8F8] rounded-xl border border-[#DDDDDD] text-sm flex justify-between items-center p-6">
          <span className="flex gap-[10px] items-center">
            <button onClick={() => showLocationModal(true)}>
              <img
                src="/images/reportincident_images/location-line.svg"
                alt="Location icon"
                className="w-8 h-8"
              />
            </button>
            <p>School Park, Unilorin Campus</p>
          </span>
          <a href="#" className="text-[#2545FF]">
            <p>Change</p>
          </a>
        </div>
      </div>

      <div className="mt-8 text-xl bg-white border border-[#DDDDDD] rounded-2xl p-6">
        <p>Attach Proof</p>
        <div className="mt-6">
          {selectedProof === "image" && (
            <div>
              <input type="file" accept="image" name="image/*" id="" />
            </div>
          )}
          {selectedProof === "audio" && (
            <div className="border border-[rgb(37,69,255)] bg-[#F8F8F8] p-6 rounded-[12px] text-[#212121] flex items-center gap-4 w-fit">
              <RecordActionButton icon={FaPause} text="Pause" />
              <img src={SoundWave} alt="A wavy line for audio signal" />
              <RecordActionButton icon={FaStop} text="Stop" />
            </div>
          )}
        </div>
        <div className="flex gap-6">
          {proofMethod.map((method, index) => (
            <div
              key={index}
              onClick={() => setSelectedProof(method.type)}
              className={`mt-4 bg-[#F8F8F8] rounded-xl border ${selectedProof === method.type ? "border-[#2545FF]" : "border-[#DDDDDD]"} w-full h-[150px] items-center justify-center flex flex-col text-lg gap-[10px]`}
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
            w-full h-[14.9rem] border border-[#DDDDDD] outline-[#DDDDDD] rounded-xl p-[21px]"
        ></textarea>
      </div>
      {showLocationModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
          <div className="relative">
            <button
              onClick={() => setShowLocationModal(false)}
              className="absolute top-4 right-4 text-white text-2xl z-10"
            >
              &times;
            </button>
            <LocationForm />
          </div>
        </div>
      )}
    </section>
  );
}
export default ReportPage;
