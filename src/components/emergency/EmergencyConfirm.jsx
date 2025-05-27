import React, { useState, useEffect } from 'react';

const EmergencySentConfirmation = ({ onDone, onStillNeedHelp }) => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentLocation, setCurrentLocation] = useState('School Park'); // Set to 'School Park' as per image

    useEffect(() => {
        // Fetch current time
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        const date = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
        setCurrentTime(`${time}, ${date}`);
    }, []);

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <article className="bg-white py-[2.125rem] px-[1.5rem] rounded-xl shadow-lg w-[90%] max-w-md relative animate-fadeIn">
                <button
                    onClick={onDone}
                    className="absolute top-3 right-4 text-xl text-gray-500 hover:text-gray-700"
                >
                    &times;
                </button>

                <div className="flex flex-col items-center justify-center text-center mt-8">
                    <div className="w-20 h-20 mb-2">
                        <img src="/images/emergency/sent.svg" alt="Shield Icon" className="w-full h-full object-contain"/>
                    </div>
                    <h2 className="text-[#212121] text-[1.5rem] font-semibold mb-2">Emergency Alert Sent!</h2>
                    <p className="text-[#515151] text-[13px] font-normal px-4">
                        Campus security has received your alert and is responding immediately.
                    </p>
                    <div className="flex flex-row items-start justify-start gap-4 mt-[2rem] text-start w-full">
                        <div className="flex flex-row items-center text-[#212121] text-sm flex-1 gap-1">
                            <img src="/images/emergency/calender.svg" alt="Calender Icon" className='w-5 h-5 mb-2' />
                            <p className="text-xs text-[#515151]">Your current location was <br/> shared securely.</p>
                        </div>
                        <div className="flex flex-row items-center text-[#212121] text-sm flex-1 gap-1">
                            <img src="/images/emergency/location.svg" alt="Location Icon" className='w-5 h-5 mb-2' />
                            <p className="text-xs text-[#515151]">Help is on the way <br/> stay calm and stay safe.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-[3rem] flex justify-center">
                    <button
                        onClick={onStillNeedHelp} // This prop should handle the "still need help" action
                        className="bg-[#2545FF] text-white py-3 px-8 rounded-lg text-[0.8rem] font-semibold hover:bg-blue-700 transition-colors duration-200 w-full"
                    >
                        Still need help
                    </button>
                </div>
            </article>
        </section>
    );
};

export default EmergencySentConfirmation;