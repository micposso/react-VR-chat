import React from './react';

import './InfoBar.css';

const InfoBar = () => {
  <div className="infobar">
    <div className="leftInnerContainer"></div>
    <img src="{onlineicon}" alt="" className="onlineIcon"/>
    <h3>Get room name dynamic</h3>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close image" /></a>
    </div>
  </div>
}

export default InfoBar;