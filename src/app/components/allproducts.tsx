import { BiHeart } from "react-icons/bi";
import pic1  from "../public/pic0.png";
import pic2  from "../public/pic1.png";
import pic3  from "../public/ic2.png";
import pic4  from "../public/pic3.png";
import pic5  from "../public/pic4.png";
import pic6  from "../public/pic5.png";
import pic7  from "../public/pic6.png";
import pic8  from "../public/pic7.png";
import pic9 from "../public/iwhite.png";
import pic10 from "../public/gold.png";
import pic11 from "../public/2cam.png";
import pic12 from "../public/11pro.png";
export default function Myroducts(){

  type list={
    image:string,
    text:string,
    price:string,
    anim:string,
  }

  const products:list[]=[
   {image:pic1.src, text:"Apple iPhone 14 Pro Max 128GB Deep Purple",price:"$900",anim:"fade-in"},
   {image:pic2.src, text:"Blackmagic Pocket Cinema Camera 6k",price:"$2535",anim:"fade-in"},
   {image:pic3.src, text:"Apple Watch Series 9 GPS 41mm Starlight Aluminium ",price:"$359",anim:"fade-in"},
   {image:pic4.src, text:"AirPods Max Silver Starlight Aluminium ",price:"$549",anim:"fade-in"},
   {image:pic5.src, text:"Samsung Galaxy Watch6 Classic 47mm Black",price:"$369",anim:"fade-in"},
   {image:pic6.src, text:"Galaxy Z Fold5 Unlocked | 256GB | Phantom Black",price:"$1799",anim:"fade-in"},
   {image:pic7.src, text:"Galaxy Buds FEGraphite",price:"$99.99",anim:"fade-in"},
   {image:pic8.src, text:"Apple iPad 9 10.2 64GB Wi-Fi Silver (MK2L3) 2021",price:"$1299",anim:"fade-in"},
   {image:pic9.src, text:"Apple iPhone 14 Pro 1TB Gold (MQ2V3)",price:"$865 ",anim:"flip-left"},
   {image:pic10.src, text:"Apple iPhone 14 Pro 512GB Gold (MQ233)",price:"$545 ",anim:"flip-left"},
   {image:pic11.src, text:"Apple iPhone 11 128GB White (MQ233)",price:"$480",anim:"flip-left"},
   {image:pic12.src, text:"Apple iPhone 13 mini 128GB Pink (MLK23)",price:"$850",anim:"flip-left"},
  ]
    return(
      <>
      <section className="-py-4 sm:py-8 w-screen max-w-screen-2xl xl:mx-auto flex-col flex items-center justify-center">
    <div className="w-[90%] flex md:flex-start ml-4 mb-6 md:mb-12 text-center">
      <h1 className="md:text-[82px] mb-5 text-black text-[60px] font-hfont leading-[75px]">Products We<span className="font-semibold font-sans"> Offer</span></h1>
      </div>
            <div className="w-[100%] flex flex-row flex-wrap md:gap-4 gap-2 justify-center items-center">
              {products.map((e,index)=>
               <div key={index} data-aos={e.anim} className="md:w-[268px] shadow-md hover:bg-back1 transition ease-in duration-300 xs:w-[150px] w-[170px] h-[352px] md:h-[432px] bg-pr1 flex flex-col items-center justify-evenly">
                 <div className="w-[100%] flex justify-end pr-2">
                  <BiHeart className="md:text-3xl text-2xl text-gray-300"/>
                 </div>
                 <div className="md:w-[160px] w-[104px] h-[104px] md:h-[160px] bg-cover" style={{backgroundImage:`url(${e.image})`}}>
                 </div>
                 <div className="text-center px-5">
                  <p className="text-[16px] xs:text-[15px] xs:leading[22px] leading-[24px] font-meduim mb-2 text-black">{e.text}</p>
                  <h3 className="text-[25px] font-semibold mb-3 xs:text-[22px] text-black">{e.price}</h3>
                  <button className="md:w-[183px] w-[110px] p-1 md:p-3 bg-black text-white md:text-[14px] rounded-[6px]">Buy Now</button>
                 </div>
               </div>
              )};
            </div>
      </section>
      </>
    );
}
