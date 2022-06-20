import React from 'react'
import Image from 'next/Image';
import { FaHome } from 'react-icons/fa';
import {VscChevronDown} from 'react-icons/vsc'

const Header = () => {
    return (
        <div className="py-2 px-4 bg-white shadow-sm flex items-center">
            <div className="w-10 h-10 flex flex-shrink-0 cursor-pointer relative">
                <Image layout='fill' className="object-contain" src="https://i.redd.it/520csmznemr81.png" alt="logo" />
            </div>
            <div className='mx-7 flex items-center'>

                <FaHome />
                <p>Home</p>
                <VscChevronDown />

            </div>
        </div>
    )
}

export default Header