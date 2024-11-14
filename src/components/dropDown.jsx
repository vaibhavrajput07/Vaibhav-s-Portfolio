import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa'; 
import { FaYoutube } from 'react-icons/fa';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function PositionedMenu() {
  return (
    <div className="dropdown">
      <MoreVertIcon className='dropdown-toggle' type="icon" data-bs-toggle="dropdown" aria-expanded="false" style={{marginTop:"-10px"}}/>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="https://linkedin.com/in/vaibhav-rajput-25a0b028a/">{<FaLinkedin />} Linkedin</a></li>
        <li><a className="dropdown-item" href="https://github.com/vaibhavrajput07">{<FaGithub/>} Github</a></li>
        <li><a className="dropdown-item" href="https://www.youtube.com/@VMRTech-l6s">{<FaYoutube/>} YouTube</a></li>
      </ul>
    </div>
  )
}
