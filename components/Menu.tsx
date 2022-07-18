import { Typography, Button } from "@mui/material";
import menImage from "../public/images/pizza-4687558_1920 1.png";
import doughImage from "../public/images/dough-3082589_1920 1.png";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="w-full justify-center mb-20 items-center flex flex-col text-center">
      <Typography
        variant="h4"
        component="h1"
        className="justify-center md:text-5xl flex-col flex w-full items-center"
      >
        OUR MENU
        <span className="h-1 flex w-[calc(50%)] md:w-[calc(30%)] mb-4 rounded-md bg-yellow-600"></span>
      </Typography>
      <Typography component="p" variant="h5" className="md:text-2xl text-xl px-5 mb-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem
        Ipsum has been the industry&apos;s standard dummy text ever since the 1500s,
        when an
        unknown printer took a galley of type and scrambled it to make a type
        specimen
        book. It has survived not only five centuries, but also the leap into
        electronic
        typesetting, remaining essentially unchanged.
      </Typography>
      <div className="grid w-full gap-10 p-20 grid-cols-1 md:grid-cols-2">
        <Image src={menImage} alt="men" className="object-contain" />
        <Image src={doughImage} alt="dough" className="object-contain" />
      </div>
      <Button
        variant="outlined"
        className="text-yellow-600 px-4 py-2 text-2xl hover:text-white hover:bg-yellow-600 hover:border-yellow-600 border-yellow-600"
      >
        MENU
      </Button>
    </div>
  );
};

export default Menu;
