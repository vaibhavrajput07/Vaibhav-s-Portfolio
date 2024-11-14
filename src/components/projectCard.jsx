import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./projectCard.css";
export default function ProjectCard(Project){
   return(
    <div>
    <Card sx={{ maxWidth: 240 }} id="Card">
    <CardMedia
        component="img"
        alt="green iguana"
        height="85"
        image={Project.url}
    />
    <CardContent>
        <Typography gutterBottom variant="h7" component="div">
            {Project.Title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {Project.description}
        </Typography>
    </CardContent>
    <CardActions>
        <Button size="small" href={Project.href}>Website</Button>
        <Button size="small" href={Project.learenMore}>Learn More</Button>
    </CardActions>
</Card>
</div>
)
}
            