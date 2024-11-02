import pic1 from "@/app/public/PlayStation.png";
import pic2 from "@/app/public/hero__gnfk5g59t0qe_xlarge_2x 1.png";
import pic3 from "@/app/public/image 36.png";
import Image from "next/image";
import pic4 from "@/app/public/MacBook Pro 14.png";
import image1 from "@/app/public/pic3.png";
import image2 from "@/app/public/image 36.png";
import image3 from "@/app/public/image 41.png";
import image4 from "@/app/public/Macbook 1.png"
export default function Section4() {
    return (
        <>
            <section className="w-screen max-w-screen-2xl 2xl:mx-auto hidden md:block">
                <div className="w-full flex flex-row" >
                    <div className="w-[50%]">
                        <div className="flex flex-row items-center justify-evenly">
                            <div className="md:w-[550px]  md:h-[343px]">
                                <Image src={pic1} alt="" className="w-full h-full" />
                            </div>
                            <div className="text-left">
                                <h2 className="md:text-[49px] font-medium mb-1">Playstation 5</h2>
                                <p className="text-[15px] leading-[26px] font-meduim text-para">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                            </div>
                        </div>
                        <div className="w-[100%] flex flex-row">
                            <div className="w-[50%] bg-back1 flex flex-row items-center justify-between space-x-12">
                         <div className="md:w-[140px] md:h-[272px]]">
                                    <Image src={pic2} alt="" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h2 className="pr-4 md:text-[29px] mb-1">Apple AirPods Max </h2>
                                    <p className="leading-[24px] text-[14px] text-para">Computational audio. Listen, it's powerful</p>
                                </div>
                            </div>
                            <div className="w-[50%] bg-back flex flex-row items-center justify-center space-x-10">
                                <div className="md:w-[200px] md:mt-10 md:h-[220px]">
                                    <Image src={pic3} alt="" className="w-full h-full object-contain" />
                                </div>
                                <div className="pr-4">
                                    <h2 className="md:text-[29px] font-light text-slate-50 mb-1">Apple Vision  <span className="font-bold">Pro</span></h2>
                                    <p className="leading-[24px] text-[14px] text-para">An immersive way to experience entertainment</p>
                                </div>
                            </div>
                            </div>
                            </div>
                            <div className="w-[50%] bg-back1 flex items-center flex-row justify-between gap-10">
                                <div className="pl-9">
                                    <h1 className="text-[64px] text-black">Macbook <span className="font-bold">Air</span></h1>
                                    <p className="text-[15px] leading-[25px] text-para mb-4">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                                    <button className="md:w-[183px] w-[191px] p-3 md:p-3 bg-transparent text-black border-[1px] border-black md:text-[14px] rounded-md">Shop now</button>
                                    </div>
                                    <div className="w-[659px] h-[459px]">
                                        <Image src={pic4} alt="" className="w-full h-full" />
                                    </div>
                            </div>
                    </div>
            </section>
            <section className="md:hidden w-screen max-w-screen-2xl 2xl:mx-auto">
                <div className="w-full">
                  <div className="w-full flex items-center justify-center bg-back1 flex-col p-5"> 
                    <div className="w-[200px] h-[200px] mb-7">
                       <Image src={image1} alt="" className="w-full"/>
                  </div>
                  <div className="text-center">
                    <h2 className="text-[34px] text-black">Apple AirPods <span className="font-bold">Max</span></h2>
                    <p className="text-[15px] leading-[25px] text-para">Computational audio. Listen, it's powerful</p>
                  </div>
                  </div>
                  <div className="w-full flex items-center justify-center flex-col p-6 bg-back"> 
                    <div className="w-192px] h-[200px]">
                       <Image src={image2} alt="" className="w-[270px] h-[160px]"/>
                  </div>
                  <div className="text-center -mt-8 mb-4">
                    <h2 className="text-[34px] text-slate-100">Apple AirPods <span className="font-bold text-slate-100">Max</span></h2>
                    <p className="text-[15px] leading-[25px] text-para">Computational audio. Listen, it's powerful</p>
                  </div>
                  </div>
                  <div className="w-full flex items-center justify-center flex-col p-4"> 
                    <div className="w-[192px] h-[200px]">
                       <Image src={image3} alt="" className="w-[300px] h-[210px]"/>
                  </div>
                  <div className="text-center mt-4 mb-4">
                    <h2 className="text-[34px] text-black">Apple AirPods <span className="font-bold">Max</span></h2>
                    <p className="text-[15px] leading-[25px] text-para">Computational audio. Listen, it's powerful</p>
                  </div>
                  </div>
                  <div className="w-full flex items-center justify-center flex-col p-4 bg-back1"> 
                    <div className="w-[250px] h-[220px]">
                       <Image src={image4} alt="" className="w-[250pc] h-full"/>
                  </div>
                  <div className="text-center -mt-8">
                    <h2 className="text-[34px] text-black">Apple AirPods <span className="font-bold">Max</span></h2>
                    <p className="text-[15px] leading-[25px] text-para">Computational audio. Listen, it's powerful</p>
                  </div>
                  </div>
                </div>
            </section>
        </>
    );
}