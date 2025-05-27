// src/components/EmergencyAlerts/EmergencySentConfirmation.jsx
import React, { useState, useEffect } from 'react';

// Assuming you have these icons or similar. Adjust paths if needed.
// Example: import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/solid';
// For now, I'll use inline SVGs or placeholders if you don't have them.

const EmergencySentConfirmation = ({ onDone, onAddInfo, onCancelAlert }) => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentLocation, setCurrentLocation] = useState('Fetching location...');
    const [cancelTimer, setCancelTimer] = useState(10); // 10 seconds countdown

    useEffect(() => {
        // Fetch current time
        const now = new Date();
        const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        const date = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: '2-digit' });
        setCurrentTime(`${time}, ${date}`);

        // Get user's location (browser Geolocation API)
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // Reverse geocoding (optional, requires a service like OpenCage, Google Maps API, etc.)
                    // For simplicity, I'll just show coordinates or a generic message.
                    // For a real app, you'd send these coords to your backend to get an address.
                    setCurrentLocation(`Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`);
                    // Alternatively, a simpler approach for a demo:
                    // setCurrentLocation('School Park'); // As seen in your image
                },
                (error) => {
                    console.error("Error getting location: ", error);
                    setCurrentLocation('Unknown Location');
                },
                { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
            );
        } else {
            setCurrentLocation('Location services not available');
        }

        // Start cancellation countdown
        const countdownInterval = setInterval(() => {
            setCancelTimer(prevTime => {
                if (prevTime <= 1) {
                    clearInterval(countdownInterval);
                    // Optionally, automatically call onDone if the timer runs out and no action is taken
                    // onDone();
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(countdownInterval); // Cleanup interval
    }, []);

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <article className="bg-white py-[2.125rem] px-[1.5rem] rounded-xl shadow-lg w-[90%] max-w-md relative animate-fadeIn">
                {/* Cancel Alert Countdown */}
                <div className="absolute top-3 right-4 text-red-500 text-sm font-semibold">
                    <button onClick={onCancelAlert} className="hover:underline">
                        Cancel Alert ({cancelTimer}s)
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center text-center mt-8">
                    <div className="w-20 h-20 bg-[#2545FF] rounded-full flex items-center justify-center mb-4">
                        {/* Shield Icon - Replace with your actual SVG if possible */}
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                            <path d="M12 1L3 5V11C3 16.55 6.84 21.73 12 23C17.16 21.73 21 16.55 21 11V5L12 1ZM12 11.19C11.66 11.02 11.3 10.88 10.96 10.76C9.8 10.31 8.7 9.4 7.6 8.5C7.22 8.18 7.03 7.74 7 7.3C7 6.47 7.62 5.8 8.44 5.75C9.07 5.71 9.69 5.86 10.27 6.13C10.67 6.32 11.05 6.55 11.4 6.8C11.75 7.05 12.05 7.3 12.3 7.55C12.55 7.8 12.75 8.05 12.9 8.25C13.05 8.45 13.15 8.65 13.2 8.85C13.25 9.05 13.3 9.25 13.3 9.45C13.3 10.05 13.1 10.6 12.75 11.05C12.4 11.5 12.05 11.85 11.7 12.15C11.35 12.45 11.05 12.7 10.8 12.9C10.55 13.1 10.35 13.25 10.2 13.35C10.05 13.45 9.9 13.55 9.75 13.6C9.6 13.65 9.45 13.7 9.3 13.7C9.15 13.7 9 13.65 8.85 13.6C8.7 13.55 8.55 13.45 8.4 13.35C8.25 13.25 8.15 13.1 8.05 12.9C7.95 12.7 7.85 12.45 7.85 12.25C7.85 11.7 8.05 11.25 8.45 10.85C8.85 10.45 9.3 10.1 9.8 9.8C10.3 9.5 10.8 9.25 11.3 9.05C11.8 8.85 12.25 8.7 12.65 8.5C13.05 8.3 13.45 8.1 13.8 7.9C14.15 7.7 14.5 7.5 14.8 7.3C15.1 7.1 15.4 6.95 15.7 6.8C16 6.65 16.3 6.55 16.6 6.45C16.9 6.35 17.15 6.25 17.35 6.25C17.55 6.25 17.75 6.35 17.95 6.55C18.15 6.75 18.25 7 18.25 7.3C18.25 7.6 18.15 7.9 18.05 8.15C17.95 8.4 17.8 8.65 17.65 8.85C17.5 9.05 17.3 9.25 17.15 9.45C17 9.65 16.8 9.8 16.65 9.95C16.5 10.1 16.35 10.25 16.2 10.35C16.05 10.45 15.9 10.55 15.75 10.65C15.6 10.75 15.45 10.85 15.3 10.95C15.15 11.05 15 11.15 14.85 11.25C14.7 11.35 14.55 11.45 14.4 11.55C14.25 11.65 14.1 11.75 13.95 11.85C13.8 11.95 13.65 12.05 13.5 12.15C13.35 12.25 13.2 12.35 13.05 12.45C12.9 12.55 12.75 12.65 12.6 12.75C12.45 12.85 12.3 12.95 12.15 13.05C12 13.15 11.85 13.25 11.7 13.35C11.55 13.45 11.4 13.55 11.25 13.65C11.1 13.75 10.95 13.85 10.8 13.95C10.65 14.05 10.5 14.15 10.35 14.25C10.2 14.35 10.05 14.45 9.9 14.55C9.75 14.65 9.6 14.75 9.45 14.85C9.3 14.95 9.15 15.05 9 15.15C8.85 15.25 8.7 15.35 8.55 15.45C8.4 15.55 8.25 15.65 8.1 15.75C7.95 15.85 7.8 15.95 7.65 16.05C7.5 16.15 7.35 16.25 7.2 16.35C7.05 16.45 6.9 16.55 6.75 16.65C6.6 16.75 6.45 16.85 6.3 16.95C6.15 17.05 6 17.15 5.85 17.25C5.7 17.35 5.55 17.45 5.4 17.55C5.25 17.65 5.1 17.75 4.95 17.85C4.8 17.95 4.65 18.05 4.5 18.15C4.35 18.25 4.2 18.35 4.05 18.45C3.9 18.55 3.75 18.65 3.6 18.75C3.45 18.85 3.3 18.95 3.15 19.05C3 19.15 2.85 19.25 2.7 19.35C2.55 19.45 2.4 19.55 2.25 19.65C2.1 19.75 1.95 19.85 1.8 19.95C1.65 20.05 1.5 20.15 1.35 20.25C1.2 20.35 1.05 20.45 0.9 20.55C0.75 20.65 0.6 20.75 0.45 20.85C0.3 20.95 0.15 21.05 0 21.15V11C0 16.26 3.63 21.06 9 22.33C10.5 22.7 12 23 12 23C12 23 13.5 22.7 15 22.33C20.37 21.06 24 16.26 24 11V5L12 1ZM12 21.6C7.54 20.41 4 15.93 4 11.2V5.5L12 2.2L20 5.5V11.2C20 15.93 16.46 20.41 12 21.6Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h2 className="text-[#212121] text-[1.5rem] font-semibold mb-2">Emergency Alert Sent!</h2>
                    <p className="text-[#444444] text-sm font-normal px-4">
                        Campus security has received your alert and is responding immediately.
                    </p>

                    <div className="flex flex-row items-center justify-center gap-4 mt-[2rem]">
                        <div className="flex items-center text-gray-600 text-sm">
                            {/* Calendar Icon */}
                            <svg className="w-5 h-5 mr-1 text-[#2545FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {currentTime}
                        </div>
                        <div className="flex items-center text-gray-600 text-sm">
                            {/* Location Icon */}
                            <svg className="w-5 h-5 mr-1 text-[#2545FF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {currentLocation}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-[3rem]">
                    <button
                        onClick={onAddInfo}
                        className="bg-[#2545FF] text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 w-full sm:w-auto"
                    >
                        Add Additional Info
                    </button>
                    <button
                        onClick={onDone}
                        className="bg-gray-200 text-gray-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-gray-300 transition-colors duration-200 w-full sm:w-auto"
                    >
                        Done
                    </button>
                </div>
            </article>
        </section>
    );
};

export default EmergencySentConfirmation;