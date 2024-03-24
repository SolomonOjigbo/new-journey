import { useEffect, useMemo, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const Timer = ({ deadline=new Date("2024-03-31T23:59:59").toString() }) => {
    const parsedDeadline = useMemo(() => Date.parse(deadline), [deadline]);
    const [time, setTime] = useState( Date.now() - parsedDeadline);

    useEffect(() => {
        const interval = setInterval(
            () => setTime(parsedDeadline - Date.now()),
            1000,
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-transparent mt-2 text-center px-2 w-1/4  inline-flex">
            {Object.entries({
                DAYS: time / DAY,
                HOURS: (time / HOUR) % 24,
                MINUTES: (time / MINUTE) % 60,
                SECONDS: (time / SECOND) % 60,
            }).map(([label, value]) => (
                <div key={label} className="float-left w-128 mx-1">
                    <div className="border-2 h-20 p-1 w-20 bg-green-500 ">
                        <p className="text-3xl align-middle font-Sharetech text-white mt-3 self-center">{`${Math.floor(value)}`.padStart(2, "0")}</p>
                    </div>
                    <p className="font-Sharetech text-sm text-green-500">{label}</p>
                </div>
            ))}
        </div>
    );
};


// .timer {
//     background-color: rgba(255, 255, 255, 0.1);
//     display: inline-block;
//     margin-top: 25px;
//     padding: 10px;
//     text-align: center;
//     width: 400px;
//   }
  
//   .col-4 {
//     width: 25%;
//     float: left;
//   }
  
//   .box {
//     border-right: solid 1px rgba(255, 255, 255, 0.2);
//     font-weight: 300;
    
//   }
  
//   .col-4:last-child .box {
//     border-right-color: transparent;
//   }
  
//   .box p {
//     font-size: calc(16px + 2vmin);
//     margin: 0;
//   }
  
//   .text {
//     font-size: 14px
//   }