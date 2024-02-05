import { useState, useEffect } from 'react';
import { FaVolumeMute, FaVolumeUp } from 'react-icons/fa';

const AudioControl: React.FC = () => {
    const [isMuted, setIsMuted] = useState(true);
    const audioSrc = '/audio/void.ogg'; // Path to audio file

    useEffect(() => {
        const audioEl = document.getElementById('background-audio') as HTMLAudioElement;

        const repeatAudio = () => {
            if (!isMuted) {
                audioEl.play();
            }
        };

        audioEl.addEventListener('ended', repeatAudio);

        return () => {
            audioEl.removeEventListener('ended', repeatAudio);
        };
    }, [isMuted]);

    const toggleMute = () => {
        const audioEl = document.getElementById('background-audio') as HTMLAudioElement;
        if (audioEl) {
            if (isMuted) {
                audioEl.muted = false;
                audioEl.play();
            } else {
                audioEl.muted = true;
                audioEl.pause();
            }
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="fixed top-5 right-5 hover:bg-white dark:hover:bg-primary bg-white bg-opacity-80 dark:bg-primary dark:bg-opacity-80 text-primaryGold dark:text-primaryBlue hover:text-secondaryGold dark:hover:text-lightBlue rounded-md shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <button onClick={toggleMute} className="p-2">
                {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
            </button>
            <audio id="background-audio" loop>
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </div>
    );
};

export default AudioControl;
