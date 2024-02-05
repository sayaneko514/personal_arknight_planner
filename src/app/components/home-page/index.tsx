'use client';

import VideoBlock from './video-block';
import SideNav from './side-menu';
import AudioControl from './audio-block';

export const LandingPage = () => {
    return (
        <header>
            <VideoBlock />
            <SideNav />
            <AudioControl />
        </header>
    );
}