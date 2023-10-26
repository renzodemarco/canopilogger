import React from "react";
import atardecer from '../../assets/atardecer.svg'
import play from '../../assets/video-play.svg'
import './VideoContainer.css'

function VideoContainer() {
  return (
    <div className="video-container">
        <img src={atardecer} className="video-img"></img>
        <div className="video-overlay">
            <div className="video-presentation-container"> 
                <h2 className="video-text">Te mostramos nuestros pilares</h2>
                <a href='http://www.youtube.com/' target="_blank">
                    <img src={play} className="video-play"/>
                </a>
            </div>
        </div>
    </div>
  );
}

export default VideoContainer;
