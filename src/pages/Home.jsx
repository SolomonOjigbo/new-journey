import React from 'react'
import PageLayout from '../layouts/PageLayout';
import BasicCard from '../components/Card';
import SolarStar from "../assests/icons/solar_star.png";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Navbar from '../components/Navbar';
import BiggestPrice from "../assests/images/biggest-price.png"
import Countdown from 'react-countdown';
import { Timer } from '../components/Timer';
import Bingo from '../assests/images/Bingo2.png'


const winners = [
    "Julie",
    "Serenity",
    "Kathryn",
    "Claire",
    "Audrey",
    "Connie",
    "Regina",
    "Savannah",
    "Courtney",
    "Bassie",

]

function Home() {
  return (
    <container>
        <Navbar />
        
            <div className='flex absolute left-96 self-center bg-transparent flex-1 h-64 px-8 mx-4 py-10 text-center justify-center w-i/2 -z-10 mt-48'>
                {/* <h2 className='font-Playfair stroke-orange-50 text-9xl text-white text-center  '>Bingo</h2> */}

                <img src={Bingo} alt="Bingo" width="100%" height="100%"/>
            </div>
        <div className='flex-col mt-48'>

        <div className='flex flex-row px-20 justify-between min-w-full'>
            <div className='flex flex-col w-1/2 px-4'>
                <BasicCard title="Latest Jackpot Winner" subtitle="29th January" content="James W." background="indigo" icon={SolarStar} height="335px" width="335px" color="white"/>

                <div className='flex mt-8 text-black font-Playfair'>
                <p>Lorem ipsum dolor sit amet consectetur. Malesuada ut mattis risus turpis lacus a quisque nibh. Tincidunt ornare habitant luctus aliquam feugiat. Egestas nunc vel tristique pulvinar eu tristique non. Id et vitae lacinia porttitor erat diam amet.</p>
                </div>
                <div className='flex flex-row justify-start space-x-6 my-11 font-Playfair'>
                <div className='bg-yellow-300 py-3 px-2 w-48 text-center justify-start font-Playfair rounded-md'>Play</div>
                <div className='bg-green-400 py-3 px-2 w-48 text-center justify-start font-Playfair rounded-lg'>Association</div>
                </div>
                <div className='flex w-full flex-col justify-center align-middle'>
                    <div className='flex w-96 justify-center h-36 border-4 border-amber-600 rounded-xl' >
                        <div className='justify-center w-full flex-col bg-opacity-40 bg-white'>
                            <h4 className='text-green-500  mx-10 font-Sharetech'> TIME REMAINING TO NEXT DRAW</h4>
                        <Timer />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex w-1/2 flex-col'>
                <img width="679px" height="679px" src={BiggestPrice} alt='Bingo'/>
                <div className='flex flex-row justify-center space-x-4'> 
                <div className='w-1/4 h-24 flex flex-col py-2 px-4 border-2 border-amber-600 rounded-lg' >
                    <h3 className='text-4xl text-white font-Sharetech justify-center text-center align-middle '> 1.3M</h3>
                    <h6 className='text-sm text-white justify-center text-center align-middle px-4 pb-10' >Games Played</h6>
                    </div>
                    <div className='w-1/4 h-24 flex flex-col py-2 px-4 border-2 border-amber-600 rounded-lg' >
                    <h3 className='text-4xl text-white font-Sharetech justify-center text-center align-middle '> 900k</h3>
                    <span className='text-sm text-white justify-center text-center align-middle px-4 pb-10' >Total Winnings</span>
                    </div>
                    <div className='w-1/4 h-24 flex flex-col py-2 px-4 border-2 border-amber-600 rounded-lg' >
                    <h3 className='text-4xl text-white font-Sharetech justify-center text-center align-middle '> 300k</h3>
                    <h6 className='text-sm text-white justify-center text-center align-middle px-4 pb-10' >Active Players</h6>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className='flex h-8 w-full bg-white my-10 flex-row justify-between px-16 align-middle'>
                <h5 className='mt-1 align-middle font-Playfair'>Recent Winners</h5>
            <div className='flex flex-row justify-center space-x-16 align-middle'>

            {winners.map((winner, index)=> (
                <div className="flex flex-row justify-between w-8"  key={index}> 
                <span className='mt-1 font-Playfair'>{winner}</span>
                <div className='border border-gray-900 h-8 mx-2 '/>
                </div>
            ))}
            </div>
            
        </div>
        </div>

    </container>
  )
}

export default Home