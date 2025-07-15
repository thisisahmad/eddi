import React from 'react';

const VideoItem = ({ src, title, label }) => (
  <div className="video-item">
    <div className="video-embed-container">
      <iframe
        src={src}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <p className="video-title">{label}</p>
  </div>
);

export default VideoItem; 