import pic1 from "../public/Phones.png";
import pic2 from "../public/Smart Watches.png";
import pic3 from "../public/Computers.png";
import pic4 from "../public/Gaming.png";
import pic5 from "../public/Headphones.png";
import Image from "next/image";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "./ui/carousel";
  
export default function Feature(){
    type cards={
        image:string,
        text:string,
    }
 
    const slider:cards[]=[
    {image:pic1.src,text:"Phone"},
    {image:pic2.src,text:"Smart Watch"},
    {image:pic3.src,text:"Computer"},
    {image:pic4.src,text:"Gaming"},
    {image:pic5.src,text:"Headphones"},
    ]


    return(
     <section className="py-20 w-screen max-w-screen-2xl xl:mx-auto flex items-center justify-center">
        <div className="w-[85%]">
            <div className="w-full py-1 flex flex-row items-center justify-between  mb-5">
                <span className="text-[24px] font-semibold">Browse By Category</span>
            </div>
<Carousel className="w-[100%]">
  <CarouselContent className="p-2 md:gap-5">
    {slider.map((e,index)=>
    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 bg-slate-100  flex flex-col items-center justify-center p-3 h-72 border-r-[2px] border-gray-300">
        <Image src={e.image} alt="" width={40} height={40} className="w-[40%] mb-4"/>
        <h2 className="text-[22px]">{e.text}</h2>
    </CarouselItem>
)}
  </CarouselContent>
  <CarouselPrevious className="hidden md:inline"/>
  <CarouselNext className="hidden md:inline" />
</Carousel>


        </div>
     </section>
    );
}