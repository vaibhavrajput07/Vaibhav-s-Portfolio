import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import "./card.css";

export default function ImgMediaCard() {
    let[Remainig,setRemainig]=useState("");
    let LearnMore=()=>{
        setRemainig("Currently, I am pursuing a Full Stack Web Development course (MERN Stack). I have created 3-4 projects using HTML, CSS, and JavaScript, with one of them being a full-stack project called the Wanderlust Project. The project links are provided below; you can explore the details of these projects.");
    }
    let ClearLearnMore=()=>{
      setRemainig("");
    }
  return (
    <div id="card">
    <Card sx={{ maxWidth: 450 }}>
      <CardMedia
        component="video"
        alt="green iguana"
        height="170"
        src="./src/components/videos/NewIntro.mp4"
        controls
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          I'm Vaibhav Rajput
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} onClick={ClearLearnMore}>
         Hello everyone, I am Vaibhav Rajput from Jalgaon District. I have completed my graduation in Computer Science (BSc CS) and have a strong understanding of Java programming. 
         {Remainig}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href='mailto:vaibhavrajput411@gmail.com'>Contact</Button>
        <Button size="small" onClick={LearnMore }>Learn More</Button>
      </CardActions>
    </Card>
    </div>
  );
}
