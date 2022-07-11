import { Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import pizzaDown from '../public/images/pizza-down.png'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    const YearNew = new Date().getFullYear()
    return (
        <div className="w-full flex justify-center flex-col items-center">
            <div className="bg-no-repeat  bg-hero object-fill grid-rows-2 h-[100vh] w-[100vw">
                <Image src={pizzaDown} alt="map" className="object-contin w-full md:w-auto abslout" />
                <div className="w-full mb-40">
                    <div className="w-full flex justify-center content-center items-center">
                        <Typography variant="h2" className="flex flex-col justify-center content-center items-center" component="h1">
                            LA CARAVANA
                            <div className="h-2 flex w-[calc(100%+30%)] text-center self-center justify-center items-center mb-10 rounded-md bg-yellow-600"></div>
                        </Typography>
                    </div>          
                    <div className="flex gap-6 w-full flex-row justify-center items-center text-white">
                        <FaFacebookF className="text-5xl hover:text-6xl hover:text-yellow-600 transition-all  p-2 cursor-pointer bg-black rounded-full" />
                        <FaInstagram className="text-5xl hover:text-6xl hover:text-yellow-600 transition-all  p-2 cursor-pointer bg-black rounded-full" />
                        <FaWhatsapp className="text-5xl  hover:text-6xl hover:text-yellow-600 transition-all p-2 cursor-pointer bg-black rounded-full" />
                    </div>
                </div>
            </div>
            <footer className="container w-full flex justify-center items-center p-4 bg-black">
                <Typography variant="h6" component="h2" className="text-[18px] h-full flex w-full items-center justify-center">
                    TODOS LOS DERECHOS RESERVADOS © LA CARAVANA {YearNew} & DESIGN: MEZORA & DEVELOPMENT: SALIH
                </Typography>
            </footer>
        </div>
    )
}

export default Footer