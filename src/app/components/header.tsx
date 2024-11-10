import {CiSearch} from "react-icons/ci";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { RiMenuLine } from "react-icons/ri";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "../components/ui/sheet";
import Link from "next/link";

export default function Header(){
 return(
  <header className="w-screen max-w-screen-2xl xl:mx-auto">
    <nav className="w-[100%] h-[80px] flex flex-row items-center justify-between md:justify-around px-4 md:px-0">
       <span className="text-[25px] font-bold">cyber</span>
       <div className="relative hidden md:block">
      <CiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 text-[19px] font-bold" />
      <input
        type="text"
        placeholder="Search"
        className="pl-9  rounded text-[14px] py-3 w-[320px] bg-pr1 "
      />
    </div>

    <ul className="gap-10 hidden md:flex">
        <Link href={"/"} ><li className="items">Home</li></Link>
        <Link href={"/products"}><li className="items">Products</li></Link>
        <Link href={"/contact"}><li className="items">Contact us</li> </Link>
    </ul>

    <div className="hidden md:flex flex-row gap-5">
   <IoMdHeartEmpty size={26}/>
   <IoCartOutline size={26}/>
   <FiUser size={26}/>
    </div>

    <Sheet>
  <SheetTrigger><RiMenuLine size={28} className="font-bold md:hidden"/></SheetTrigger>
  <SheetContent className="flex flex-col items-center py-32">
    <span className="text-[22px] font-bold text-white relative bottom-6 right-4 " >cyber</span>
  <ul className="mb-4 space-y-24 text-[18px]">
        <Link href={"/"}><li className="items hover:text-white">Home</li></Link>
        <Link href={"/products"}><li className="items   hover:text-white">Products</li></Link>
        <Link href={"/contact"}><li className="items  hover:text-white">Contact us</li></Link>
    </ul>
    <div className="relative">
      <CiSearch className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 text-[19px] font-bold" />
      <input
        type="text"
        placeholder="Search"
        className="pl-9  rounded text-[14px] py-3 w-[100pxpx] bg-pr1 "
      />
    </div>
  </SheetContent>
</Sheet>
    </nav>

  </header>
 );
}