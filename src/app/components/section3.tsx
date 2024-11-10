import Image from "next/image";
import pic from "@/app/public/Banner.png";
import pic2 from "@/app//public/mobile.png";
export default function Section3(){
    return(
    <>
    <section id="#section3" className="mt-12 md:mt-20 w-screen max-w-screen-2xl xl:mx-auto">
    <div className="w-full relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center ">
            <h1 data-aos="fade-right" className="text-[48px] mb-0 text-white font-extralight font-hfont  sm:text-[52px] md:text-[72px] sm:ml-14 ">Big Summer <span className="sm-text-[48px] font-sans md:text-[72px] font-bold sm:inline hidden">Sale</span></h1>
            <h2 className="text-[48px] mb-5 text-white font-bold] md:hidden sm:hidden">Sale</h2>
            <p className="text-[16px] text-para hidden sm:block mb-9">Commodo fames vitae vitae leo mauris in. Eu consequat. </p>
            <button className="md:w-[183px] w-[191px] p-3 md:p-3 bg-transparent text-white border-[1px] border-white md:text-[14px] rounded-md">Shop now</button>
        </div>
        <Image src={pic} alt="" quality={100} priority={true} className="w-[100%] h-[55vh] hidden sm:block" ></Image>
        <Image src={pic2} alt="" className="w-[100%] h-[50vh] bg-cover sm:hidden" /> 
    </div>
    </section>
    </>
    );
}