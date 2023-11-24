import React from "react";
import atardecer from '../../assets/atardecer.svg'
import play from '../../assets/video-play.svg'
import './VideoContainer.css'

function VideoContainer() {
  return (
    <div className="video-container">
        <img src={atardecer} className="video-img" alt="imagen ilustrativ de video"></img>
        <div className="video-overlay">
            <div className="video-presentation-container"> 
                <h2 className="video-text">Te mostramos nuestros pilares</h2>
                <a href='https://youtu.be/NTfYxT09uTM?si=yzMrUIGAdgF5zhDA' target="_blank" rel="noreferrer">
                    <img src={play} className="video-play" alt="play video"/>
                </a>
            </div>
        </div>
    </div>
  );
}

export default VideoContainer;
