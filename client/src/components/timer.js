import { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import React from 'react';


const Timer = () => {
    const [countDown, setCountDown] = useState(0)
    const [runTimer, setRunTimer] = useState(false);

    useEffect(() => {
        let timerId;

        if (runTimer) {
            setCountDown(60 * 5);
            timerId = setInterval(() => {
                setCountDown((countDown) => countDown - 1);
            }, 1000);
        } else {
            clearInterval(timerId);
        }
        return () => clearInterval(timerId);
    }, [runTimer]);


    const seconds = String(countDown % 60).padStart(2, 0);
    const minutes = String(Math.floor(countDown / 60)).padStart(2, 0);

    useEffect(() => {
        if (countDown < 0 && runTimer) {
            console.log("expired");
            setRunTimer(false);
            setCountDown(0);
        }
    }, [countDown, runTimer]);


    return (
        <Box mr="0.5rem">
            <Typography sx={{
                fontFamily: "Keania One",
                fontWeight: 400,
                fontSize: "30pt",
                fontStyle: "normal",
                color: "#FFC700"
            }}>
                {minutes}:{seconds}
            </Typography>
        </Box>
    );

}
export default Timer