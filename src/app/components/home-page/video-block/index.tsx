import React, { useState, useEffect, useRef } from 'react';
import { FaStar } from "react-icons/fa";

// Define the shape of your video sources with specific keys
const videoSources: Record<'default' | 'january' | 'february', string> = {
    default: '/videos/default.mp4',
    january: '/videos/jan24.mp4',
    february: '/videos/feb24.mp4',
    // ... other months or videos
};

// Define background styles for each video source button
const buttonBackgrounds: Record<keyof typeof videoSources, string> = {
    default: 'bg-primaryBlue hover:bg-darkBlue',
    january: 'bg-red-400 hover:bg-red-600',
    february: 'bg-lime-300 hover:bg-lime-500',
    // ... other months or backgrounds
};

const VideoBlock: React.FC = () => {
    const [currentVideo, setCurrentVideo] = useState<keyof typeof videoSources>('default');
    const videoRef = useRef<HTMLVideoElement>(null);

    const changeVideo = (videoKey: keyof typeof videoSources) => {
        setCurrentVideo(videoKey);
    };

    useEffect(() => {
        videoRef.current?.load();
    }, [currentVideo]);

    // Get all video keys and their positions
    const videoKeys = Object.keys(videoSources) as Array<keyof typeof videoSources>;


    return (
        <>
            <div className="fixed top-0 left-0 right-0 bottom-0 z-[-1]">
                <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted
                    style={{
                        position: "fixed",
                        width: "100%",
                        left: "50%",
                        top: "50%",
                        height: "100%",
                        objectFit: "cover",
                        transform: "translate(-50%, -50%)",
                        zIndex: -1,
                    }}
                >
                    <source src={videoSources[currentVideo]} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="fixed right-2 bottom-2 z-10 flex space-x-1.5">
                {videoKeys.map((key, index) => {
                    if (key !== currentVideo) {
                        return (
                            <button
                                key={key}
                                className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 shadow-xl w-6 h-6 rounded-full flex items-center justify-center ${buttonBackgrounds[key]}`}
                                onClick={() => changeVideo(key)}
                            >
                                <span className="text-sm font-semibold text-white">
                                    {(key === 'default' ? <FaStar /> : index)}
                                </span>
                            </button>
                        );
                    }
                })}
            </div>
        </>
    );
};

export default VideoBlock;