import { Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import HomeImage from "../public/images/restaurant-5521372_1920 1.png";

const About = () => {
  return (

    <div className="w-full h-auto grid gap-10 p-20 py-40 grid-cols-1 md:grid-cols-2">

      <div className="text-white text-center flex flex-col">
        <Typography variant="h2" className="justify-center text-start items-center" component="h2">
          ABOUT US
          <span className="h-2 flex mb-3 w-[calc(50%)] rounded-md bg-yellow-600"></span>
        </Typography>
        <br />
        <p className="text-xl text-start min-h-[75%] md:text-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <br />
          <br />
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          <br />
          <br />
          <br />
          when an unknown printer took a galley of type and scrambled it to make a type
          <br />
          specimen book. It has survived not only five centuries, but
          <br />
          <br />
          also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
        <div className="flex w-full items-center justify-center">
          <Button
            variant="outlined"
            className="text-yellow-600 p-4 text-xl hover:text-white hover:bg-yellow-600 hover:border-yellow-600 border-yellow-600"
          >
            READ MORE
          </Button>
        </div>
      </div>
      <div className="flex items-center flex-col relative">
        <Image src={HomeImage} alt="map" className="object-contin w-full md:w-auto abslout" />
      </div>
    </div>
  );
};

export default About;
