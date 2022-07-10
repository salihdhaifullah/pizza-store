import { Typography, Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import HomeImage from "../public/images/restaurant-5521372_1920 1.png";

const About = () => {
  return (

    <div className="w-full h-auto grid gap-10 p-20 grid-cols-1 md:grid-cols-2">

      <div className="text-white text-center  w-full">
        <Typography variant="h3" component="h2">
          ABOUT US
          <span className="h-1 flex mb-3 rounded-md bg-yellow-600"></span>
        </Typography>
        <p className="text-center mx-[20%] text-sm md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
          delectus facere quia vitae fugiat dignissimos nisi deserunt nulla
          eligendi enim similique eos, quae maxime soluta voluptatibus ratione
          quo? Hic, magnam?
        </p>
        <div className="w-full flex  items-center justify-center">
          <Button
            variant="outlined"
            className="text-yellow-600 p-4 text-xl hover:text-white hover:bg-yellow-600 hover:border-yellow-600 border-yellow-600"
          >
            READ MORE
          </Button>
        </div>
      </div>
      <div className="flex w-full items-center flex-col relative">
        <Image src={HomeImage} alt="map" className="object-contin w-full md:w-auto abslout" />
      </div>
    </div>
  );
};

export default About;
