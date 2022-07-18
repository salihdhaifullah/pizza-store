import { Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import HomeImage from "../public/images/restaurant-5521372_1920 1.png";

const About = () => {
  return (

    <div className="w-full h-auto grid gap-10 px-10 md:px-20 py-40 mb-20 grid-cols-1 md:grid-cols-2">

      <div className="text-white text-center flex flex-col">
        <Typography variant="h4" className="justify-center text-start md:text-5xl items-center" component="h2">
          ABOUT US
          <span className="h-1 flex mb-3 w-[calc(50%)] rounded-md bg-yellow-600"></span>
        </Typography>
        <br />
        <p className="text-xl text-start min-h-[75%] md:text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br />
          Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
          <br />
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but
          <br />
          also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
      <div className="flex items-center justify-center h-full flex-col relative">
        <Image src={HomeImage} alt="map" className="object-contin w-full md:w-auto abslout" />
      </div>
      <div className="flex justify-center items-center w-full">
        <Button
          variant="outlined"
          className="text-yellow-600 w-fit p-4 text-xl hover:text-white hover:bg-yellow-600 hover:border-yellow-600 border-yellow-600"
        >
          READ MORE
        </Button>
      </div>
    </div>
  );
};

export default About;
