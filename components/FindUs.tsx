import React from "react";
import { Typography } from "@mui/material";
import Image from "next/image";
import mapImage from "../public/images/image 1.png"


const FindUs = () => {
  return (
    <div className="w-full relative mb-60 flex justify-evenly flex-col">
      <div className="w-full flex justify-center flex-col items-center">
        <Typography
          variant="h2"
          className="justify-center flex-col flex w-full items-center"
          component="h1"
        >
          FIND US
          <span className="h-2 flex w-[calc(25%)] mb-10 rounded-md bg-yellow-600"></span>
        </Typography>
      </div>
      <div className="w-full h-auto grid gap-10 p-20 grid-cols-1 md:grid-cols-2">
        <div className="flex w-full items-center flex-col relative">
          <Image src={mapImage} alt="map" className="object-contin w-full md:w-auto abslout" />
        </div>
        <div className='flex w-full items-center flex-col'>
          <Typography
            variant="h4"
            className="text-[18px] h-full md:text-[28px] text-start flex
          w-full items-center justify-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s.
            <br />
            <br />
            <br />
            <br />
            ATTENDANCE
            Monday to Sunday  12:00pm - 8:00pm
            <br />
            <br />
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
