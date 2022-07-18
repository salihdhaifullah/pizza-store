import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import mapImage from "../public/images/image 1.png"


const FindUs = () => {
  return (
    <div className="w-full relative mb-60 flex justify-evenly flex-col">
      <div className="w-full flex justify-center flex-col items-center">
        <Typography
          variant="h4"
          className="justify-center md:text-5xl flex-col flex w-full items-center"
          component="h1"
        >
          FIND US
          <span className="h-1 flex md:w-[calc(30%)] w-[calc(50%)] mb-10 rounded-md bg-yellow-600"></span>
        </Typography>
      </div>
      <div className="w-full h-auto grid gap-10 p-10 md:p-20 grid-cols-1 md:grid-cols-2">
        <div className="flex w-full items-center h-full justify-center flex-col relative">
          <Image src={mapImage} alt="map" className="object-contain w-full md:w-auto absolute" />
        </div>
        <div className='flex w-full items-center flex-col'>
          <Typography
            variant="h5"
            className="text-[16px] h-full md:text-[20px] text-start flex
          w-full items-center justify-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy text
            ever since the 1500s.
            <br />
            <br />
            ATTENDANCE
            Monday to Sunday  12:00pm - 8:00pm
            <br />
            <br />
            DELIVERY
            Monday - Sunday  12:00pm - 8:00pm
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
