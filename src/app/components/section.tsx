import Image from "next/image";
import pic1 from "../public/sect1.png";
import pic2 from "../public/ic2.png";
import pic3 from "../public/image 41.png";
import pic4 from "../public/Macbook 1.png";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./ui/carousel";
  

export default function Section(){
return(
<section className="py-20 sm:py-24  w-screen max-w-screen-2xl xl:mx-auto p-2 flex items-center justify-center">
<Carousel className="w-[90%] ml-2 md:ml-0">
  <CarouselContent className="w-[100%] gap-2 md:gap-0">
    <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-4 flex flex-col items-center justify-center">
        <div className="mb-7">
          <Image src={pic2} alt="" width={300} height={280}></Image>
        </div>
        <div className="px-4 md:px-7 w-[100%] text-center md:text-left">
           <h2 className="text-[26px] mb-4 md:text-[32px] font-light mb-3">Popular Products</h2>
           <p className="text-[15px] leading-[25px]  mb-4 text-para mb-3">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
           <button className="w-[50%] p-2 text-[17px] font-font1 border-[1px] rounded-md border-black ">Shop now</button>
        </div>
    </CarouselItem>   

    <CarouselItem className="md:basis-1/2 lg:basis-1/3 p-4 flex flex-col items-center justify-center">
        <div className="mb-7">
          <Image src={pic1} alt="" width={300} height={320}></Image>
        </div>
        <div className="px-4 md:px-7 w-[100%] text-center md:text-left">
           <h2 className="text-[26px] mb-4 md:text-[32px] font-light mb-3">Ipad Pro</h2>
           <p className="text-[15px] leading-[25px]  mb-4 text-para mb-3">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
           <button className="w-[50%] p-2 text-[17px] font-font1 border-[1px] rounded-md border-black ">Shop now</button>
        </div>
    </CarouselItem>    

    <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-slate-200 p-4 flex flex-col items-center justify-center">
        <div className="mb-7">
          <Image src={pic3} alt="" width={300} height={280}></Image>
        </div>
        <div className="px-4 md:px-7 w-[100%] text-center md:text-left">
           <h2 className="text-[26px] mb-4 md:text-[32px] font-light mb-3">Popular Products</h2>
           <p className="text-[15px] leading-[25px]  mb-4 text-para mb-3">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
           <button className="w-[50%] p-2 text-[17px] font-font1 border-[1px] rounded-md border-black ">Shop now</button>
        </div>
    </CarouselItem>


    <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-black p-4 flex flex-col items-center justify-center">
        <div className="mb-7">
          <Image src={pic4} alt="" width={300} height={280}></Image>
        </div>
        <div className="px-4 md:px-7 w-[100%] text-center md:text-left">
           <h2 className="-mt-2 text-[26px] mb-4 text-slate-100  md:text-[32px] font-light mb-3">Popular Products</h2>
           <p className="text-[15px] leading-[25px] text-slate-100 mb-4 text-para mb-3">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
           <button className="w-[55%] p-2 text-[17px] text-slate-100 font-font1 border-[1px] rounded-md border-white ">Shop now</button>
        </div>
    </CarouselItem>   
  </CarouselContent>
  <CarouselPrevious className="hidden md:inline"/>
  <CarouselNext className="hidden md:inline" />
</Carousel>
</section>
);
} 