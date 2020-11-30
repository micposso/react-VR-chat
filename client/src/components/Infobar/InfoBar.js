import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './infobar.css';

const InfoBar = ({room}) => (
  <div className="infoBar">
    <div className="leftInnerContainer"></div>
    <img src={onlineIcon} alt="online icon" className="onlineIcon"/>
    <h3>{room}</h3>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close image" /></a>
    </div>
  </div>
);

export default InfoBar;