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
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import InputBase from '@mui/material/InputBase';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    
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
    createData('Mar 8, 2024', "Soccer club", "Bicycle", "3000$", "50$", "Play"),
    createData('Mar 6, 2024', "Football club", "Game Ticket", "3000$", "10$", "Play"),
    createData('Mar 7, 2024', "Tennis club", "Club tour", "3000$", "30$", "Play"),
    createData('Mar 8, 2024', "Soccer club", "Bicycle", "3000$", "50$", "Play"),
    createData('Mar 6, 2024', "Tennis club", "Club tour", "3000$", "20$", "Play"),
    createData('Mar 7, 2024', "Football club", "Car", "90000$", "100$", "Finished"),
    createData('Mar 8, 2024', "Soccer club", "Bicycle", "3000$", "50$", "Play"),
    
  ];

function Play() {
  return (
    <container className="min-w-full px-8 ">
        <Navbar />
        
            
        <div className='flex-col mt-48 w-full px-16'>
        <div className='w-full px-6 my-12 justify-center '>
               <TableContainer sx={{ padding: 2, border: 3, borderRadius:5, borderColor: "#ffc800", backgroundColor: "#e1e1ffdd"}}component={Paper}>
               <Box >
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", padding: 10}}>

                <Typography sx={{  fontSize: 24, fontFamily: "Playfair"}}>
                Trending Bingos'
                </Typography>
                <div className='flex flex-row space-x-1'>
                <Box sx={{height: 40, width: 180, border: 'none', borderColor: "#a6a6a66b", backgroundColor: "#fff",alignItems: "center", justifyContent: "space-around", marginBottom: 1, gap: 5}} >
                <SearchOutlinedIcon sx={{width: "40px", alignItems: "center", justifyContent: "flex-start"}} />
                <InputBase id="outlined-basic" placeholder="Search"  sx={{ width: 100, fontSize: 18, fontFamily: "Playfair", border: 0}}/>
                </Box>
                <Box sx={{height: 40, width: 180, border: 'none', borderColor: "#a6a6a66b", backgroundColor: "#fff",alignItems: "center", justifyContent: "space-around", marginBottom: 1, gap: 5}}>
                <FilterListOutlinedIcon sx={{width: "40px", alignItems: "center"}} />
                <InputBase id="outlined-basic" placeholder="Sort" sx={{ width: 100, fontSize: 18, fontFamily: "Playfair", border: 0}}/>
                </Box>
                </div>
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

export default Play;