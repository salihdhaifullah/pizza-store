import { Typography } from "@mui/material";
import Image from "next/image";
import homeImage from "../public/images/pizza-3000285_1920 1.png";

const HomeComponents = () => {
  return (
    <div className="bg-hero grid grid-rows-2 bg-center bg-no-repeat pt-10 relative">
      <div className="flex items-center text-white flex-col justify-center text-center">
        <div className="w-full flex justify-center content-center items-center">
          <Typography variant="h2" className="flex flex-col justify-center content-center items-center" component="h1">
            LA CARAVANA
            <div className="h-2 flex w-[calc(100%+30%)] text-center self-center justify-center items-center mb-10 rounded-md bg-yellow-600"></div>
          </Typography>
        </div>
        <p className="text-center flex mx-[20%] text-2xl text-gray-100 md:text-3xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde
          <br />
          nobis consectetur natus, voluptas, adipisci rerum fugit qui ut quae
          <br />
          eligendi quaerat quas, deserunt facere at eos aliquam ipsam animi.
        </p>
      </div>
      <Image src={homeImage} className="object-fill bg-gradient-to-b from-[#88000000] to-black" alt="pizza" />
    </div>
  );
};

export default HomeComponents;
