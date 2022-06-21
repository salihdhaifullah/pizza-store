import Image from 'next/Image';
import { signIn, useSession, signOut } from 'next-auth/react'
import { FaHome } from 'react-icons/fa';
import { VscChevronDown } from 'react-icons/vsc'
import { AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'

const Header = () => {
    const { data: session } = useSession()
    return (
        <div className="bg-white shadow-sm sm:px-4 px-2 py-2 sticky top-0">
            <ul className="flex">

                <li className="w-10 h-10 flex flex-shrink-0 cursor-pointer relative">
                    <Image layout='fill' className="object-contain" src="https://i.redd.it/520csmznemr81.png" alt="logo" />
                </li>

                <li className='mx-7 sm:flex hidden items-center xl:min-w-[300px]'>
                    <FaHome className="icon" />
                    <p className="ml-2 hidden flex-1 lg:inline-flex">Home</p>
                    <VscChevronDown className="icon" />
                </li>

                <li className="flex flex-1 items-center space-x-2 px-2 ml-2 border-gray-200 border rounded-lg sm:py-2.5 py-1.5 bg-gray-50">
                    <form className="flex items-center flex-1">
                        <AiOutlineSearch className="h-6 w-6 text-gray-400" />
                        <input type="text" className="outline-none flex flex-1 bg-transparent" placeholder="Search" />
                        <button type="submit" hidden />
                    </form>
                </li>

                <li className="items-center lg:flex hidden mx-5 space-x-2 text-gray-500">
                    <VscChevronDown className="icon" />
                    <VscChevronDown className="icon" />
                </li>

                <li className="flex items-center ml-2 sm:ml-4 lg:hidden">
                    <AiOutlineMenu className="icon" />
                </li>

                {session ? (
                    <li className="hidden items-center space-x-2 lg:flex">
                        <div className="h-9 relative w-9 flex-shrink-0 ">
                            <Image className="object-contain rounded-full" layout='fill' src={session?.user?.image || "https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022"} alt="doge" />
                        </div>

                        <div className="flex-1 text-xs">
                            <p>{session?.user?.name}</p>
                            <p onClick={() => signOut()} className='text-gray-400 cursor-pointer hidden lg:flex'>Sign Out</p>
                        </div>
                        <VscChevronDown className="icon" />
                    </li>
                ) : (
                    <li className="hidden  items-center space-x-2 lg:flex">
                        <div className="h-9 relative w-9 flex-shrink-0">
                            <Image className="object-contain" layout='fill' src="https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022" alt="doge" />
                        </div>
                        <p onClick={() => signIn()} className='text-gray-400 cursor-pointer hidden lg:flex'>Sing In</p>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default Header