import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function BasicCard({title, subtitle, icon, content, footer, background, width, height, color}) {
  return (
    <Card sx={{display: 'flex', flexDirection: "column", width: width, height: height, backgroundColor: background, fontFamily: "Playfair", justifyContent: "center", border: "solid 3px rgba(255, 183, 0, 0.9)" }}>
      <CardContent sx={{display: "flex", flexDirection: "column", fontFamily: "Playfair", justifyContent: "center"}}>
        <Typography variant='h4' sx={{fontFamily: "Playfair", fontSize: 32, }} color={color} gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" color={color} sx={{display: "flex", fontFamily: "Playfair", justifyContent: "center"}}component="div">
          {subtitle}
        </Typography>
        {icon && (<Box sx={{display: "flex", justifyContent: "space-evenly", marginTop: 5}}>
          <img src={icon} alt='Stars' width="48px" height="48px" />
          <img src={icon} alt='Stars' width="48px" height="48px" />
          <img src={icon} alt='Stars' width="48px" height="48px" />
          <img src={icon} alt='Stars' width="48px" height="48px" />
          <img src={icon} alt='Stars' width="48px" height="48px" />
        </Box>)}
        <Typography variant="h3"  sx={{color: color, textAlign: "center", fontFamily: "Playfair", marginTop: "20px"}}>
          {content}
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{footer}</Button>
      </CardActions>
    </Card>
  );
}