import { Typography } from '@mui/material'
import Image from 'next/image'
import Copyright from './Copyright'
import pizzaDown from '../public/images/pizza-down.png'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    const YearNew = new Date().getFullYear()
    return (
        <div className="w-full flex justify-center flex-col items-center">
            <div className="bg-no-repeat   bg-hero object-fill grid-rows-2 lg:min-h-[100vh] ">
                <Image src={pizzaDown} alt="map" className="object-contain w-full md:w-auto absolute" />
                <div className="w-full mb-40">
                    <div className="w-full flex justify-center content-center items-center">
                        <Typography variant="h4" className="flex md:text-4xl flex-col justify-center content-center items-center" component="h1">
                            LA CARAVANA
                            <div className="h-1 flex w-[calc(100%)] text-center justify-center items-center mb-10 rounded-md bg-yellow-600"></div>
                        </Typography>
                    </div>
                    <div className="flex gap-6 w-full flex-row justify-center items-center text-white">
                        <FaFacebookF className="text-5xl hover:text-6xl hover:text-yellow-600 transition-all  p-2 cursor-pointer bg-black rounded-full" />
                        <FaInstagram className="text-5xl hover:text-6xl hover:text-yellow-600 transition-all  p-2 cursor-pointer bg-black rounded-full" />
                        <FaWhatsapp className="text-5xl  hover:text-6xl hover:text-yellow-600 transition-all p-2 cursor-pointer bg-black rounded-full" />
                    </div>
                </div>
            </div>
            <Copyright />
        </div>
    )
}

export default Footer