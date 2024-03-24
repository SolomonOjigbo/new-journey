import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import PopularCards from '../components/PopularCards';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


const popularBingos = [
    {
       label: "Association", value: 'Tennis Club',
        NoOfTickets:"No of Tickets", quntity: "180",
        TicketPrice:"Ticket Price", price: "$150",
        prize:"Prize", prizeValue: "$500",
        BiggestPrice: "Biggest Price", biggestValue: "$50000"
    },
    {
       label: "Association", value: 'Football Club',
        NoOfTickets:"No of Tickets", quntity: "180",
        TicketPrice:"Ticket Price", price: "$150",
        prize:"Prize", prizeValue: "$500",
        BiggestPrice: "Biggest Price", biggestValue: "$50000"
    },
    {
       label: "Association", value: 'Soccer Club',
        NoOfTickets:"No of Tickets", quntity: "180",
        TicketPrice:"Ticket Price", price: "$150",
        prize:"Prize", prizeValue: "$500",
        BiggestPrice: "Biggest Price", biggestValue: "$50000"
    },
    {
      label:  "Association", value: 'Baseball Club',
        NoOfTickets:"No of Tickets", quntity: "180",
        TicketPrice:"Ticket Price", price: "$150",
        prize:"Prize", prizeValue: "$500",
        BiggestPrice: "Biggest Price", biggestValue: "$50000"
    },
]

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(drawDate, association, firstPrice, donation, ticketPrice, status) {
    return { drawDate, association, firstPrice, donation, ticketPrice, status };
  }
  
  const rows = [
    createData('Mar 6, 2024', "Football club", "Game Ticket", "3000$", "10$", "Play"),
    createData('Mar 6, 2024', "Tennis club", "Club tour", "3000$", "20$", "Play"),
    createData('Mar 7, 2024', "Tennis club", "Club tour", "3000$", "30$", "Play"),
    createData('Mar 7, 2024', "Football club", "Car", "90000$", "100$", "Finished"),
    createData('Mar 8, 2024', "Soccer club", "Bicycle", "3000$", "50$", "Play"),
    
  ];

function AllBingos() {
  return (
    <container className="min-w-full px-8 ">
        <Navbar />
        
            
        <div className='flex-col mt-48 w-full px-16'>

        <div className='flex flex-row justify-center space-x-6 align-middle px-8'>
            {popularBingos.map((bingo, index)=> (
                <div key={index} className="mx-6">
                <PopularCards 
                    label={bingo.label}
                    value={bingo.value}
                    NoOfTickets={bingo.NoOfTickets}
                    quantity={bingo.quntity}
                    TicketPrice={bingo.TicketPrice}
                    price={bingo.price}
                    prizeValue={bingo.prizeValue}
                    prize={bingo.prize}
                    BiggestPrice={bingo.BiggestPrice}
                />
                </div>
            ))}
        </div>
        <div className='w-full px-6 my-12 justify-center '>
               <TableContainer sx={{ padding: 2, border: 3, borderRadius:5, borderColor: "#ffc800"}}component={Paper}>
               <Box >
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10}}>

                <Typography sx={{  fontSize: 24, fontFamily: "Playfair"}}>
                Trending Bingos
                </Typography>
                <Typography sx={{ fontSize: 20, fontFamily: "Playfair"}}>
                See All Bingos
                </Typography>
                </div>
            </Box>
      <Table sx={{ width: 1280, fontSize: 17, fontFamily: "Playfair", padding: 10 }} aria-label="customized table">
            
        <TableHead>
          <TableRow sx={{ padding: 5}} >
            <StyledTableCell style={{ fontSize: 22, fontFamily: "Playfair" }}>Draw Date</StyledTableCell>
            <StyledTableCell align="center" style={{ fontSize: 22, fontFamily: "Playfair" }}>Association</StyledTableCell>
            <StyledTableCell align="center" style={{ fontSize: 22, fontFamily: "Playfair" }}> 1st Price($)</StyledTableCell>
            <StyledTableCell align="center" style={{ fontSize: 22, fontFamily: "Playfair" }}>Donation</StyledTableCell>
            <StyledTableCell align="center" style={{ fontSize: 22, fontFamily: "Playfair" }}>Ticket Price</StyledTableCell>
            <StyledTableCell align="left" style={{ fontSize: 22, fontFamily: "Playfair" }}>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row" style={{ fontSize: 20, fontFamily: "Playfair" }}>
                {row.drawDate}
              </StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 20, fontFamily: "Playfair" }}>{row.association}</StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 20, fontFamily: "Playfair" }}>{row.firstPrice}</StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 20, fontFamily: "Playfair" }}>{row.donation}</StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 20, fontFamily: "Playfair" }}>{row.ticketPrice}</StyledTableCell>
              <StyledTableCell align="center" style={{ fontSize: 20, fontFamily: "Playfair"}}> <Typography sx={{ padding: 1, backgroundColor: "#85E8C3", borderRadius: 2, width: 86, alignContent: "flex-end" }}>{row.status}</Typography></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
        </div>
        </div>

    </container>
  )
}

export default AllBingos