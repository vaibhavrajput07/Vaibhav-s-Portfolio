import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImgMediaCard from './card';
import ProjectContainer from './ProjectsContainer';
export default function SimpleContainer() {
  return (
    <div>
    <ImgMediaCard/>
    <h4 style={{textAlign:"center", marginTop:"50px",opacity:"0.7"}}>Projects  <i class="fa-solid fa-arrow-down"></i> </h4>
    <ProjectContainer/>
    </div>
  );
}
