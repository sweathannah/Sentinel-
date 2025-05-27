import React, { useState, useEffect, useRef } from 'react';

const EmergencySentConfirmation = ({ onDone, onAddInfo, onCancelAlert }) => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentLocation, setCurrentLocation] = useState('Fetching location...');
    const [description, setDescription] = useState('');
    const [attachedFile, setAttachedFile] = useState(null); // For image/video File object
    const [voiceNoteBlob, setVoiceNoteBlob] = useState(null); // For recorded audio Blob
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0); // For voice note duration
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const recordingIntervalRef = useRef(null);

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
                    setCurrentLocation(`Lat: ${position.coords.latitude.toFixed(2)}, Lon: ${position.coords.longitude.toFixed(2)}`);
                    // For a real app, you'd send these coords to your backend for reverse geocoding
                    // For now, let's use the text from your image for consistency in demo
                    // setCurrentLocation('School Park');
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
    }, []);

    // Effect for voice recording timer
    useEffect(() => {
        if (isRecording) {
            recordingIntervalRef.current = setInterval(() => {
                setRecordingTime(prevTime => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(recordingIntervalRef.current);
            setRecordingTime(0); // Reset when not recording
        }
        return () => clearInterval(recordingIntervalRef.current);
    }, [isRecording]);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAttachedFile(file);
            setVoiceNoteBlob(null); // Clear voice note if a file is attached
        }
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorderRef.current = new MediaRecorder(stream);
            audioChunksRef.current = [];

            mediaRecorderRef.current.ondataavailable = (event) => {
                audioChunksRef.current.push(event.data);
            };

            mediaRecorderRef.current.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                setVoiceNoteBlob(audioBlob);
                setAttachedFile(null); // Clear attached file if voice note is recorded
                // Stop all tracks in the stream to release microphone
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current.start();
            setIsRecording(true);
        } catch (err) {
            console.error('Error accessing microphone:', err);
            alert('Could not access microphone. Please ensure permissions are granted.');
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const removeAttachedFile = () => {
        setAttachedFile(null);
    };

    const removeVoiceNote = () => {
        setVoiceNoteBlob(null);
    };

    const formatRecordingTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleSendInfo = () => {
        // Here you would collect description, attachedFile, voiceNoteBlob
        // and send them to your backend.
        console.log("Sending Info:", {
            description,
            attachedFile: attachedFile ? attachedFile.name : null,
            voiceNote: voiceNoteBlob ? 'Voice Note Attached' : null,
        });
        onDone(); // Close the modal after sending
    };

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
            <article className="bg-white py-[2.125rem] px-[1.5rem] rounded-xl shadow-lg w-[90%] max-w-md relative animate-fadeIn">
                {/* Close Button */}
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
                    <h2 className="text-[#212121] text-[1.5rem] font-semibold mb-1">Emergency Alert Sent!</h2>

                    <div className="flex flex-row items-center justify-center gap-4 text-center">
                        <div className="flex items-center text-[#212121] text-sm">
                            <img src="/images/emergency/calender.svg" alt="Calender Icon" className='w-5 h-5 mx-1' />
                            {currentTime}
                        </div>
                        <div className="flex items-center text-[#212121] text-sm">
                            <img src="/images/emergency/location.svg" alt="Location Icon" className='w-5 h-5 mx-1' />
                            {currentLocation}
                        </div>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="mt-[2rem] w-full">
                    <p className="text-[#515151] text-[1rem] font-[500] mb-2 text-left">Additional info (optional)</p>
                    
                    {/* Display attached file or voice note */}
                    {attachedFile && (
                        <div className="relative w-full h-32 border border-gray-300 rounded-lg flex items-center justify-center overflow-hidden mb-4">
                            {attachedFile.type.startsWith('image/') && (
                                <img src={URL.createObjectURL(attachedFile)} alt="Attached" className="object-cover w-full h-full" />
                            )}
                            {attachedFile.type.startsWith('video/') && (
                                <video src={URL.createObjectURL(attachedFile)} controls className="object-cover w-full h-full" />
                            )}
                            <button onClick={removeAttachedFile} className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                                &times;
                            </button>
                        </div>
                    )}

                    {voiceNoteBlob && (
                        <div className="relative flex items-center justify-between p-2 border border-gray-300 rounded-lg mb-4 bg-gray-50">
                            <audio controls src={URL.createObjectURL(voiceNoteBlob)} className="flex-grow"></audio>
                            {/* Placeholder for waveform - actual waveform requires more complex canvas/SVG */}
                            <span className="text-gray-500 text-xs ml-2">{formatRecordingTime(recordingTime)}</span>
                            <button onClick={removeVoiceNote} className="ml-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                                &times;
                            </button>
                        </div>
                    )}

                    {/* Textarea for description */}
                    <textarea
                        className="w-full p-3 border border-[#DDDDDD] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2545FF] text-sm text-[#515151]"
                        rows="3"
                        placeholder="Briefly describe what happened..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>

                    {/* Attachment and Voice Note Buttons */}
                    <div className="flex justify-between items-center mt-4">
                        <label htmlFor="file-upload" className="flex items-center text-[#2545FF] cursor-pointer hover:text-blue-700 transition-colors">
                            {/* Paperclip Icon */}
                            <img src="/images/emergency/attach.svg" alt="Attachment Icon" className='w-5 h-5 mx-1' />
                            Attach
                            <input
                                id="file-upload"
                                type="file"
                                accept="image/*,video/*" // Accepts images and videos
                                capture="environment" // Suggests using camera on mobile
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>

                        {isRecording ? (
                            <button
                                onClick={stopRecording}
                                className="flex items-center text-red-500 cursor-pointer hover:text-red-700 transition-colors"
                            >
                                {/* Stop Recording Icon (Square) */}
                                <img src="/images/emergency/Microphone.svg" alt="Microphone Icon" className='w-5 h-5 mx-1'/>
                                Stop Recording ({formatRecordingTime(recordingTime)})
                            </button>
                        ) : (
                            <button
                                onClick={startRecording}
                                className="flex items-center text-[#2545FF] cursor-pointer hover:text-blue-700 transition-colors"
                            >
                                {/* Microphone Icon */}
                                <img src="/images/emergency/Microphone.svg" alt="Microphone Icon" className='w-5 h-5 mx-1'/>
                                Record Voice Note
                            </button>
                        )}
                    </div>
                </div>

                {/* Send Info Button */}
                <div className="mt-[3rem] flex justify-center">
                    <button
                        onClick={handleSendInfo}
                        className="bg-[#2545FF] text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200 w-full"
                    >
                        Send Info
                    </button>
                </div>
            </article>
        </section>
    );
};

export default EmergencySentConfirmation;



