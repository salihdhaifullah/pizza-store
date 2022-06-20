import React from 'react'
import Image from 'next/Image';
import { FaHome } from 'react-icons/fa';
import { VscChevronDown } from 'react-icons/vsc'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
    return (
        <div className="py-2 px-4 bg-white shadow-sm max-w-[100vw] sticky top-0">
            <div className="flex items-center">
                <div className="w-10 h-10 flex flex-shrink-0 cursor-pointer relative">
                    <Image layout='fill' className="object-contain" src="https://i.redd.it/520csmznemr81.png" alt="logo" />
                </div>
                <div className='mx-7 flex items-center xl:min-w-[300px]'>

                    <FaHome className="h-5 w-5" />
                    <p className="ml-2 hidden flex-1 lg:inline">Home</p>
                    <VscChevronDown className="h-5 w-5" />

                </div>

                <form className="flex flex-1 items-center space-x-2 px-2 border-gray-200 border rounded-sm py-2.5 bg-gray-50">
                    <AiOutlineSearch className="h-6 w-6 text-gray-400" />
                    <input type="text" className="outline-none flex flex-1 bg-transparent" placeholder="Search" />
                    <button type="submit" hidden />
                </form>

                <div className="items-center lg:inline-flex hidden mx-5 space-x-2 text-gray-500">
                    <VscChevronDown className="icon" />
                    <VscChevronDown className="icon" />
                    <hr className='h-18 border border-gray-100' />
                </div>

                <div className="flex ml-5 items-center lg:hidden">
                    <AiOutlineMenu className="icon" />
                </div>

                <div className="hidden cursor-pointer items-center space-x-2 mr-2 lg:flex">
                    <div className="h-9 relative w-9 flex-shrink-0">
                        <Image className="object-contain" layout='fill' src="https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022" alt="doge" />
                    </div>
                </div>

                <p className='text-gray-400 hidden lg:inline-flex'>Sing In</p>
            </div>
        </div>
    )
}

export default Header