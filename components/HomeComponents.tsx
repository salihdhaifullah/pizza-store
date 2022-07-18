import { Typography } from "@mui/material";
import Image from "next/image";
import homeImage from "../public/images/pizza-3000285_1920 1.png";

const HomeComponents = () => {
  return (
    <div className="bg-hero grid grid-rows-2 bg-center bg-no-repeat relative">
      <div className="flex items-center text-white flex-col justify-center text-center">
        <div className="w-full flex justify-center content-center items-center">
          <Typography variant="h4" className="flex md:text-6xl mt-5 flex-col justify-center content-center items-center" component="h1">
            LA CARAVANA
            <div className="h-1 flex w-[calc(100%+30%)] text-center self-center justify-center items-center mb-10 rounded-md bg-yellow-600"></div>
          </Typography>
        </div>
        <p className="text-center flex mx-[10%] md:mx-[20%] md:text-2xl text-lg text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde
          nobis consectetur natus, voluptas, adipisci rerum fugit qui ut quae
          eligendi quaerat quas, deserunt facere at eos aliquam ipsam animi.
        </p>
      </div>
      <Image src={homeImage} className="object-fill absolute bg-gradient-to-b from-[#88000000] to-black" alt="pizza" />
    </div>
  );
};

export default HomeComponents;
