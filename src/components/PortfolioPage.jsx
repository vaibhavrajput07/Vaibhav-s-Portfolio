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
    <ProjectContainer/>
    </div>
  );
}
