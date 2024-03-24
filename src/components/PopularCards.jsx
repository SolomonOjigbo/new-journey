import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function PopularCards({label, prizeValue, price, value, NoOfTickets, quantity, BiggestPrice, TicketPrice, prize}) {
  return (
    <Card sx={{ width: 286, height:300, justifyContent: "center", textAlign: "center", alignItems: "center", border: 4,  borderColor: "#ffaa00ff", backgroundColor: "#e6e5e58d"}}>
      <CardContent sx={{alignContent: "center", justifyContent: "center"}}>
        <Typography sx={{ fontSize:21, fontFamily: "Playfair", color: "black" }} color="text.secondary" gutterBottom>
          {label}{" : "}{value}
        </Typography>
        <Typography variant="h5" sx={{ fontSize: 21, fontFamily: "Playfair", color: "black" }}component="div" gutterBottom>
          {NoOfTickets}{" : "}{quantity}
        </Typography>
        <Typography variant="h5" component="div" sx={{ fontSize: 21, fontFamily: "Playfair", color: "black" }} gutterBottom>
          {TicketPrice}{" : "}{price}
        </Typography>
        <Typography sx={{ fontSize: 22, fontFamily: "Playfair", color: "black" }} color="text.secondary" gutterBottom>
          {prize}{" : "}{prizeValue}
        </Typography>
        <Typography sx={{ mb: 1.5, fontSize: 21, fontFamily: "Playfair", color: "black" }} gutterBottom>
          {BiggestPrice}
          {}
        </Typography>
      </CardContent>
      <CardActions sx={{alignItems: "center", justifyContent: "center"}}>
        <Button variant='contained' size="large" color={'success'}>Association</Button>
      </CardActions>
    </Card>
  );
}