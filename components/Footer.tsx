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
                    <div className="w-full flex justify-center items-center">
                        <Typography variant="h2" className="text-[28px] md:text-[38px]" component="h1">
                            LA CARAVANA
                            <span className="h-1 flex w-full mb-10 rounded-md bg-yellow-600"></span>
                        </Typography>
                    </div>          
                    <div className="flex gap-6 w-full flex-row justify-center items-center text-white">
                        <FaFacebookF className="text-5xl p-2 cursor-pointer bg-black rounded-full" />
                        <FaInstagram className="text-5xl p-2 cursor-pointer bg-black rounded-full" />
                        <FaWhatsapp className="text-5xl p-2 cursor-pointer bg-black rounded-full" />
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