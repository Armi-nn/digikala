import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(4.25 * 60 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (time) =>
    String(time)
      .padStart(2, "0")
      .replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      <Box
        sx={{
          direction: "ltr",
          marginRight: "-5px",
        }}
        className="flex justify-end mt-1 text-black"
      >
        <Box className="bg-white rounded w-7 h-7 cursor-pointer  text-center">
          {formatTime(hours)}
        </Box>
        <Box className="mx-0.5 text-white text-left">:</Box>
        <Box className="bg-white rounded w-7 h-7cursor-pointer  text-center">
          {formatTime(minutes)}
        </Box>
        <Box className="mx-0.5 text-white text-left">:</Box>
        <Box className="bg-white rounded w-7 h-7 cursor-pointer  text-center">
          {formatTime(seconds)}
        </Box>
      </Box>
    </>
  );
};

export default Timer;
