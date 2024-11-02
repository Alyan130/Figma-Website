import Image from "next/image";
import pic from "../public/Iphone Image.png";
export default function Hero(){
    return(
    <>
    <section className="w-screen max-w-screen-2xl xl:mx-auto">
        <div className="w-[100%] bg-home md:h-[632px] flex md:flex-row md:justify-evenly items-center  h-[769px] flex-col justify-between px-2"> 
        <div className="md:text-start text-center mt-24 mb-16">
             <h2 className="md:text-[25px] text-[27px] leading-[32px] mb-6 text-white opacity-40 font-bold">Pro.Beyond</h2>
             <h1 data-aos="zoom-in" className="md:text-[96px] mb-5 text-white text-[72px] font-hfont leading-[76px]">IPhone 14 <span className="font-semibold font-sans">Pro</span></h1>
             <p className="md:text-[18px] text-white opacity-40 leading-[24px] mb-7 text-[19px] ">Created to change everything for the better. For everyone</p>
             <button className="md:w-[191px] w-[172px] md:p-3 md:text-[16px] border-[1px] bg-home rounded-md text text-white p-2">Shop Now</button>
        </div>
        <div className=" md:h-[632px] w-[258px] md:w-[350px] md:mt-[1px]  h-[320px] -mt-24"> 
           <Image src={pic} alt="" className="w-full h-full object-center"/>
        </div>
        </div>
    </section>
    </>
    );
}