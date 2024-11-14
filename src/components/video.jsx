// VideoPlayer.js
import "./video.css";
import React from 'react';
const VideoPlayer = ({ src, poster, width='50%', height = '40%', controls = true, autoplay = false, loop = false, muted = false }) => {
  return (
    <div style={{ maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
      <video id='videos'
        src="./src/assets/videos/NewIntro.mp4"
        poster={poster}
        width={width}
        height={height}
        controls={controls}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        style={{ borderRadius: '8px' }}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
